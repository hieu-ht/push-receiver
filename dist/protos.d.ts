import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace checkin_proto. */
export namespace checkin_proto {

    /** Properties of a ChromeBuildProto. */
    interface IChromeBuildProto {

        /** ChromeBuildProto platform */
        platform?: (checkin_proto.ChromeBuildProto.Platform|null);

        /** ChromeBuildProto chromeVersion */
        chromeVersion?: (string|null);

        /** ChromeBuildProto channel */
        channel?: (checkin_proto.ChromeBuildProto.Channel|null);
    }

    /** Represents a ChromeBuildProto. */
    class ChromeBuildProto implements IChromeBuildProto {

        /**
         * Constructs a new ChromeBuildProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: checkin_proto.IChromeBuildProto);

        /** ChromeBuildProto platform. */
        public platform: checkin_proto.ChromeBuildProto.Platform;

        /** ChromeBuildProto chromeVersion. */
        public chromeVersion: string;

        /** ChromeBuildProto channel. */
        public channel: checkin_proto.ChromeBuildProto.Channel;

        /**
         * Creates a new ChromeBuildProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChromeBuildProto instance
         */
        public static create(properties?: checkin_proto.IChromeBuildProto): checkin_proto.ChromeBuildProto;

        /**
         * Encodes the specified ChromeBuildProto message. Does not implicitly {@link checkin_proto.ChromeBuildProto.verify|verify} messages.
         * @param message ChromeBuildProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: checkin_proto.IChromeBuildProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChromeBuildProto message, length delimited. Does not implicitly {@link checkin_proto.ChromeBuildProto.verify|verify} messages.
         * @param message ChromeBuildProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: checkin_proto.IChromeBuildProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChromeBuildProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChromeBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): checkin_proto.ChromeBuildProto;

        /**
         * Decodes a ChromeBuildProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChromeBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): checkin_proto.ChromeBuildProto;

        /**
         * Verifies a ChromeBuildProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChromeBuildProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChromeBuildProto
         */
        public static fromObject(object: { [k: string]: any }): checkin_proto.ChromeBuildProto;

        /**
         * Creates a plain object from a ChromeBuildProto message. Also converts values to other types if specified.
         * @param message ChromeBuildProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: checkin_proto.ChromeBuildProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChromeBuildProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChromeBuildProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ChromeBuildProto {

        /** Platform enum. */
        enum Platform {
            PLATFORM_WIN = 1,
            PLATFORM_MAC = 2,
            PLATFORM_LINUX = 3,
            PLATFORM_CROS = 4,
            PLATFORM_IOS = 5,
            PLATFORM_ANDROID = 6
        }

        /** Channel enum. */
        enum Channel {
            CHANNEL_STABLE = 1,
            CHANNEL_BETA = 2,
            CHANNEL_DEV = 3,
            CHANNEL_CANARY = 4,
            CHANNEL_UNKNOWN = 5
        }
    }

    /** Properties of an AndroidCheckinProto. */
    interface IAndroidCheckinProto {

        /** AndroidCheckinProto lastCheckinMsec */
        lastCheckinMsec?: (Long|null);

        /** AndroidCheckinProto cellOperator */
        cellOperator?: (string|null);

        /** AndroidCheckinProto simOperator */
        simOperator?: (string|null);

        /** AndroidCheckinProto roaming */
        roaming?: (string|null);

        /** AndroidCheckinProto userNumber */
        userNumber?: (number|null);

        /** AndroidCheckinProto type */
        type?: (checkin_proto.DeviceType|null);

        /** AndroidCheckinProto chromeBuild */
        chromeBuild?: (checkin_proto.IChromeBuildProto|null);
    }

    /** Represents an AndroidCheckinProto. */
    class AndroidCheckinProto implements IAndroidCheckinProto {

        /**
         * Constructs a new AndroidCheckinProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: checkin_proto.IAndroidCheckinProto);

        /** AndroidCheckinProto lastCheckinMsec. */
        public lastCheckinMsec: Long;

        /** AndroidCheckinProto cellOperator. */
        public cellOperator: string;

        /** AndroidCheckinProto simOperator. */
        public simOperator: string;

        /** AndroidCheckinProto roaming. */
        public roaming: string;

        /** AndroidCheckinProto userNumber. */
        public userNumber: number;

        /** AndroidCheckinProto type. */
        public type: checkin_proto.DeviceType;

        /** AndroidCheckinProto chromeBuild. */
        public chromeBuild?: (checkin_proto.IChromeBuildProto|null);

        /**
         * Creates a new AndroidCheckinProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidCheckinProto instance
         */
        public static create(properties?: checkin_proto.IAndroidCheckinProto): checkin_proto.AndroidCheckinProto;

        /**
         * Encodes the specified AndroidCheckinProto message. Does not implicitly {@link checkin_proto.AndroidCheckinProto.verify|verify} messages.
         * @param message AndroidCheckinProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: checkin_proto.IAndroidCheckinProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidCheckinProto message, length delimited. Does not implicitly {@link checkin_proto.AndroidCheckinProto.verify|verify} messages.
         * @param message AndroidCheckinProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: checkin_proto.IAndroidCheckinProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): checkin_proto.AndroidCheckinProto;

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): checkin_proto.AndroidCheckinProto;

        /**
         * Verifies an AndroidCheckinProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidCheckinProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidCheckinProto
         */
        public static fromObject(object: { [k: string]: any }): checkin_proto.AndroidCheckinProto;

