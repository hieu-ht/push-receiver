"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const protobufjs_1 = __importDefault(require("protobufjs"));
const logger_1 = __importDefault(require("./utils/logger"));
const protos_1 = __importDefault(require("./protos"));
const constants_1 = require("./constants");
// Parser parses wire data from gcm.
// This takes the role of WaitForData in the chromium connection handler.
//
// The main differences from the chromium implementation are:
// - Did not use a max packet length (kDefaultDataPacketLimit), instead we just
//   buffer data in this.data
// - Error handling around protobufs
// - Setting timeouts while waiting for data
//
// ref: https://cs.chromium.org/chromium/src/google_apis/gcm/engine/connection_handler_impl.cc?rcl=dc7c41bc0ee5fee0ed269495dde6b8c40df43e40&l=178
class Parser extends events_1.default {
    constructor(socket) {
        super();
        this.state = constants_1.ProcessingState.MCS_VERSION_TAG_AND_SIZE;
        this.data = Buffer.alloc(0);
        this.messageTag = 0;
        this.messageSize = 0;
        this.handshakeComplete = false;
        this.isWaitingForData = true;
        this.handleData = (buffer) => {
            logger_1.default.verbose(`Got data: ${buffer.length}`);
            this.data = Buffer.concat([this.data, buffer]);
            if (this.isWaitingForData) {
                this.isWaitingForData = false;
                this.waitForData();
            }
        };
        this.socket = socket;
        this.socket.on('data', this.handleData);
    }
    destroy() {
        this.isWaitingForData = false;
        this.socket.removeListener('data', this.handleData);
    }
    emitError(error) {
        this.destroy();
        this.emit('error', error);
    }
    waitForData() {
        logger_1.default.verbose(`waitForData state: ${this.state}`);
        let minBytesNeeded = 0;
        switch (this.state) {
            case constants_1.ProcessingState.MCS_VERSION_TAG_AND_SIZE:
                minBytesNeeded = constants_1.Variables.kVersionPacketLen + constants_1.Variables.kTagPacketLen + constants_1.Variables.kSizePacketLenMin;
                break;
            case constants_1.ProcessingState.MCS_TAG_AND_SIZE:
                minBytesNeeded = constants_1.Variables.kTagPacketLen + constants_1.Variables.kSizePacketLenMin;
                break;
            case constants_1.ProcessingState.MCS_SIZE:
                break;
            case constants_1.ProcessingState.MCS_PROTO_BYTES:
                minBytesNeeded = this.messageSize;
                break;
            default:
                this.emitError(new Error(`Unexpected state: ${this.state}`));
                return;
        }
        if (this.data.length < minBytesNeeded) {
            // TODO(ibash) set a timeout and check for socket disconnect
            logger_1.default.verbose(`Socket read finished prematurely. Waiting for ${minBytesNeeded - this.data.length} more bytes`);
            this.isWaitingForData = true;
            return;
        }
        logger_1.default.verbose(`Processing MCS data: state == ${this.state}`);
        switch (this.state) {
            case constants_1.ProcessingState.MCS_VERSION_TAG_AND_SIZE:
                this.handleGotVersion();
                break;
            case constants_1.ProcessingState.MCS_TAG_AND_SIZE:
                this.handleGotMessageTag();
                break;
            case constants_1.ProcessingState.MCS_SIZE:
                this.handleGotMessageSize();
                break;
            case constants_1.ProcessingState.MCS_PROTO_BYTES:
                this.handleGotMessageBytes();
                break;
            default:
                this.emitError(new Error(`Unexpected state: ${this.state}`));
                return;
        }
    }
    handleGotVersion() {
        const version = this.data.readInt8(0);
        this.data = this.data.slice(1);
        logger_1.default.verbose(`VERSION IS ${version}`);
        if (version < constants_1.Variables.kMCSVersion && version !== 38) {
            this.emitError(new Error(`Got wrong version: ${version}`));
            return;
        }
        // Process the LoginResponse message tag.
        this.handleGotMessageTag();
    }
    handleGotMessageTag() {
        this.messageTag = this.data.readInt8(0);
        this.data = this.data.slice(1);
        logger_1.default.verbose(`RECEIVED PROTO OF TYPE ${this.messageTag}`);
        this.handleGotMessageSize();
    }
    handleGotMessageSize() {
        let incompleteSizePacket = false;
        const reader = new protobufjs_1.default.BufferReader(this.data);
        try {
            this.messageSize = reader.int32();
        }
        catch (error) {
            if (error.message.startsWith('index out of range:')) {
                incompleteSizePacket = true;
            }
            else {
                this.emitError(error);
                return;
            }
        }
        // TODO(ibash) in chromium code there is an extra check here of:
        // if prev_byte_count >= kSizePacketLenMax then something else went wrong
        // NOTE(ibash) I could only test this case by manually cutting the buffer
        // above to be mid-packet like: new ProtobufJS.BufferReader(this.data.slice(0, 1))
        if (incompleteSizePacket) {
            this.state = constants_1.ProcessingState.MCS_SIZE;
            this.waitForData();
            return;
        }
        this.data = this.data.slice(reader.pos);
        logger_1.default.verbose(`Proto size: ${this.messageSize}`);
        if (this.messageSize > 0) {
            this.state = constants_1.ProcessingState.MCS_PROTO_BYTES;
            this.waitForData();
        }
        else {
            this.handleGotMessageBytes();
        }
    }
    handleGotMessageBytes() {
        const protobuf = this.buildProtobufFromTag(this.messageTag);
        if (!protobuf) {
            this.emitError(new Error('Unknown tag'));
            return;
        }
        // Messages with no content are valid just use the default protobuf for
        // that tag.
        if (this.messageSize === 0) {
            this.emit('message', { tag: this.messageTag, object: {} });
            this.getNextMessage();
            return;
        }
        if (this.data.length < this.messageSize) {
            // Continue reading data.
            logger_1.default.verbose(`Continuing data read. Buffer size is ${this.data.length}, expecting ${this.messageSize}`);
            this.state = constants_1.ProcessingState.MCS_PROTO_BYTES;
            this.waitForData();
            return;
        }
        const buffer = this.data.slice(0, this.messageSize);
        const message = protobuf.decode(buffer);
        this.data = this.data.slice(this.messageSize);
        const object = protobuf.toObject(message, {
            longs: String,
            enums: String,
            bytes: Buffer,
        });
        this.emit('message', { tag: this.messageTag, object: object });
        if (this.messageTag === constants_1.MCSProtoTag.kLoginResponseTag) {
            if (this.handshakeComplete) {
                logger_1.default.error('Unexpected login response');
            }
            else {
                this.handshakeComplete = true;
                logger_1.default.verbose('GCM Handshake complete.');
            }
        }
        this.getNextMessage();
    }
    getNextMessage() {
        this.messageTag = 0;
        this.messageSize = 0;
        this.state = constants_1.ProcessingState.MCS_TAG_AND_SIZE;
        this.waitForData();
    }
    buildProtobufFromTag(tag) {
        switch (tag) {
            case constants_1.MCSProtoTag.kHeartbeatPingTag: return protos_1.default.mcs_proto.HeartbeatPing;
            case constants_1.MCSProtoTag.kHeartbeatAckTag: return protos_1.default.mcs_proto.HeartbeatAck;
            case constants_1.MCSProtoTag.kLoginRequestTag: return protos_1.default.mcs_proto.LoginRequest;
            case constants_1.MCSProtoTag.kLoginResponseTag: return protos_1.default.mcs_proto.LoginResponse;
            case constants_1.MCSProtoTag.kCloseTag: return protos_1.default.mcs_proto.Close;
            case constants_1.MCSProtoTag.kIqStanzaTag: return protos_1.default.mcs_proto.IqStanza;
            case constants_1.MCSProtoTag.kDataMessageStanzaTag: return protos_1.default.mcs_proto.DataMessageStanza;
            case constants_1.MCSProtoTag.kStreamErrorStanzaTag: return protos_1.default.mcs_proto.StreamErrorStanza;
            default:
                return null;
        }
    }
}
exports.default = Parser;
//# sourceMappingURL=parser.js.map