// This file was auto-generated from the ByteIt API definition.

export interface ReadJobStatusResponse {
    /** Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final. */
    processing_status: string;
    /** Estimated progress percentage from 0 to 100 */
    progress: number;
    /** Optional informational message, e.g. when processing takes longer than expected */
    message: string | null;
}
