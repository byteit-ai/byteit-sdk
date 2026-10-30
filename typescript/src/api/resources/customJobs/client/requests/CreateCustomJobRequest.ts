// This file was auto-generated from the ByteIt API definition.

import type * as core from "../../../../../core/index.js";

/**
 * @example
 *     {
 *         user_prompt: "Extract every line item with its VAT rate.",
 *         nickname: "supplier-invoices"
 *     }
 */
export interface CreateCustomJobRequest {
    /** Upload up to 25 documents for one custom job. */
    files?: core.file.Uploadable[] | undefined;
    /** Optional JSON extraction schema for the custom job. */
    schema?: Record<string, unknown> | null;
    /** Optional user prompt appended to the custom job request. */
    user_prompt?: string | null;
    /** Optional nickname for easier job identification. */
    nickname?: string | null;
}
