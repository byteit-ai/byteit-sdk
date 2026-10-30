// This file was auto-generated from the ByteIt API definition.

import * as errors from "./index.js";

export class ByteItTimeoutError extends errors.ByteItError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super({
            message: message,
            cause: opts?.cause,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = "ByteItTimeoutError";
    }
}
