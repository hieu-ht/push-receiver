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
const crypto_1 = __importDefault(require("crypto"));
const request_1 = __importDefault(require("./utils/request"));
const base64_1 = require("./utils/base64");
const FCM_SUBSCRIBE = 'https://fcm.googleapis.com/fcm/connect/subscribe';
const FCM_ENDPOINT = 'https://fcm.googleapis.com/fcm/send';
function registerFCM(gcm, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const keys = yield createKeys();
        const response = yield (0, request_1.default)({
            url: FCM_SUBSCRIBE,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: (new URLSearchParams({
                authorized_entity: config.senderId,
                endpoint: `${FCM_ENDPOINT}/${gcm.token}`,
                encryption_key: keys.publicKey
                    .replace(/=/g, '')
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_'),
                encryption_auth: keys.authSecret
                    .replace(/=/g, '')
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_'),
            })).toString(),
        });
        return {
            gcm,
            keys,
            fcm: response,
        };
    });
}
exports.default = registerFCM;
function createKeys() {
    return new Promise((resolve, reject) => {
        const dh = crypto_1.default.createECDH('prime256v1');
        dh.generateKeys();
        crypto_1.default.randomBytes(16, (err, buf) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                privateKey: (0, base64_1.escape)(dh.getPrivateKey('base64')),
                publicKey: (0, base64_1.escape)(dh.getPublicKey('base64')),
                authSecret: (0, base64_1.escape)(buf.toString('base64')),
            });
        });
    });
}
//# sourceMappingURL=fcm.js.map