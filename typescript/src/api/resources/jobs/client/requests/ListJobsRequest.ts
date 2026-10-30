// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../../../../index.js";

/**
 * @example
 *     {
 *         job_type: "parse",
 *         limit: 20
 *     }
 */
export interface ListJobsRequest {
    /** Cursor for the next page: pass the `created_at` of the last job you received to get older jobs (ISO 8601). */
    before?: string | null;
    /** Only list jobs of this type. */
    job_type?: ByteIt.ListJobsRequestJobType;
    /** Maximum number of jobs to return (default 50). */
    limit?: number;
}
