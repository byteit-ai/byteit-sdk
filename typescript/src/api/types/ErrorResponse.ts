// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface ErrorResponse {
    /** Stable machine-readable error code from the versioned vocabulary */
    code: ByteIt.CodeEnum;
    /** Client-safe human-readable message */
    message: string;
    /** Request identifier to quote when contacting support */
    request_id: string;
}