        /**
         * Creates a plain object from an AndroidCheckinProto message. Also converts values to other types if specified.
         * @param message AndroidCheckinProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: checkin_proto.AndroidCheckinProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidCheckinProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidCheckinProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** DeviceType enum. */
    enum DeviceType {
        DEVICE_ANDROID_OS = 1,
        DEVICE_IOS_OS = 2,
        DEVICE_CHROME_BROWSER = 3,
        DEVICE_CHROME_OS = 4
    }

    /** Properties of a GservicesSetting. */
    interface IGservicesSetting {

        /** GservicesSetting name */
        name: Uint8Array;

        /** GservicesSetting value */
        value: Uint8Array;
    }

    /** Represents a GservicesSetting. */
    class GservicesSetting implements IGservicesSetting {

        /**
         * Constructs a new GservicesSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: checkin_proto.IGservicesSetting);

        /** GservicesSetting name. */
        public name: Uint8Array;

        /** GservicesSetting value. */
        public value: Uint8Array;

        /**
         * Creates a new GservicesSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GservicesSetting instance
         */
        public static create(properties?: checkin_proto.IGservicesSetting): checkin_proto.GservicesSetting;

        /**
         * Encodes the specified GservicesSetting message. Does not implicitly {@link checkin_proto.GservicesSetting.verify|verify} messages.
         * @param message GservicesSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: checkin_proto.IGservicesSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GservicesSetting message, length delimited. Does not implicitly {@link checkin_proto.GservicesSetting.verify|verify} messages.
         * @param message GservicesSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: checkin_proto.IGservicesSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GservicesSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GservicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): checkin_proto.GservicesSetting;

        /**
         * Decodes a GservicesSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GservicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): checkin_proto.GservicesSetting;

        /**
         * Verifies a GservicesSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GservicesSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GservicesSetting
         */
        public static fromObject(object: { [k: string]: any }): checkin_proto.GservicesSetting;

        /**
         * Creates a plain object from a GservicesSetting message. Also converts values to other types if specified.
         * @param message GservicesSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: checkin_proto.GservicesSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GservicesSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GservicesSetting
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidCheckinRequest. */
    interface IAndroidCheckinRequest {

        /** AndroidCheckinRequest imei */
        imei?: (string|null);

        /** AndroidCheckinRequest meid */
        meid?: (string|null);

        /** AndroidCheckinRequest macAddr */
        macAddr?: (string[]|null);

        /** AndroidCheckinRequest macAddrType */
        macAddrType?: (string[]|null);

        /** AndroidCheckinRequest serialNumber */
        serialNumber?: (string|null);

        /** AndroidCheckinRequest esn */
        esn?: (string|null);

        /** AndroidCheckinRequest id */
        id?: (Long|null);

        /** AndroidCheckinRequest loggingId */
        loggingId?: (Long|null);

        /** AndroidCheckinRequest digest */
        digest?: (string|null);

        /** AndroidCheckinRequest locale */
        locale?: (string|null);

        /** AndroidCheckinRequest checkin */
        checkin: checkin_proto.IAndroidCheckinProto;

        /** AndroidCheckinRequest desiredBuild */
        desiredBuild?: (string|null);

        /** AndroidCheckinRequest marketCheckin */
        marketCheckin?: (string|null);

        /** AndroidCheckinRequest accountCookie */
        accountCookie?: (string[]|null);

        /** AndroidCheckinRequest timeZone */
        timeZone?: (string|null);

        /** AndroidCheckinRequest securityToken */
        securityToken?: (Long|null);

        /** AndroidCheckinRequest version */
        version?: (number|null);

        /** AndroidCheckinRequest otaCert */
        otaCert?: (string[]|null);

        /** AndroidCheckinRequest fragment */
        fragment?: (number|null);

        /** AndroidCheckinRequest userName */
        userName?: (string|null);

        /** AndroidCheckinRequest userSerialNumber */
        userSerialNumber?: (number|null);
    }

    /** Represents an AndroidCheckinRequest. */
    class AndroidCheckinRequest implements IAndroidCheckinRequest {

        /**
         * Constructs a new AndroidCheckinRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: checkin_proto.IAndroidCheckinRequest);

        /** AndroidCheckinRequest imei. */
        public imei: string;

        /** AndroidCheckinRequest meid. */
        public meid: string;

        /** AndroidCheckinRequest macAddr. */
        public macAddr: string[];

        /** AndroidCheckinRequest macAddrType. */
        public macAddrType: string[];

        /** AndroidCheckinRequest serialNumber. */
        public serialNumber: string;

        /** AndroidCheckinRequest esn. */
        public esn: string;

        /** AndroidCheckinRequest id. */
        public id: Long;

        /** AndroidCheckinRequest loggingId. */
        public loggingId: Long;

        /** AndroidCheckinRequest digest. */
        public digest: string;

        /** AndroidCheckinRequest locale. */
        public locale: string;

        /** AndroidCheckinRequest checkin. */
        public checkin: checkin_proto.IAndroidCheckinProto;

        /** AndroidCheckinRequest desiredBuild. */
        public desiredBuild: string;

        /** AndroidCheckinRequest marketCheckin. */
        public marketCheckin: string;

        /** AndroidCheckinRequest accountCookie. */
        public accountCookie: string[];

        /** AndroidCheckinRequest timeZone. */
        public timeZone: string;

        /** AndroidCheckinRequest securityToken. */
        public securityToken: Long;

        /** AndroidCheckinRequest version. */
        public version: number;

        /** AndroidCheckinRequest otaCert. */
        public otaCert: string[];

        /** AndroidCheckinRequest fragment. */
        public fragment: number;

        /** AndroidCheckinRequest userName. */
        public userName: string;

        /** AndroidCheckinRequest userSerialNumber. */
        public userSerialNumber: number;

