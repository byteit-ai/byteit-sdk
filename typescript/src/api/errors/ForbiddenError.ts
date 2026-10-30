// This file was auto-generated from the ByteIt API definition.

import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ByteIt from "../index.js";

export class ForbiddenError extends errors.ByteItError {
    public declare readonly body: ByteIt.ErrorResponse;

    constructor(body: ByteIt.ErrorResponse, rawResponse?: core.RawResponse) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = "ForbiddenError";
    }
}
