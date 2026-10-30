// This file was auto-generated from the ByteIt API definition.

import type * as core from "../../../../../core/index.js";
import type * as ByteIt from "../../../../index.js";

/**
 * @example
 *     {
 *         file: fs.createReadStream("/path/to/your/file"),
 *         classes: [{
 *                 label: "invoice",
 *                 description: "A bill requesting payment"
 *             }, {
 *                 label: "contract",
 *                 description: "A signed agreement between parties"
 *             }],
 *         nickname: "inbox-batch"
 *     }
 */
export interface CreateClassificationJobRequest {
    /** Document to classify. */
    file: core.file.Uploadable;
    /** Optional list of {label, description} objects. When omitted, system default classes are used. When provided, only these classes are used. */
    classes?: ByteIt.ClassificationClassEntryRequest[] | null;
    /** Optional nickname for easier job identification. */
    nickname?: string | null;
}