        /**
         * Creates a new AndroidCheckinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidCheckinRequest instance
         */
        public static create(properties?: checkin_proto.IAndroidCheckinRequest): checkin_proto.AndroidCheckinRequest;

        /**
         * Encodes the specified AndroidCheckinRequest message. Does not implicitly {@link checkin_proto.AndroidCheckinRequest.verify|verify} messages.
         * @param message AndroidCheckinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: checkin_proto.IAndroidCheckinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidCheckinRequest message, length delimited. Does not implicitly {@link checkin_proto.AndroidCheckinRequest.verify|verify} messages.
         * @param message AndroidCheckinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: checkin_proto.IAndroidCheckinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): checkin_proto.AndroidCheckinRequest;

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): checkin_proto.AndroidCheckinRequest;

        /**
         * Verifies an AndroidCheckinRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidCheckinRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidCheckinRequest
         */
        public static fromObject(object: { [k: string]: any }): checkin_proto.AndroidCheckinRequest;

        /**
         * Creates a plain object from an AndroidCheckinRequest message. Also converts values to other types if specified.
         * @param message AndroidCheckinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: checkin_proto.AndroidCheckinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidCheckinRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidCheckinRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidCheckinResponse. */
    interface IAndroidCheckinResponse {

        /** AndroidCheckinResponse statsOk */
        statsOk: boolean;

        /** AndroidCheckinResponse timeMsec */
        timeMsec?: (Long|null);

        /** AndroidCheckinResponse digest */
        digest?: (string|null);

        /** AndroidCheckinResponse settingsDiff */
        settingsDiff?: (boolean|null);

        /** AndroidCheckinResponse deleteSetting */
        deleteSetting?: (string[]|null);

        /** AndroidCheckinResponse setting */
        setting?: (checkin_proto.IGservicesSetting[]|null);

        /** AndroidCheckinResponse marketOk */
        marketOk?: (boolean|null);

        /** AndroidCheckinResponse androidId */
        androidId?: (Long|null);

        /** AndroidCheckinResponse securityToken */
        securityToken?: (Long|null);

        /** AndroidCheckinResponse versionInfo */
        versionInfo?: (string|null);
    }

    /** Represents an AndroidCheckinResponse. */
    class AndroidCheckinResponse implements IAndroidCheckinResponse {

        /**
         * Constructs a new AndroidCheckinResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: checkin_proto.IAndroidCheckinResponse);

        /** AndroidCheckinResponse statsOk. */
        public statsOk: boolean;

        /** AndroidCheckinResponse timeMsec. */
        public timeMsec: Long;

        /** AndroidCheckinResponse digest. */
        public digest: string;

        /** AndroidCheckinResponse settingsDiff. */
        public settingsDiff: boolean;

        /** AndroidCheckinResponse deleteSetting. */
        public deleteSetting: string[];

        /** AndroidCheckinResponse setting. */
        public setting: checkin_proto.IGservicesSetting[];

        /** AndroidCheckinResponse marketOk. */
        public marketOk: boolean;

        /** AndroidCheckinResponse androidId. */
        public androidId: Long;

        /** AndroidCheckinResponse securityToken. */
        public securityToken: Long;

        /** AndroidCheckinResponse versionInfo. */
        public versionInfo: string;

        /**
         * Creates a new AndroidCheckinResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidCheckinResponse instance
         */
        public static create(properties?: checkin_proto.IAndroidCheckinResponse): checkin_proto.AndroidCheckinResponse;

        /**
         * Encodes the specified AndroidCheckinResponse message. Does not implicitly {@link checkin_proto.AndroidCheckinResponse.verify|verify} messages.
         * @param message AndroidCheckinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: checkin_proto.IAndroidCheckinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidCheckinResponse message, length delimited. Does not implicitly {@link checkin_proto.AndroidCheckinResponse.verify|verify} messages.
         * @param message AndroidCheckinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: checkin_proto.IAndroidCheckinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): checkin_proto.AndroidCheckinResponse;

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): checkin_proto.AndroidCheckinResponse;

        /**
         * Verifies an AndroidCheckinResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidCheckinResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidCheckinResponse
         */
        public static fromObject(object: { [k: string]: any }): checkin_proto.AndroidCheckinResponse;

        /**
         * Creates a plain object from an AndroidCheckinResponse message. Also converts values to other types if specified.
         * @param message AndroidCheckinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: checkin_proto.AndroidCheckinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidCheckinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidCheckinResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace mcs_proto. */
export namespace mcs_proto {

    /** Properties of a HeartbeatPing. */
    interface IHeartbeatPing {

        /** HeartbeatPing streamId */
        streamId?: (number|null);

        /** HeartbeatPing lastStreamIdReceived */
        lastStreamIdReceived?: (number|null);

        /** HeartbeatPing status */
        status?: (Long|null);
    }

    /** TAG: 0 */
    class HeartbeatPing implements IHeartbeatPing {

        /**
         * Constructs a new HeartbeatPing.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IHeartbeatPing);

        /** HeartbeatPing streamId. */
        public streamId: number;

        /** HeartbeatPing lastStreamIdReceived. */
        public lastStreamIdReceived: number;

        /** HeartbeatPing status. */
        public status: Long;

        /**
         * Creates a new HeartbeatPing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatPing instance
         */
        public static create(properties?: mcs_proto.IHeartbeatPing): mcs_proto.HeartbeatPing;

