// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface CreateParseJobResponse {
    detail: string;
    parse_job?: (ByteIt.ParseJob | null) | undefined;
    count?: (number | null) | undefined;
    parse_jobs?: (ByteIt.ParseJob[] | null) | undefined;
    failed_files?: (ByteIt.FailedFileResponse[] | null) | undefined;
}
