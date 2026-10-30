// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface ReadJobsListResponse {
    detail: string;
    /** Number of jobs in this page. */
    count: number;
    /** Jobs of any type; use `job_type` to tell them apart. */
    jobs: ByteIt.Job[];
}
