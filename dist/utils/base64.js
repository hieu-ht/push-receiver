"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBase64 = exports.escape = void 0;
function escape(value) {
    return value
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}
exports.escape = escape;
function toBase64(value) {
    return escape(value.toString('base64'));
}
exports.toBase64 = toBase64;
//# sourceMappingURL=base64.js.map