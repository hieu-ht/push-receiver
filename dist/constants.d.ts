export declare enum ProcessingState {
    MCS_VERSION_TAG_AND_SIZE = 0,
    MCS_TAG_AND_SIZE = 1,
    MCS_SIZE = 2,
    MCS_PROTO_BYTES = 3
}
export declare enum Variables {
    kVersionPacketLen = 1,
    kTagPacketLen = 1,
    kSizePacketLenMin = 1,
    kSizePacketLenMax = 5,
    kMCSVersion = 41
}
export declare enum MCSProtoTag {
    kHeartbeatPingTag = 0,
    kHeartbeatAckTag = 1,
    kLoginRequestTag = 2,
    kLoginResponseTag = 3,
    kCloseTag = 4,
    kMessageStanzaTag = 5,
    kPresenceStanzaTag = 6,
    kIqStanzaTag = 7,
    kDataMessageStanzaTag = 8,
    kBatchPresenceStanzaTag = 9,
    kStreamErrorStanzaTag = 10,
    kHttpRequestTag = 11,
    kHttpResponseTag = 12,
    kBindAccountRequestTag = 13,
    kBindAccountResponseTag = 14,
    kTalkMetadataTag = 15,
    kNumProtoTypes = 16
}
export declare enum GcmRequestConstants {
    kErrorPrefix = "Error=",
    kTokenPrefix = "token=",
    kDeviceRegistrationError = "PHONE_REGISTRATION_ERROR",
    kAuthenticationFailed = "AUTHENTICATION_FAILED",
    kInvalidSender = "INVALID_SENDER",
    kInvalidParameters = "INVALID_PARAMETERS",
    kInternalServerError = "InternalServerError",
    kQuotaExceeded = "QUOTA_EXCEEDED",
    kTooManyRegistrations = "TOO_MANY_REGISTRATIONS"
}
export declare enum GcmRequestStatus {
    SUCCESS = 0,
    INVALID_PARAMETERS = 1,
    INVALID_SENDER = 2,
    AUTHENTICATION_FAILED = 3,
    DEVICE_REGISTRATION_ERROR = 4,
    UNKNOWN_ERROR = 5,
    URL_FETCHING_FAILED = 6,
    HTTP_NOT_OK = 7,
    NO_RESPONSE_BODY = 8,
    REACHED_MAX_RETRIES = 9,
    RESPONSE_PARSING_FAILED = 10,
    INTERNAL_SERVER_ERROR = 11,
    QUOTA_EXCEEDED = 12,
    TOO_MANY_REGISTRATIONS = 13,
    STATUS_COUNT = 14
}
export declare enum LogLevels {
    NONE = 0,
    DEBUG = 1,
    VERBOSE = 2
}
