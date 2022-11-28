"use strict";
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
exports.checkIn = void 0;
const long_1 = __importDefault(require("long"));
const crypto_1 = require("crypto");
const request_1 = __importDefault(require("./utils/request"));
const timeout_1 = __importDefault(require("./utils/timeout"));
const protos_1 = __importDefault(require("./protos"));
const logger_1 = __importDefault(require("./utils/logger"));
const REGISTER_URL = "https://android.clients.google.com/c2dm/register3";
const CHECKIN_URL = "https://android.clients.google.com/checkin";
exports.default = (config) => __awaiter(void 0, void 0, void 0, function* () {
    const options = yield checkIn(config);
    const credentials = yield doRegister(options, config);
    return credentials;
});
function checkIn(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = yield (0, request_1.default)({
            url: CHECKIN_URL,
            method: "POST",
            headers: {
                "Content-Type": "application/x-protobuf",
            },
            data: prepareCheckinBuffer(config),
            responseType: "arraybuffer",
        });
        const AndroidCheckinResponse = protos_1.default.checkin_proto.AndroidCheckinResponse;
        const message = AndroidCheckinResponse.decode(new Uint8Array(body));
        const object = AndroidCheckinResponse.toObject(message, {
            longs: String,
            enums: String,
            bytes: String,
        });
        return {
            androidId: object.androidId,
            securityToken: object.securityToken,
        };
    });
}
exports.checkIn = checkIn;
function doRegister({ androidId, securityToken }, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const appId = `wp:${config.bundleId}#${(0, crypto_1.randomUUID)()}`;
        const body = new URLSearchParams({
            app: "org.chromium.linux",
            "X-subtype": appId,
            device: androidId,
            sender: config.vapidKey,
        }).toString();
        const response = yield postRegister({ androidId, securityToken, body });
        const token = response.split("=")[1];
        return {
            token,
            androidId,
            securityToken,
            appId,
        };
    });
}
function postRegister({ androidId, securityToken, body, retry = 0 }) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, request_1.default)({
            url: REGISTER_URL,
            method: "POST",
            headers: {
                Authorization: `AidLogin ${androidId}:${securityToken}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: body,
        });
        if (response.includes("Error")) {
            logger_1.default.warn(`Register request has failed with ${response}`);
            if (retry >= 5) {
                throw new Error("GCM register has failed");
            }
            logger_1.default.warn(`Retry... ${retry + 1}`);
            yield (0, timeout_1.default)(1000);
            return postRegister({ androidId, securityToken, body, retry: retry + 1 });
        }
        return response;
    });
}
function prepareCheckinBuffer(config) {
    var _a;
    const gcm = (_a = config.credentials) === null || _a === void 0 ? void 0 : _a.gcm;
    const AndroidCheckinRequest = protos_1.default.checkin_proto.AndroidCheckinRequest;
    const payload = {
        userSerialNumber: 0,
        checkin: {
            type: 3,
            chromeBuild: {
                platform: 2,
                chromeVersion: "63.0.3234.0",
                channel: 1,
            },
        },
        version: 3,
        id: (gcm === null || gcm === void 0 ? void 0 : gcm.androidId) ? long_1.default.fromString(gcm.androidId) : undefined,
        securityToken: (gcm === null || gcm === void 0 ? void 0 : gcm.securityToken) ? long_1.default.fromString(gcm === null || gcm === void 0 ? void 0 : gcm.securityToken, true) : undefined,
    };
    const errMsg = AndroidCheckinRequest.verify(payload);
    if (errMsg) {
        throw Error(errMsg);
    }
    const message = AndroidCheckinRequest.create(payload);
    return AndroidCheckinRequest.encode(message).finish();
}
//# sourceMappingURL=gcm.js.map