// This file was auto-generated from the ByteIt API definition.

/**
 * @example
 *     {
 *         name: "invoice",
 *         schema_json: {
 *             "type": "object",
 *             "properties": {
 *                 "invoice_number": {
 *                     "type": "string",
 *                     "description": "Invoice number"
 *                 },
 *                 "total": {
 *                     "type": "string",
 *                     "description": "Total amount due"
 *                 }
 *             }
 *         }
 *     }
 */
export interface CreateSavedSchemaRequest {
    /** Unique name to save the schema under (per user). */
    name: string;
    /** JSON extraction schema to save. */
    schema_json: Record<string, unknown>;
}
