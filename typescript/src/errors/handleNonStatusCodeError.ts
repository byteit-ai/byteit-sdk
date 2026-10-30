// This file was auto-generated from the ByteIt API definition.

import type * as core from "../core/index.js";
import * as errors from "./index.js";

export function handleNonStatusCodeError(
    error: core.Fetcher.Error,
    rawResponse: core.RawResponse,
    method: string,
    path: string,
): never {
    switch (error.reason) {
        case "non-json":
            throw new errors.ByteItError({
                statusCode: error.statusCode,
                body: error.rawBody,
                rawResponse: rawResponse,
            });
        case "body-is-null":
            throw new errors.ByteItError({
                statusCode: error.statusCode,
                rawResponse: rawResponse,
            });
        case "timeout":
            throw new errors.ByteItTimeoutError(`Timeout exceeded when calling ${method} ${path}.`, {
                cause: error.cause,
            });
        case "unknown":
            throw new errors.ByteItError({
                message: error.errorMessage,
                rawResponse: rawResponse,
                cause: error.cause,
            });
        default:
            throw new errors.ByteItError({
                message: "Unknown error",
                rawResponse: rawResponse,
            });
    }
}
