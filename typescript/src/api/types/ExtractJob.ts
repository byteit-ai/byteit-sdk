// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface ExtractJob {
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
    job_type: ByteIt.ExtractJobTypeEnum;
    /** The parse job this extraction reads from. */
    input_job_id: string | null;
    extraction_schema?: unknown | undefined;
    /** Complexity level the extraction ran with. */
    extraction_complexity: ByteIt.ExtractionComplexityEnum;
    /** Unit the job is billed in: `page`, `char`, `cell` or `pixel`. */
    billable_unit?: (string | null) | undefined;
    /** Quantity billed, in `billable_unit`. */
    billable_quantity?: (number | null) | undefined;
}
