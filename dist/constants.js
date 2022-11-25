"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevels = exports.GcmRequestStatus = exports.GcmRequestConstants = exports.MCSProtoTag = exports.Variables = exports.ProcessingState = void 0;
var ProcessingState;
(function (ProcessingState) {
    // Processing the version, tag, and size packets (assuming minimum length
    // size packet). Only used during the login handshake.
    ProcessingState[ProcessingState["MCS_VERSION_TAG_AND_SIZE"] = 0] = "MCS_VERSION_TAG_AND_SIZE";
    // Processing the tag and size packets (assuming minimum length size
    // packet). Used for normal messages.
    ProcessingState[ProcessingState["MCS_TAG_AND_SIZE"] = 1] = "MCS_TAG_AND_SIZE";
    // Processing the size packet alone.
    ProcessingState[ProcessingState["MCS_SIZE"] = 2] = "MCS_SIZE";
    // Processing the protocol buffer bytes (for those messages with non-zero
    // sizes).
    ProcessingState[ProcessingState["MCS_PROTO_BYTES"] = 3] = "MCS_PROTO_BYTES";
})(ProcessingState = exports.ProcessingState || (exports.ProcessingState = {}));
var Variables;
(function (Variables) {
    // # of bytes a MCS version packet consumes.
    Variables[Variables["kVersionPacketLen"] = 1] = "kVersionPacketLen";
    // # of bytes a tag packet consumes.
    Variables[Variables["kTagPacketLen"] = 1] = "kTagPacketLen";
    // Max # of bytes a length packet consumes. A Varint32 can consume up to 5 bytes
    // (the msb in each byte is reserved for denoting whether more bytes follow).
    // Although the protocol only allows for 4KiB payloads currently, and the socket
    // stream buffer is only of size 8KiB, it's possible for certain applications to
    // have larger message sizes. When payload is larger than 4KiB, an temporary
    // in-memory buffer is used instead of the normal in-place socket stream buffer.
    Variables[Variables["kSizePacketLenMin"] = 1] = "kSizePacketLenMin";
    Variables[Variables["kSizePacketLenMax"] = 5] = "kSizePacketLenMax";
    // The current MCS protocol version.
    Variables[Variables["kMCSVersion"] = 41] = "kMCSVersion";
})(Variables = exports.Variables || (exports.Variables = {}));
// MCS Message tags.
// WARNING: the order of these tags must remain the same, as the tag values
// must be consistent with those used on the server.
var MCSProtoTag;
(function (MCSProtoTag) {
    MCSProtoTag[MCSProtoTag["kHeartbeatPingTag"] = 0] = "kHeartbeatPingTag";
    MCSProtoTag[MCSProtoTag["kHeartbeatAckTag"] = 1] = "kHeartbeatAckTag";
    MCSProtoTag[MCSProtoTag["kLoginRequestTag"] = 2] = "kLoginRequestTag";
    MCSProtoTag[MCSProtoTag["kLoginResponseTag"] = 3] = "kLoginResponseTag";
    MCSProtoTag[MCSProtoTag["kCloseTag"] = 4] = "kCloseTag";
    MCSProtoTag[MCSProtoTag["kMessageStanzaTag"] = 5] = "kMessageStanzaTag";
    MCSProtoTag[MCSProtoTag["kPresenceStanzaTag"] = 6] = "kPresenceStanzaTag";
    MCSProtoTag[MCSProtoTag["kIqStanzaTag"] = 7] = "kIqStanzaTag";
    MCSProtoTag[MCSProtoTag["kDataMessageStanzaTag"] = 8] = "kDataMessageStanzaTag";
    MCSProtoTag[MCSProtoTag["kBatchPresenceStanzaTag"] = 9] = "kBatchPresenceStanzaTag";
    MCSProtoTag[MCSProtoTag["kStreamErrorStanzaTag"] = 10] = "kStreamErrorStanzaTag";
    MCSProtoTag[MCSProtoTag["kHttpRequestTag"] = 11] = "kHttpRequestTag";
    MCSProtoTag[MCSProtoTag["kHttpResponseTag"] = 12] = "kHttpResponseTag";
    MCSProtoTag[MCSProtoTag["kBindAccountRequestTag"] = 13] = "kBindAccountRequestTag";
    MCSProtoTag[MCSProtoTag["kBindAccountResponseTag"] = 14] = "kBindAccountResponseTag";
    MCSProtoTag[MCSProtoTag["kTalkMetadataTag"] = 15] = "kTalkMetadataTag";
    MCSProtoTag[MCSProtoTag["kNumProtoTypes"] = 16] = "kNumProtoTypes";
})(MCSProtoTag = exports.MCSProtoTag || (exports.MCSProtoTag = {}));
var GcmRequestConstants;
(function (GcmRequestConstants) {
    GcmRequestConstants["kErrorPrefix"] = "Error=";
    GcmRequestConstants["kTokenPrefix"] = "token=";
    GcmRequestConstants["kDeviceRegistrationError"] = "PHONE_REGISTRATION_ERROR";
    GcmRequestConstants["kAuthenticationFailed"] = "AUTHENTICATION_FAILED";
    GcmRequestConstants["kInvalidSender"] = "INVALID_SENDER";
    GcmRequestConstants["kInvalidParameters"] = "INVALID_PARAMETERS";
    GcmRequestConstants["kInternalServerError"] = "InternalServerError";
    GcmRequestConstants["kQuotaExceeded"] = "QUOTA_EXCEEDED";
    GcmRequestConstants["kTooManyRegistrations"] = "TOO_MANY_REGISTRATIONS";
})(GcmRequestConstants = exports.GcmRequestConstants || (exports.GcmRequestConstants = {}));
// Taken from `registration_request.h` in Chromium project
var GcmRequestStatus;
(function (GcmRequestStatus) {
    GcmRequestStatus[GcmRequestStatus["SUCCESS"] = 0] = "SUCCESS";
    GcmRequestStatus[GcmRequestStatus["INVALID_PARAMETERS"] = 1] = "INVALID_PARAMETERS";
    GcmRequestStatus[GcmRequestStatus["INVALID_SENDER"] = 2] = "INVALID_SENDER";
    GcmRequestStatus[GcmRequestStatus["AUTHENTICATION_FAILED"] = 3] = "AUTHENTICATION_FAILED";
    GcmRequestStatus[GcmRequestStatus["DEVICE_REGISTRATION_ERROR"] = 4] = "DEVICE_REGISTRATION_ERROR";
    GcmRequestStatus[GcmRequestStatus["UNKNOWN_ERROR"] = 5] = "UNKNOWN_ERROR";
    GcmRequestStatus[GcmRequestStatus["URL_FETCHING_FAILED"] = 6] = "URL_FETCHING_FAILED";
    GcmRequestStatus[GcmRequestStatus["HTTP_NOT_OK"] = 7] = "HTTP_NOT_OK";
    GcmRequestStatus[GcmRequestStatus["NO_RESPONSE_BODY"] = 8] = "NO_RESPONSE_BODY";
    GcmRequestStatus[GcmRequestStatus["REACHED_MAX_RETRIES"] = 9] = "REACHED_MAX_RETRIES";
    GcmRequestStatus[GcmRequestStatus["RESPONSE_PARSING_FAILED"] = 10] = "RESPONSE_PARSING_FAILED";
    GcmRequestStatus[GcmRequestStatus["INTERNAL_SERVER_ERROR"] = 11] = "INTERNAL_SERVER_ERROR";
    GcmRequestStatus[GcmRequestStatus["QUOTA_EXCEEDED"] = 12] = "QUOTA_EXCEEDED";
    GcmRequestStatus[GcmRequestStatus["TOO_MANY_REGISTRATIONS"] = 13] = "TOO_MANY_REGISTRATIONS";
    // NOTE: always keep this entry at the end. Add new status types only
    // immediately above this line. Make sure to update the corresponding
    // histogram enum accordingly.
    GcmRequestStatus[GcmRequestStatus["STATUS_COUNT"] = 14] = "STATUS_COUNT";
})(GcmRequestStatus = exports.GcmRequestStatus || (exports.GcmRequestStatus = {}));
var LogLevels;
(function (LogLevels) {
    LogLevels[LogLevels["NONE"] = 0] = "NONE";
    LogLevels[LogLevels["DEBUG"] = 1] = "DEBUG";
    LogLevels[LogLevels["VERBOSE"] = 2] = "VERBOSE";
})(LogLevels = exports.LogLevels || (exports.LogLevels = {}));
//# sourceMappingURL=constants.js.map