        /**
         * Encodes the specified HeartbeatPing message. Does not implicitly {@link mcs_proto.HeartbeatPing.verify|verify} messages.
         * @param message HeartbeatPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IHeartbeatPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatPing message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatPing.verify|verify} messages.
         * @param message HeartbeatPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IHeartbeatPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.HeartbeatPing;

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.HeartbeatPing;

        /**
         * Verifies a HeartbeatPing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatPing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatPing
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.HeartbeatPing;

        /**
         * Creates a plain object from a HeartbeatPing message. Also converts values to other types if specified.
         * @param message HeartbeatPing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.HeartbeatPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatPing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatPing
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatAck. */
    interface IHeartbeatAck {

        /** HeartbeatAck streamId */
        streamId?: (number|null);

        /** HeartbeatAck lastStreamIdReceived */
        lastStreamIdReceived?: (number|null);

        /** HeartbeatAck status */
        status?: (Long|null);
    }

    /** TAG: 1 */
    class HeartbeatAck implements IHeartbeatAck {

        /**
         * Constructs a new HeartbeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IHeartbeatAck);

        /** HeartbeatAck streamId. */
        public streamId: number;

        /** HeartbeatAck lastStreamIdReceived. */
        public lastStreamIdReceived: number;

        /** HeartbeatAck status. */
        public status: Long;

        /**
         * Creates a new HeartbeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatAck instance
         */
        public static create(properties?: mcs_proto.IHeartbeatAck): mcs_proto.HeartbeatAck;

        /**
         * Encodes the specified HeartbeatAck message. Does not implicitly {@link mcs_proto.HeartbeatAck.verify|verify} messages.
         * @param message HeartbeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IHeartbeatAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatAck message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatAck.verify|verify} messages.
         * @param message HeartbeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IHeartbeatAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.HeartbeatAck;

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.HeartbeatAck;

        /**
         * Verifies a HeartbeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatAck
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.HeartbeatAck;

        /**
         * Creates a plain object from a HeartbeatAck message. Also converts values to other types if specified.
         * @param message HeartbeatAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.HeartbeatAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatAck
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ErrorInfo. */
    interface IErrorInfo {

        /** ErrorInfo code */
        code: number;

        /** ErrorInfo message */
        message?: (string|null);

        /** ErrorInfo type */
        type?: (string|null);

        /** ErrorInfo extension */
        extension?: (mcs_proto.IExtension|null);
    }

    /** Represents an ErrorInfo. */
    class ErrorInfo implements IErrorInfo {

        /**
         * Constructs a new ErrorInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IErrorInfo);

        /** ErrorInfo code. */
        public code: number;

        /** ErrorInfo message. */
        public message: string;

        /** ErrorInfo type. */
        public type: string;

        /** ErrorInfo extension. */
        public extension?: (mcs_proto.IExtension|null);

        /**
         * Creates a new ErrorInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorInfo instance
         */
        public static create(properties?: mcs_proto.IErrorInfo): mcs_proto.ErrorInfo;

        /**
         * Encodes the specified ErrorInfo message. Does not implicitly {@link mcs_proto.ErrorInfo.verify|verify} messages.
         * @param message ErrorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link mcs_proto.ErrorInfo.verify|verify} messages.
         * @param message ErrorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.ErrorInfo;

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.ErrorInfo;

        /**
         * Verifies an ErrorInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorInfo
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.ErrorInfo;

        /**
         * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
         * @param message ErrorInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ErrorInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Setting. */
    interface ISetting {

        /** Setting name */
        name: string;

        /** Setting value */
        value: string;
    }

    /** Represents a Setting. */
    class Setting implements ISetting {

        /**
         * Constructs a new Setting.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.ISetting);

        /** Setting name. */
        public name: string;

        /** Setting value. */
        public value: string;

        /**
         * Creates a new Setting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Setting instance
         */
        public static create(properties?: mcs_proto.ISetting): mcs_proto.Setting;

        /**
         * Encodes the specified Setting message. Does not implicitly {@link mcs_proto.Setting.verify|verify} messages.
         * @param message Setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.ISetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Setting message, length delimited. Does not implicitly {@link mcs_proto.Setting.verify|verify} messages.
         * @param message Setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.ISetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Setting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.Setting;

        /**
         * Decodes a Setting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.Setting;

        /**
         * Verifies a Setting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Setting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Setting
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.Setting;

        /**
         * Creates a plain object from a Setting message. Also converts values to other types if specified.
         * @param message Setting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.Setting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Setting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Setting
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatStat. */
    interface IHeartbeatStat {

        /** HeartbeatStat ip */
        ip: string;

        /** HeartbeatStat timeout */
        timeout: boolean;

        /** HeartbeatStat intervalMs */
        intervalMs: number;
    }

    /** Represents a HeartbeatStat. */
    class HeartbeatStat implements IHeartbeatStat {

        /**
         * Constructs a new HeartbeatStat.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IHeartbeatStat);

        /** HeartbeatStat ip. */
        public ip: string;

        /** HeartbeatStat timeout. */
        public timeout: boolean;

        /** HeartbeatStat intervalMs. */
        public intervalMs: number;

        /**
         * Creates a new HeartbeatStat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatStat instance
         */
        public static create(properties?: mcs_proto.IHeartbeatStat): mcs_proto.HeartbeatStat;

        /**
         * Encodes the specified HeartbeatStat message. Does not implicitly {@link mcs_proto.HeartbeatStat.verify|verify} messages.
         * @param message HeartbeatStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IHeartbeatStat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatStat message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatStat.verify|verify} messages.
         * @param message HeartbeatStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IHeartbeatStat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatStat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.HeartbeatStat;

        /**
         * Decodes a HeartbeatStat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.HeartbeatStat;

        /**
         * Verifies a HeartbeatStat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatStat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatStat
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.HeartbeatStat;

        /**
         * Creates a plain object from a HeartbeatStat message. Also converts values to other types if specified.
         * @param message HeartbeatStat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.HeartbeatStat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatStat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatStat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatConfig. */
    interface IHeartbeatConfig {

