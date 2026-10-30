// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface CustomJob {
    /** Unique job identifier. */
    job_id: string;
    /** Display name you gave the job. */
    nickname?: (string | null) | undefined;
    /** Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final. */
    processing_status: ByteIt.ProcessingStatusEnum;
    /** When the job was created. */
    created_at?: (string | null) | undefined;
    /** When the job last changed. */
    updated_at?: (string | null) | undefined;
    /** Time the job took to process, once it has finished. */
    processing_time_seconds?: (number | null) | undefined;
    /** Credits charged for the job. */
    credits_cost?: number | undefined;
    /** Why the job failed, when it did. */
    error?: (string | null) | undefined;
    /** Stable error code of a failed job, from the same vocabulary as API errors. */
    error_code?: (string | null) | undefined;
    /** Name of the uploaded file, when the job has one. */
    file_name?: (string | null) | undefined;
    /** Pages in the document, once it has been inspected. */
    page_count?: (number | null) | undefined;
    job_type: ByteIt.CustomJobTypeEnum;
    /** JSON schema the job extracted with, when it extracts data. */
    extraction_schema?: (unknown | null) | undefined;
    /** Instructions you gave the job. */
    user_prompt?: (string | null) | undefined;
    /** Names of the uploaded files, in upload order. */
    file_names?: string[] | undefined;
    /** Pages across all uploaded files. */
    total_page_count?: (number | null) | undefined;
    /** File type of each uploaded file, in upload order. */
    document_types?: (string | null)[] | undefined;
    /** Whether an extras ZIP can be downloaded. */
    has_extras?: boolean | undefined;
}
