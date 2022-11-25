"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.debug = exports.verbose = exports.setLogLevel = void 0;
const constants_1 = require("../constants");
let logLevel = constants_1.LogLevels.NONE;
const setLogLevel = (newLogLevel) => {
    logLevel = constants_1.LogLevels[newLogLevel];
};
exports.setLogLevel = setLogLevel;
const verbose = (...args) => {
    if (logLevel < constants_1.LogLevels.VERBOSE)
        return;
    console.log('[PUSH_RECEIVER_VERBOSE]', ...args);
};
exports.verbose = verbose;
const debug = (...args) => {
    if (logLevel < constants_1.LogLevels.DEBUG)
        return;
    console.log('[PUSH_RECEIVER_DEBUG]', ...args);
};
exports.debug = debug;
const warn = (...args) => {
    if (logLevel === constants_1.LogLevels.NONE)
        return;
    console.warn('[PUSH_RECEIVER_WARNING]', ...args);
};
exports.warn = warn;
exports.error = console.error;
exports.default = {
    setLogLevel: exports.setLogLevel,
    verbose: exports.verbose,
    debug: exports.debug,
    warn: exports.warn,
    error: exports.error
};
//# sourceMappingURL=logger.js.map