        /** HeartbeatConfig uploadStat */
        uploadStat?: (boolean|null);

        /** HeartbeatConfig ip */
        ip?: (string|null);

        /** HeartbeatConfig intervalMs */
        intervalMs?: (number|null);
    }

    /** Represents a HeartbeatConfig. */
    class HeartbeatConfig implements IHeartbeatConfig {

        /**
         * Constructs a new HeartbeatConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IHeartbeatConfig);

        /** HeartbeatConfig uploadStat. */
        public uploadStat: boolean;

        /** HeartbeatConfig ip. */
        public ip: string;

        /** HeartbeatConfig intervalMs. */
        public intervalMs: number;

        /**
         * Creates a new HeartbeatConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatConfig instance
         */
        public static create(properties?: mcs_proto.IHeartbeatConfig): mcs_proto.HeartbeatConfig;

        /**
         * Encodes the specified HeartbeatConfig message. Does not implicitly {@link mcs_proto.HeartbeatConfig.verify|verify} messages.
         * @param message HeartbeatConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IHeartbeatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatConfig message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatConfig.verify|verify} messages.
         * @param message HeartbeatConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IHeartbeatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.HeartbeatConfig;

        /**
         * Decodes a HeartbeatConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.HeartbeatConfig;

        /**
         * Verifies a HeartbeatConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatConfig
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.HeartbeatConfig;

        /**
         * Creates a plain object from a HeartbeatConfig message. Also converts values to other types if specified.
         * @param message HeartbeatConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.HeartbeatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientEvent. */
    interface IClientEvent {

        /** ClientEvent type */
        type?: (mcs_proto.ClientEvent.Type|null);

        /** ClientEvent numberDiscardedEvents */
        numberDiscardedEvents?: (number|null);

        /** ClientEvent networkType */
        networkType?: (number|null);

        /** ClientEvent timeConnectionStartedMs */
        timeConnectionStartedMs?: (Long|null);

        /** ClientEvent timeConnectionEndedMs */
        timeConnectionEndedMs?: (Long|null);

        /** ClientEvent errorCode */
        errorCode?: (number|null);

        /** ClientEvent timeConnectionEstablishedMs */
        timeConnectionEstablishedMs?: (Long|null);
    }

    /** Represents a ClientEvent. */
    class ClientEvent implements IClientEvent {

        /**
         * Constructs a new ClientEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IClientEvent);

        /** ClientEvent type. */
        public type: mcs_proto.ClientEvent.Type;

        /** ClientEvent numberDiscardedEvents. */
        public numberDiscardedEvents: number;

        /** ClientEvent networkType. */
        public networkType: number;

        /** ClientEvent timeConnectionStartedMs. */
        public timeConnectionStartedMs: Long;

        /** ClientEvent timeConnectionEndedMs. */
        public timeConnectionEndedMs: Long;

        /** ClientEvent errorCode. */
        public errorCode: number;

        /** ClientEvent timeConnectionEstablishedMs. */
        public timeConnectionEstablishedMs: Long;

        /**
         * Creates a new ClientEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientEvent instance
         */
        public static create(properties?: mcs_proto.IClientEvent): mcs_proto.ClientEvent;

        /**
         * Encodes the specified ClientEvent message. Does not implicitly {@link mcs_proto.ClientEvent.verify|verify} messages.
         * @param message ClientEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IClientEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientEvent message, length delimited. Does not implicitly {@link mcs_proto.ClientEvent.verify|verify} messages.
         * @param message ClientEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IClientEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.ClientEvent;

        /**
         * Decodes a ClientEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.ClientEvent;

        /**
         * Verifies a ClientEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientEvent
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.ClientEvent;

        /**
         * Creates a plain object from a ClientEvent message. Also converts values to other types if specified.
         * @param message ClientEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.ClientEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientEvent {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            DISCARDED_EVENTS = 1,
            FAILED_CONNECTION = 2,
            SUCCESSFUL_CONNECTION = 3
        }
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest id */
        id: string;

        /** LoginRequest domain */
        domain: string;

        /** LoginRequest user */
        user: string;

        /** LoginRequest resource */
        resource: string;

        /** LoginRequest authToken */
        authToken: string;

        /** LoginRequest deviceId */
        deviceId?: (string|null);

        /** LoginRequest lastRmqId */
        lastRmqId?: (Long|null);

        /** LoginRequest setting */
        setting?: (mcs_proto.ISetting[]|null);

        /** LoginRequest receivedPersistentId */
        receivedPersistentId?: (string[]|null);

        /** LoginRequest adaptiveHeartbeat */
        adaptiveHeartbeat?: (boolean|null);

        /** LoginRequest heartbeatStat */
        heartbeatStat?: (mcs_proto.IHeartbeatStat|null);

        /** LoginRequest useRmq2 */
        useRmq2?: (boolean|null);

        /** LoginRequest accountId */
        accountId?: (Long|null);

        /** LoginRequest authService */
        authService?: (mcs_proto.LoginRequest.AuthService|null);

        /** LoginRequest networkType */
        networkType?: (number|null);

        /** LoginRequest status */
        status?: (Long|null);

        /** LoginRequest clientEvent */
        clientEvent?: (mcs_proto.IClientEvent[]|null);
    }

    /** TAG: 2 */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.ILoginRequest);

        /** LoginRequest id. */
        public id: string;

        /** LoginRequest domain. */
        public domain: string;

        /** LoginRequest user. */
        public user: string;

