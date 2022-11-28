"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const http_ece_1 = __importDefault(require("http_ece"));
// https://tools.ietf.org/html/draft-ietf-webpush-encryption-03
function decrypt(object, keys) {
    const cryptoKey = object.appData.find((item) => item.key === "crypto-key");
    if (!cryptoKey) {
        throw new Error("crypto-key is missing");
    }
    const salt = object.appData.find((item) => item.key === "encryption");
    if (!salt) {
        throw new Error("salt is missing");
    }
    const dh = crypto_1.default.createECDH("prime256v1");
    dh.setPrivateKey(keys.privateKey, "base64");
    const params = {
        version: "aesgcm",
        authSecret: keys.authSecret,
        dh: cryptoKey.value.slice(3),
        privateKey: dh,
        salt: salt.value.slice(5),
    };
    const decrypted = http_ece_1.default.decrypt(object.rawData, params);
    return JSON.parse(decrypted);
}
exports.default = decrypt;
//# sourceMappingURL=decrypt.js.map