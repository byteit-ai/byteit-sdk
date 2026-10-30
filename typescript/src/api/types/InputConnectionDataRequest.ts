// This file was auto-generated from the ByteIt API definition.

export interface InputConnectionDataRequest {
    /** S3 bucket that holds the source object(s). */
    source_bucket?: string | undefined;
    /** Single object key inside the bucket (mutually exclusive with source_paths). */
    source_path_inside_bucket?: string | undefined;
    /** Bulk object keys inside the bucket (mutually exclusive with source_path_inside_bucket). */
    source_paths?: string[] | undefined;
}
