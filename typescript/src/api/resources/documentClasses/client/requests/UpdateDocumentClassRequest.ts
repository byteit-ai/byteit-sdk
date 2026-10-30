// This file was auto-generated from the ByteIt API definition.

/**
 * @example
 *     {
 *         id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
 *         description: "A bill or invoice requesting payment"
 *     }
 */
export interface UpdateDocumentClassRequest {
    id: string;
    /** Class label returned by the classifier. */
    label?: string;
    /** Short description of when this class applies. */
    description?: string;
}
