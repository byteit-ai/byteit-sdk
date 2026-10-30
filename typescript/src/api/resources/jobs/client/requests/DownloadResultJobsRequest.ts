// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../../../../index.js";

/**
 * @example
 *     {
 *         id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
 *     }
 */
export interface DownloadResultJobsRequest {
    id: string;
    /** Custom jobs only: return one ZIP with the result and the job's extra files (under `extras/`) instead of the result alone. */
    include_extras?: boolean;
    /** Optional output format override. When set, the result file with the requested extension is retrieved instead of the default. Case-insensitive. */
    output_format?: ByteIt.DownloadResultJobsRequestOutputFormat;
}
