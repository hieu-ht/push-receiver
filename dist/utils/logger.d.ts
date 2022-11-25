import { LogLevels } from '../constants';
export declare const setLogLevel: (newLogLevel: keyof typeof LogLevels) => void;
export declare const verbose: (...args: unknown[]) => void;
export declare const debug: (...args: unknown[]) => void;
export declare const warn: (...args: unknown[]) => void;
export declare const error: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const _default: {
    setLogLevel: (newLogLevel: "NONE" | "DEBUG" | "VERBOSE") => void;
    verbose: (...args: unknown[]) => void;
    debug: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
};
export default _default;