        /** LoginRequest resource. */
        public resource: string;

        /** LoginRequest authToken. */
        public authToken: string;

        /** LoginRequest deviceId. */
        public deviceId: string;

        /** LoginRequest lastRmqId. */
        public lastRmqId: Long;

        /** LoginRequest setting. */
        public setting: mcs_proto.ISetting[];

        /** LoginRequest receivedPersistentId. */
        public receivedPersistentId: string[];

        /** LoginRequest adaptiveHeartbeat. */
        public adaptiveHeartbeat: boolean;

        /** LoginRequest heartbeatStat. */
        public heartbeatStat?: (mcs_proto.IHeartbeatStat|null);

        /** LoginRequest useRmq2. */
        public useRmq2: boolean;

        /** LoginRequest accountId. */
        public accountId: Long;

        /** LoginRequest authService. */
        public authService: mcs_proto.LoginRequest.AuthService;

        /** LoginRequest networkType. */
        public networkType: number;

        /** LoginRequest status. */
        public status: Long;

        /** LoginRequest clientEvent. */
        public clientEvent: mcs_proto.IClientEvent[];

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: mcs_proto.ILoginRequest): mcs_proto.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link mcs_proto.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link mcs_proto.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LoginRequest {

        /** AuthService enum. */
        enum AuthService {
            ANDROID_ID = 2
        }
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse id */
        id: string;

        /** LoginResponse jid */
        jid?: (string|null);

        /** LoginResponse error */
        error?: (mcs_proto.IErrorInfo|null);

        /** LoginResponse setting */
        setting?: (mcs_proto.ISetting[]|null);

        /** LoginResponse streamId */
        streamId?: (number|null);

        /** LoginResponse lastStreamIdReceived */
        lastStreamIdReceived?: (number|null);

        /** LoginResponse heartbeatConfig */
        heartbeatConfig?: (mcs_proto.IHeartbeatConfig|null);

        /** LoginResponse serverTimestamp */
        serverTimestamp?: (Long|null);
    }

    /** TAG: 3 */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.ILoginResponse);

        /** LoginResponse id. */
        public id: string;

        /** LoginResponse jid. */
        public jid: string;

        /** LoginResponse error. */
        public error?: (mcs_proto.IErrorInfo|null);

        /** LoginResponse setting. */
        public setting: mcs_proto.ISetting[];

        /** LoginResponse streamId. */
        public streamId: number;

        /** LoginResponse lastStreamIdReceived. */
        public lastStreamIdReceived: number;

        /** LoginResponse heartbeatConfig. */
        public heartbeatConfig?: (mcs_proto.IHeartbeatConfig|null);

        /** LoginResponse serverTimestamp. */
        public serverTimestamp: Long;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: mcs_proto.ILoginResponse): mcs_proto.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link mcs_proto.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link mcs_proto.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StreamErrorStanza. */
    interface IStreamErrorStanza {

        /** StreamErrorStanza type */
        type: string;

        /** StreamErrorStanza text */
        text?: (string|null);
    }

    /** Represents a StreamErrorStanza. */
    class StreamErrorStanza implements IStreamErrorStanza {

        /**
         * Constructs a new StreamErrorStanza.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IStreamErrorStanza);

        /** StreamErrorStanza type. */
        public type: string;

        /** StreamErrorStanza text. */
        public text: string;

        /**
         * Creates a new StreamErrorStanza instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamErrorStanza instance
         */
        public static create(properties?: mcs_proto.IStreamErrorStanza): mcs_proto.StreamErrorStanza;

        /**
         * Encodes the specified StreamErrorStanza message. Does not implicitly {@link mcs_proto.StreamErrorStanza.verify|verify} messages.
         * @param message StreamErrorStanza message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IStreamErrorStanza, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamErrorStanza message, length delimited. Does not implicitly {@link mcs_proto.StreamErrorStanza.verify|verify} messages.
         * @param message StreamErrorStanza message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IStreamErrorStanza, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamErrorStanza message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamErrorStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.StreamErrorStanza;

        /**
         * Decodes a StreamErrorStanza message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamErrorStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.StreamErrorStanza;

        /**
         * Verifies a StreamErrorStanza message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamErrorStanza message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamErrorStanza
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.StreamErrorStanza;

        /**
         * Creates a plain object from a StreamErrorStanza message. Also converts values to other types if specified.
         * @param message StreamErrorStanza
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.StreamErrorStanza, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamErrorStanza to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StreamErrorStanza
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Close. */
    interface IClose {
    }

    /** TAG: 4 */
    class Close implements IClose {

        /**
         * Constructs a new Close.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IClose);

        /**
         * Creates a new Close instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Close instance
         */
        public static create(properties?: mcs_proto.IClose): mcs_proto.Close;

        /**
         * Encodes the specified Close message. Does not implicitly {@link mcs_proto.Close.verify|verify} messages.
         * @param message Close message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IClose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Close message, length delimited. Does not implicitly {@link mcs_proto.Close.verify|verify} messages.
         * @param message Close message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IClose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Close message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.Close;

        /**
         * Decodes a Close message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.Close;

        /**
         * Verifies a Close message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Close message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Close
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.Close;

        /**
         * Creates a plain object from a Close message. Also converts values to other types if specified.
         * @param message Close
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.Close, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Close to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Close
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Extension. */
    interface IExtension {

        /** Extension id */
        id: number;

        /** Extension data */
        data: Uint8Array;
    }

    /** Represents an Extension. */
    class Extension implements IExtension {

        /**
         * Constructs a new Extension.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IExtension);

        /** Extension id. */
        public id: number;

        /** Extension data. */
        public data: Uint8Array;

