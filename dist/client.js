"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const long_1 = __importDefault(require("long"));
const protobufjs_1 = __importDefault(require("protobufjs"));
const tls_1 = __importDefault(require("tls"));
const axios_1 = __importDefault(require("axios"));
const gcm_1 = __importStar(require("./gcm"));
const fcm_1 = __importDefault(require("./fcm"));
const parser_1 = __importDefault(require("./parser"));
const decrypt_1 = __importDefault(require("./utils/decrypt"));
const logger_1 = __importDefault(require("./utils/logger"));
const protos_1 = __importDefault(require("./protos"));
const constants_1 = require("./constants");
protobufjs_1.default.util.Long = long_1.default;
protobufjs_1.default.configure();
const FCM_SEND_API = "https://fcm.googleapis.com/fcm/send";
const HOST = "mtalk.google.com";
const PORT = 5228;
const MAX_RETRY_TIMEOUT = 15;
class PushReceiver extends events_1.EventEmitter {
    constructor(config) {
        var _a;
        super();
        this.retryCount = 0;
        this.streamId = 0;
        this.lastStreamIdReported = -1;
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            if (this.socket) {
                return;
            }
            logger_1.default.verbose("connect");
            if (this.config.credentials) {
                logger_1.default.verbose("checkin");
                yield this.checkIn();
            }
            else {
                logger_1.default.warn("Missing credentials... Running register.");
                const oldCredentials = this.config.credentials;
                const newCredentials = yield this.register();
                this.emit("ON_CREDENTIALS_CHANGE", { oldCredentials, newCredentials });
                this.config.credentials = newCredentials;
                logger_1.default.verbose("got credentials", newCredentials);
            }
            this.lastStreamIdReported = -1;
            this.socket = new tls_1.default.TLSSocket(null);
            this.socket.setKeepAlive(true);
            this.socket.on("connect", this.handleSocketConnect);
            this.socket.on("close", this.handleSocketClose);
            this.socket.on("error", this.handleSocketError);
            this.socket.connect({ host: HOST, port: PORT });
            this.parser = new parser_1.default(this.socket);
            this.parser.on("message", this.handleMessage);
            this.parser.on("error", this.handleParserError);
            this.sendLogin();
            return new Promise((res) => {
                const dispose = this.onReady(() => {
                    dispose();
                    res();
                });
            });
        });
        this.destroy = () => {
            clearTimeout(this.retryTimeout);
            if (this.socket) {
                this.socket.off("close", this.handleSocketClose);
                this.socket.off("error", this.handleSocketError);
                this.socket.destroy();
                this.socket = null;
            }
            if (this.parser) {
                this.parser.off("error", this.handleParserError);
                this.parser.destroy();
                this.parser = null;
            }
        };
        this.handleSocketConnect = () => {
            this.retryCount = 0;
            this.emit("ON_CONNECT");
            this.startHeartbeat();
        };
        this.handleSocketClose = () => {
            this.emit("ON_DISCONNECT");
            this.clearHeartbeat();
            this.socketRetry();
        };
        this.handleSocketError = (err) => {
            logger_1.default.error(err);
            // ignore, the close handler takes care of retry
        };
        this.handleMessage = ({ tag, object }) => {
            // any message will reset the client side heartbeat timeout.
            this.startHeartbeat();
            switch (tag) {
                case constants_1.MCSProtoTag.kLoginResponseTag:
                    // clear persistent ids, as we just sent them to the server while logging in
                    this.config.persistentIds = [];
                    this.emit("ON_READY");
                    this.startHeartbeat();
                    break;
                case constants_1.MCSProtoTag.kDataMessageStanzaTag:
                    this.handleDataMessage(object);
                    break;
                case constants_1.MCSProtoTag.kHeartbeatPingTag:
                    this.emit("ON_HEARTBEAT");
                    logger_1.default.verbose("HEARTBEAT PING", object);
                    this.sendHeartbeatPong(object);
                    break;
                case constants_1.MCSProtoTag.kHeartbeatAckTag:
                    this.emit("ON_HEARTBEAT");
                    logger_1.default.verbose("HEARTBEAT PONG", object);
                    break;
                case constants_1.MCSProtoTag.kCloseTag:
                    logger_1.default.verbose("Close: Server requested close! message: ", JSON.stringify(object));
                    this.handleSocketClose();
                    break;
                case constants_1.MCSProtoTag.kLoginRequestTag:
                    logger_1.default.verbose("Login request: message: ", JSON.stringify(object));
                    break;
                case constants_1.MCSProtoTag.kIqStanzaTag:
                    logger_1.default.debug("IqStanza: If anyone knows what is this and how to respond, please let me know! - message: ", JSON.stringify(object));
                    // FIXME: If anyone knows what is this and how to respond, please let me know
                    break;
                default:
                    logger_1.default.error("Unknown message: ", JSON.stringify(object));
                    return;
                // no default
            }
            this.streamId++;
        };
        this.handleDataMessage = (object) => {
            if (this.persistentIds.includes(object.persistentId)) {
                return;
            }
            let message;
            try {
                message = (0, decrypt_1.default)(object, this.config.credentials.keys);
            }
            catch (error) {
                switch (true) {
                    case error.message.includes("Unsupported state or unable to authenticate data"):
                    case error.message.includes("crypto-key is missing"):
                    case error.message.includes("salt is missing"):
                        // NOTE(ibash) Periodically we're unable to decrypt notifications. In
                        // all cases we've been able to receive future notifications using the
                        // same keys. So, we silently drop this notification.
                        logger_1.default.warn("Message dropped as it could not be decrypted: " + error.message);
                        return;
                    default:
                        throw error;
                }
            }
            // Maintain persistentIds updated with the very last received value
            this.persistentIds.push(object.persistentId);
            // Send notification
            this.emit("ON_MESSAGE_RECEIVED", {
                message,
                // Needs to be saved by the client
                persistentId: object.persistentId,
            });
        };
        this.handleParserError = (error) => {
            logger_1.default.error(error);
            this.socketRetry();
        };
        logger_1.default.setLogLevel((_a = config.logLevel) !== null && _a !== void 0 ? _a : "NONE");
        logger_1.default.verbose("constructor", config);
        this.config = Object.assign({ bundleId: "receiver.push.com", chromeId: "org.chromium.linux", chromeVersion: "94.0.4606.51", vapidKey: "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4", persistentIds: [], heartbeatIntervalMs: 5 * 60 * 1000 }, config);
        this.persistentIds = this.config.persistentIds;
    }
    setLogLevel(logLevel) {
        logger_1.default.setLogLevel(logLevel);
    }
    on(event, listener) {
        return events_1.EventEmitter.prototype.on.apply(this, [event, listener]);
    }
    off(event, listener) {
        return events_1.EventEmitter.prototype.off.apply(this, [event, listener]);
    }
    emit(event, ...args) {
        logger_1.default.debug("emit", event, ...args);
        return events_1.EventEmitter.prototype.emit.apply(this, [event, ...args]);
    }
    onNotification(listener) {
        this.on("ON_MESSAGE_RECEIVED", listener);
        return () => this.off("ON_MESSAGE_RECEIVED", listener);
    }
    onCredentialsChanged(listener) {
        this.on("ON_CREDENTIALS_CHANGE", listener);
        return () => this.off("ON_CREDENTIALS_CHANGE", listener);
    }
    onReady(listener) {
        this.on("ON_READY", listener);
        return () => this.off("ON_READY", listener);
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield (0, gcm_1.default)(this.config);
            return (0, fcm_1.default)(subscription, this.config);
        });
    }
    checkIn() {
        return (0, gcm_1.checkIn)(this.config);
    }
    clearHeartbeat() {
        clearTimeout(this.heartbeatTimer);
        this.heartbeatTimer = undefined;
        clearTimeout(this.heartbeatTimeout);
        this.heartbeatTimeout = undefined;
    }
    startHeartbeat() {
        this.clearHeartbeat();
        if (!this.config.heartbeatIntervalMs) {
            return;
        }
        this.heartbeatTimer = setTimeout(this.sendHeartbeatPing.bind(this), this.config.heartbeatIntervalMs);
        this.heartbeatTimeout = setTimeout(this.socketRetry.bind(this), this.config.heartbeatIntervalMs * 2);
    }
    socketRetry() {
        this.destroy();
        const timeout = Math.min(++this.retryCount, MAX_RETRY_TIMEOUT) * 1000;
        this.retryTimeout = setTimeout(this.connect, timeout);
    }
    getStreamId() {
        this.lastStreamIdReported = this.streamId;
        return this.streamId;
    }
    newStreamIdAvailable() {
        return this.lastStreamIdReported !== this.streamId;
    }
    sendHeartbeatPing() {
        const heartbeatPingRequest = {};
        if (this.newStreamIdAvailable()) {
            heartbeatPingRequest.last_stream_id_received = this.getStreamId();
        }
        logger_1.default.verbose("Heartbeat send pong", heartbeatPingRequest);
        const HeartbeatPingRequestType = protos_1.default.mcs_proto.HeartbeatPing;
        const errorMessage = HeartbeatPingRequestType.verify(heartbeatPingRequest);
        if (errorMessage) {
            throw new Error(errorMessage);
        }
        const buffer = HeartbeatPingRequestType.encodeDelimited(heartbeatPingRequest).finish();
        logger_1.default.verbose("HEARTBEAT sending PING", heartbeatPingRequest);
        this.socket.write(Buffer.concat([Buffer.from([constants_1.MCSProtoTag.kHeartbeatPingTag]), buffer]));
    }
    sendHeartbeatPong(object) {
        const heartbeatAckRequest = {};
        if (this.newStreamIdAvailable()) {
            heartbeatAckRequest.last_stream_id_received = this.getStreamId();
        }
        if (object === null || object === void 0 ? void 0 : object.status) {
            heartbeatAckRequest.status = object.status;
        }
        logger_1.default.verbose("Heartbeat send pong", heartbeatAckRequest);
        const HeartbeatAckRequestType = protos_1.default.mcs_proto.HeartbeatAck;
        const errorMessage = HeartbeatAckRequestType.verify(heartbeatAckRequest);
        if (errorMessage) {
            throw new Error(errorMessage);
        }
        const buffer = HeartbeatAckRequestType.encodeDelimited(heartbeatAckRequest).finish();
        logger_1.default.verbose("HEARTBEAT sending PONG", heartbeatAckRequest);
        this.socket.write(Buffer.concat([Buffer.from([constants_1.MCSProtoTag.kHeartbeatAckTag]), buffer]));
    }
    sendLogin() {
        const gcm = this.config.credentials.gcm;
        const LoginRequestType = protos_1.default.mcs_proto.LoginRequest;
        const hexAndroidId = long_1.default.fromString(gcm.androidId).toString(16);
        const loginRequest = {
            adaptiveHeartbeat: false,
            authService: 2,
            authToken: gcm.securityToken,
            id: `chrome-${this.config.chromeVersion}`,
            domain: "mcs.android.com",
            deviceId: `android-${hexAndroidId}`,
            networkType: 1,
            resource: gcm.androidId,
            user: gcm.androidId,
            useRmq2: true,
            setting: [{ name: "new_vc", value: "1" }],
            clientEvent: [],
            // Id of the last notification received
            receivedPersistentId: this.config.persistentIds,
        };
        if (this.config.heartbeatIntervalMs) {
            loginRequest.heartbeatStat = {
                ip: "",
                timeout: true,
                intervalMs: this.config.heartbeatIntervalMs,
            };
        }
        const errorMessage = LoginRequestType.verify(loginRequest);
        if (errorMessage) {
            throw new Error(errorMessage);
        }
        const buffer = LoginRequestType.encodeDelimited(loginRequest).finish();
        this.socket.write(Buffer.concat([Buffer.from([constants_1.Variables.kMCSVersion, constants_1.MCSProtoTag.kLoginRequestTag]), buffer]));
    }
    send(message, serverApiKey) {
        logger_1.default.verbose("testMessage");
        if (!serverApiKey) {
            throw new Error("Can't test messages without serverApiKey");
        }
        const data = {
            time_to_live: 3,
            data: message,
            registration_ids: [this.config.credentials.fcm.token],
        };
        return axios_1.default
            .post(FCM_SEND_API, data, {
            headers: {
                Authorization: `key=${serverApiKey}`,
            },
        })
            .then(({ data }) => {
            if (data.failure) {
                logger_1.default.debug("Message test failed");
                throw new Error(data);
            }
            logger_1.default.debug("Message test passed");
        });
    }
    testMessage(serverApiKey) {
        logger_1.default.verbose("testMessage");
        return this.send({
            message: "PushReceiver test message",
            title: "testMessage",
            key: "",
            action: "",
        }, serverApiKey);
    }
}
exports.default = PushReceiver;
//# sourceMappingURL=client.js.map