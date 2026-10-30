// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export interface ProcessingOptions {
    languages?: string[] | undefined;
    page_range?: string | undefined;
    image_annotations?: boolean | undefined;
    force_image_annotations?: boolean | undefined;
    table_enrichment?: boolean | undefined;
    parse_type?: ByteIt.ParseTypeEnum | undefined;
    output_format?: ByteIt.OutputFormatEnum | undefined;
}