        /**
         * Creates a new Extension instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Extension instance
         */
        public static create(properties?: mcs_proto.IExtension): mcs_proto.Extension;

        /**
         * Encodes the specified Extension message. Does not implicitly {@link mcs_proto.Extension.verify|verify} messages.
         * @param message Extension message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IExtension, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Extension message, length delimited. Does not implicitly {@link mcs_proto.Extension.verify|verify} messages.
         * @param message Extension message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IExtension, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Extension message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Extension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.Extension;

        /**
         * Decodes an Extension message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Extension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.Extension;

        /**
         * Verifies an Extension message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Extension message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Extension
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.Extension;

        /**
         * Creates a plain object from an Extension message. Also converts values to other types if specified.
         * @param message Extension
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.Extension, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Extension to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Extension
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IqStanza. */
    interface IIqStanza {

        /** IqStanza rmqId */
        rmqId?: (Long|null);

        /** IqStanza type */
        type: mcs_proto.IqStanza.IqType;

        /** IqStanza id */
        id: string;

        /** IqStanza from */
        from?: (string|null);

        /** IqStanza to */
        to?: (string|null);

        /** IqStanza error */
        error?: (mcs_proto.IErrorInfo|null);

        /** IqStanza extension */
        extension?: (mcs_proto.IExtension|null);

        /** IqStanza persistentId */
        persistentId?: (string|null);

        /** IqStanza streamId */
        streamId?: (number|null);

        /** IqStanza lastStreamIdReceived */
        lastStreamIdReceived?: (number|null);

        /** IqStanza accountId */
        accountId?: (Long|null);

        /** IqStanza status */
        status?: (Long|null);
    }

    /**
     * TAG: 7
     * IqRequest must contain a single extension.  IqResponse may contain 0 or 1
     * extensions.
     */
    class IqStanza implements IIqStanza {

        /**
         * Constructs a new IqStanza.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IIqStanza);

        /** IqStanza rmqId. */
        public rmqId: Long;

        /** IqStanza type. */
        public type: mcs_proto.IqStanza.IqType;

        /** IqStanza id. */
        public id: string;

        /** IqStanza from. */
        public from: string;

        /** IqStanza to. */
        public to: string;

        /** IqStanza error. */
        public error?: (mcs_proto.IErrorInfo|null);

        /** IqStanza extension. */
        public extension?: (mcs_proto.IExtension|null);

        /** IqStanza persistentId. */
        public persistentId: string;

        /** IqStanza streamId. */
        public streamId: number;

        /** IqStanza lastStreamIdReceived. */
        public lastStreamIdReceived: number;

        /** IqStanza accountId. */
        public accountId: Long;

        /** IqStanza status. */
        public status: Long;

        /**
         * Creates a new IqStanza instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IqStanza instance
         */
        public static create(properties?: mcs_proto.IIqStanza): mcs_proto.IqStanza;

        /**
         * Encodes the specified IqStanza message. Does not implicitly {@link mcs_proto.IqStanza.verify|verify} messages.
         * @param message IqStanza message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IIqStanza, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IqStanza message, length delimited. Does not implicitly {@link mcs_proto.IqStanza.verify|verify} messages.
         * @param message IqStanza message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IIqStanza, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IqStanza message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IqStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.IqStanza;

        /**
         * Decodes an IqStanza message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IqStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.IqStanza;

        /**
         * Verifies an IqStanza message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IqStanza message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IqStanza
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.IqStanza;

        /**
         * Creates a plain object from an IqStanza message. Also converts values to other types if specified.
         * @param message IqStanza
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.IqStanza, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IqStanza to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IqStanza
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace IqStanza {

        /** IqType enum. */
        enum IqType {
            GET = 0,
            SET = 1,
            RESULT = 2,
            IQ_ERROR = 3
        }
    }

    /** Properties of an AppData. */
    interface IAppData {

        /** AppData key */
        key: string;

        /** AppData value */
        value: string;
    }

    /** Represents an AppData. */
    class AppData implements IAppData {

        /**
         * Constructs a new AppData.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IAppData);

        /** AppData key. */
        public key: string;

        /** AppData value. */
        public value: string;

        /**
         * Creates a new AppData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppData instance
         */
        public static create(properties?: mcs_proto.IAppData): mcs_proto.AppData;

        /**
         * Encodes the specified AppData message. Does not implicitly {@link mcs_proto.AppData.verify|verify} messages.
         * @param message AppData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IAppData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppData message, length delimited. Does not implicitly {@link mcs_proto.AppData.verify|verify} messages.
         * @param message AppData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IAppData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.AppData;

        /**
         * Decodes an AppData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.AppData;

        /**
         * Verifies an AppData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppData
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.AppData;

        /**
         * Creates a plain object from an AppData message. Also converts values to other types if specified.
         * @param message AppData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.AppData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AppData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DataMessageStanza. */
    interface IDataMessageStanza {

        /** DataMessageStanza id */
        id?: (string|null);

        /** DataMessageStanza from */
        from: string;

        /** DataMessageStanza to */
        to?: (string|null);

        /** DataMessageStanza category */
        category: string;

        /** DataMessageStanza token */
        token?: (string|null);

        /** DataMessageStanza appData */
        appData?: (mcs_proto.IAppData[]|null);

        /** DataMessageStanza fromTrustedServer */
        fromTrustedServer?: (boolean|null);

        /** DataMessageStanza persistentId */
        persistentId?: (string|null);

        /** DataMessageStanza streamId */
        streamId?: (number|null);

        /** DataMessageStanza lastStreamIdReceived */
        lastStreamIdReceived?: (number|null);

