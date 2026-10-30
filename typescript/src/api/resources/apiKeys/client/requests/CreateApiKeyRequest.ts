// This file was auto-generated from the ByteIt API definition.

/**
 * @example
 *     {
 *         name: "ci-pipeline",
 *         expires_in_days: 90
 *     }
 */
export interface CreateApiKeyRequest {
    /** Unique name for the key (per user). */
    name: string;
    /** Days until the key expires. Omit for a key that does not expire. */
    expires_in_days?: number;
}
