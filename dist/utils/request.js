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
const axios_1 = __importDefault(require("axios"));
const timeout_1 = __importDefault(require("./timeout"));
const logger_1 = __importDefault(require("./logger"));
// In seconds
const MAX_RETRY_TIMEOUT = 15;
// Step in seconds
const RETRY_STEP = 5;
function requestWithRety(options) {
    return retry(0, options);
}
exports.default = requestWithRety;
function retry(retryCount = 0, options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, axios_1.default)(options);
            return response.data;
        }
        catch (e) {
            const timeout = Math.min(retryCount * RETRY_STEP, MAX_RETRY_TIMEOUT);
            logger_1.default.verbose(`Request failed : ${e.message}`);
            logger_1.default.verbose(`Retrying in ${timeout} seconds`);
            yield (0, timeout_1.default)(timeout * 1000);
            return retry(retryCount + 1, options);
        }
    });
}
//# sourceMappingURL=request.js.map