        /** DataMessageStanza regId */
        regId?: (string|null);

        /** DataMessageStanza deviceUserId */
        deviceUserId?: (Long|null);

        /** DataMessageStanza ttl */
        ttl?: (number|null);

        /** DataMessageStanza sent */
        sent?: (Long|null);

        /** DataMessageStanza queued */
        queued?: (number|null);

        /** DataMessageStanza status */
        status?: (Long|null);

        /** DataMessageStanza rawData */
        rawData?: (Uint8Array|null);

        /** DataMessageStanza immediateAck */
        immediateAck?: (boolean|null);
    }

    /** TAG: 8 */
    class DataMessageStanza implements IDataMessageStanza {

        /**
         * Constructs a new DataMessageStanza.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IDataMessageStanza);

        /** DataMessageStanza id. */
        public id: string;

        /** DataMessageStanza from. */
        public from: string;

        /** DataMessageStanza to. */
        public to: string;

        /** DataMessageStanza category. */
        public category: string;

        /** DataMessageStanza token. */
        public token: string;

        /** DataMessageStanza appData. */
        public appData: mcs_proto.IAppData[];

        /** DataMessageStanza fromTrustedServer. */
        public fromTrustedServer: boolean;

        /** DataMessageStanza persistentId. */
        public persistentId: string;

        /** DataMessageStanza streamId. */
        public streamId: number;

        /** DataMessageStanza lastStreamIdReceived. */
        public lastStreamIdReceived: number;

        /** DataMessageStanza regId. */
        public regId: string;

        /** DataMessageStanza deviceUserId. */
        public deviceUserId: Long;

        /** DataMessageStanza ttl. */
        public ttl: number;

        /** DataMessageStanza sent. */
        public sent: Long;

        /** DataMessageStanza queued. */
        public queued: number;

        /** DataMessageStanza status. */
        public status: Long;

        /** DataMessageStanza rawData. */
        public rawData: Uint8Array;

        /** DataMessageStanza immediateAck. */
        public immediateAck: boolean;

        /**
         * Creates a new DataMessageStanza instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataMessageStanza instance
         */
        public static create(properties?: mcs_proto.IDataMessageStanza): mcs_proto.DataMessageStanza;

        /**
         * Encodes the specified DataMessageStanza message. Does not implicitly {@link mcs_proto.DataMessageStanza.verify|verify} messages.
         * @param message DataMessageStanza message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IDataMessageStanza, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DataMessageStanza message, length delimited. Does not implicitly {@link mcs_proto.DataMessageStanza.verify|verify} messages.
         * @param message DataMessageStanza message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IDataMessageStanza, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataMessageStanza message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataMessageStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.DataMessageStanza;

        /**
         * Decodes a DataMessageStanza message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DataMessageStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.DataMessageStanza;

        /**
         * Verifies a DataMessageStanza message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DataMessageStanza message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DataMessageStanza
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.DataMessageStanza;

        /**
         * Creates a plain object from a DataMessageStanza message. Also converts values to other types if specified.
         * @param message DataMessageStanza
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.DataMessageStanza, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DataMessageStanza to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DataMessageStanza
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StreamAck. */
    interface IStreamAck {
    }

    /**
     * Included in IQ with ID 13, sent from client or server after 10 unconfirmed
     * messages.
     */
    class StreamAck implements IStreamAck {

        /**
         * Constructs a new StreamAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.IStreamAck);

        /**
         * Creates a new StreamAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamAck instance
         */
        public static create(properties?: mcs_proto.IStreamAck): mcs_proto.StreamAck;

        /**
         * Encodes the specified StreamAck message. Does not implicitly {@link mcs_proto.StreamAck.verify|verify} messages.
         * @param message StreamAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.IStreamAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamAck message, length delimited. Does not implicitly {@link mcs_proto.StreamAck.verify|verify} messages.
         * @param message StreamAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.IStreamAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.StreamAck;

        /**
         * Decodes a StreamAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.StreamAck;

        /**
         * Verifies a StreamAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamAck
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.StreamAck;

        /**
         * Creates a plain object from a StreamAck message. Also converts values to other types if specified.
         * @param message StreamAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.StreamAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StreamAck
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SelectiveAck. */
    interface ISelectiveAck {

        /** SelectiveAck id */
        id?: (string[]|null);
    }

    /** Included in IQ sent after LoginResponse from server with ID 12. */
    class SelectiveAck implements ISelectiveAck {

        /**
         * Constructs a new SelectiveAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: mcs_proto.ISelectiveAck);

        /** SelectiveAck id. */
        public id: string[];

        /**
         * Creates a new SelectiveAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectiveAck instance
         */
        public static create(properties?: mcs_proto.ISelectiveAck): mcs_proto.SelectiveAck;

        /**
         * Encodes the specified SelectiveAck message. Does not implicitly {@link mcs_proto.SelectiveAck.verify|verify} messages.
         * @param message SelectiveAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mcs_proto.ISelectiveAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SelectiveAck message, length delimited. Does not implicitly {@link mcs_proto.SelectiveAck.verify|verify} messages.
         * @param message SelectiveAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mcs_proto.ISelectiveAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelectiveAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectiveAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mcs_proto.SelectiveAck;

        /**
         * Decodes a SelectiveAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelectiveAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mcs_proto.SelectiveAck;

        /**
         * Verifies a SelectiveAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelectiveAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelectiveAck
         */
        public static fromObject(object: { [k: string]: any }): mcs_proto.SelectiveAck;

        /**
         * Creates a plain object from a SelectiveAck message. Also converts values to other types if specified.
         * @param message SelectiveAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mcs_proto.SelectiveAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelectiveAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SelectiveAck
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
