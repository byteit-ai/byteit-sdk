// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface ReadApiKeysResponse {
    name?: string | undefined;
    uid?: (string | null) | undefined;
    create_time?: (string | null) | undefined;
    update_time?: (string | null) | undefined;
    delete_time?: (string | null) | undefined;
    detail?: string | undefined;
    count?: number | undefined;
    keys?: ByteIt.ApiKeySummary[] | undefined;
}
