// This file was auto-generated from the ByteIt API definition.

export interface ReadJobResultNotReadyResponse {
    detail: string;
    job_id: string;
    processing_status: string;
    /** Always false until the job completes. */
    ready: boolean;
}
