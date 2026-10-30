// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../../../../index.js";

/**
 * @example
 *     {
 *         parse_job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
 *         schema: {
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
 *         },
 *         extraction_complexity: "medium"
 *     }
 */
export interface CreateExtractJobRequest {
    /** Public ID of the completed parse job to extract data from. */
    parse_job_id: string;
    /** JSON extraction schema for the extract job. */
    schema: Record<string, unknown>;
    /** Complexity tier for the extraction: low, medium, or high. */
    extraction_complexity?: ByteIt.ExtractionComplexityEnum;
}
