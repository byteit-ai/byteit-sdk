// This file was auto-generated from the ByteIt API definition.

import type * as core from "../../../../../core/index.js";
import type * as ByteIt from "../../../../index.js";

/**
 * @example
 *     {
 *         nickname: "invoice-march",
 *         output_format: "md"
 *     }
 */
export interface CreateParseJobRequest {
    /** Document to parse (localfile connector). Use 'files' for several. */
    file?: core.file.Uploadable | undefined;
    /** Upload up to 25 files in one request (localfile connector only). Mutually exclusive with 'file'. */
    files?: core.file.Uploadable[] | undefined;
    /** Optional nickname for easier job identification. */
    nickname?: string | null;
    /** Output format for the result: 'txt', 'json', 'html', 'md', 'zip' */
    output_format?: ByteIt.OutputFormatEnum | null;
    /** Where to read the document from: 'localfile' (upload) or 's3'. */
    input_connector?: ByteIt.InputConnectorEnum;
    /** Configuration for the input connector. For localfile: leave empty. */
    input_connection_data?: ByteIt.InputConnectionDataRequest | null;
    /** Where to deliver the result: 's3' (your bucket, see output_connection_data). Leave empty to download it from ByteIt. */
    output_connector?: ByteIt.OutputConnectorEnum | null;
    /** Configuration for the output connector. */
    output_connection_data?: ByteIt.OutputConnectionDataRequest | null;
    /** Processing options for the job. */
    processing_options?: ByteIt.ProcessingOptionsRequest | null;
    /** When true, the job is accepted and held in queued status instead of starting processing immediately. */
    queue_for_batch?: boolean | null;
}
