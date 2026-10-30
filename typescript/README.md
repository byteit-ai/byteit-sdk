# ByteIt SDK for TypeScript

The official ByteIt SDK: parse documents, extract structured data with a JSON schema, classify and split documents, and track every job — with typed models, typed errors, automatic retries and timeouts.

## Quick start

Not on npm yet: build this directory (`pnpm install && pnpm build`) and
add it to your project with `npm install <path-to>/typescript`.

Every job runs the same way: create it with its type's `create(...)`,
poll `client.jobs.getStatus` until it is `completed` or `failed`, then
download the result with `client.jobs.downloadResult`. `client.jobs`
works on any job, whatever its type.

```typescript
import * as fs from "fs";
import { ByteItClient } from "@byteit/sdk";

const client = new ByteItClient({ apiKey: process.env.BYTEIT_API_KEY! });

const { parse_job } = await client.parseJobs.create({ file: fs.createReadStream("invoice.pdf") });
let status = await client.jobs.getStatus({ id: parse_job!.job_id });
while (status.processing_status !== "completed" && status.processing_status !== "failed") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    status = await client.jobs.getStatus({ id: parse_job!.job_id });
}
if (status.processing_status === "failed") {
    throw new Error(`Job ${parse_job!.job_id} failed: ${status.message}`);
}
const result = await client.jobs.downloadResult({ id: parse_job!.job_id });
const text = new TextDecoder().decode(await result.arrayBuffer());
```

A `file` can be a stream, `Buffer`, `Blob` or `File`. Request and
response types are exported under the `ByteIt` namespace
(`ByteIt.CreateParseJobRequest`).

## Endpoints

One example per operation; each uses the `client` from the Quick start.
Every parameter and response field: [reference.md](https://github.com/byteit-ai/byteit-sdk/blob/main/typescript/reference.md).
Every HTTP route: [ENDPOINTS.md](https://github.com/byteit-ai/byteit-sdk/blob/main/typescript/ENDPOINTS.md).

### Parse jobs

**Create parse job** → `ByteIt.CreateParseJobResponse`

```typescript
await client.parseJobs.create({
    file: fs.createReadStream("invoice.pdf"),
    nickname: "invoice-march",
    output_format: "md",
});
```

### Extract jobs

**Create extract job** → `ByteIt.CreateExtractJobResponse`

```typescript
await client.extractJobs.create({
    parse_job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
    schema: {
        "type": "object",
        "properties": {
            "invoice_number": {
                "type": "string",
                "description": "Invoice number"
            },
            "total": {
                "type": "string",
                "description": "Total amount due"
            }
        }
    },
    extraction_complexity: "medium"
});
```

### Classification jobs

**Create classification job** → `ByteIt.CreateClassificationJobResponse`

```typescript
await client.classificationJobs.create({
    file: fs.createReadStream("inbox.pdf"),
    classes: [
        { label: "invoice", description: "A bill requesting payment" },
        { label: "contract", description: "A signed agreement between parties" },
    ],
    nickname: "inbox-batch",
});
```

### Custom jobs

**Create custom job** → `ByteIt.CreateCustomJobResponse`

```typescript
await client.customJobs.create({
    files: [fs.createReadStream("invoice-1.pdf"), fs.createReadStream("invoice-2.pdf")],
    user_prompt: "Extract every line item with its VAT rate.",
    nickname: "supplier-invoices",
});
```

### Jobs

**List jobs** → `ByteIt.ReadJobsListResponse`

```typescript
await client.jobs.list({
    job_type: "parse",
    limit: 20
});
```

**Get job** → `ByteIt.Job`

```typescript
await client.jobs.get({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

**Update job nickname** → `ByteIt.Job`

```typescript
await client.jobs.updateNickname({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
    nickname: "invoice-march-final"
});
```

**Download job input file** → `core.BinaryResponse`

```typescript
await client.jobs.downloadInputFile({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

**Download job result** → `core.BinaryResponse`

```typescript
await client.jobs.downloadResult({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

**Get job processing status with progress** → `ByteIt.ReadJobStatusResponse`

```typescript
await client.jobs.getStatus({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

### Schemas

**List saved schemas** → `ByteIt.ReadSavedSchemasListResponse`

```typescript
await client.schemas.list();
```

**Save schema** → `ByteIt.ReadSavedSchemaResponse`

```typescript
await client.schemas.create({
    name: "invoice",
    schema_json: {
        "type": "object",
        "properties": {
            "invoice_number": {
                "type": "string",
                "description": "Invoice number"
            },
            "total": {
                "type": "string",
                "description": "Total amount due"
            }
        }
    }
});
```

**Get saved schema** → `ByteIt.ReadSavedSchemaResponse`

```typescript
await client.schemas.get({
    name: "invoice"
});
```

**Delete saved schema** → `void`

```typescript
await client.schemas.delete({
    name: "invoice"
});
```

### Document classes

**List document classes** → `ByteIt.ReadDocumentClassesListResponse`

```typescript
await client.documentClasses.list();
```

**Create document class** → `ByteIt.ReadDocumentClassResponse`

```typescript
await client.documentClasses.create({
    label: "invoice",
    description: "A bill requesting payment"
});
```

**Get document class** → `ByteIt.ReadDocumentClassResponse`

```typescript
await client.documentClasses.get({
    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e"
});
```

**Update document class** → `ByteIt.ReadDocumentClassResponse`

```typescript
await client.documentClasses.update({
    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
    description: "A bill or invoice requesting payment"
});
```

**Delete document class** → `void`

```typescript
await client.documentClasses.delete({
    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e"
});
```

### API keys

**Create API key** → `ByteIt.CreateApiKeyResponse`

```typescript
await client.apiKeys.create({
    name: "ci-pipeline",
    expires_in_days: 90
});
```

**Delete API key** → `ByteIt.ApiKeyResponse`

```typescript
await client.apiKeys.delete({
    name: "ci-pipeline"
});
```

**List API keys** → `ByteIt.ReadApiKeysResponse`

```typescript
await client.apiKeys.list();
```

## Jobs, results and errors

### Lifecycle

Every job runs the same way, whatever its type: create it, follow it with `client.jobs.getStatus()` until its `processing_status` is `completed` or `failed`, then download the result with `client.jobs.downloadResult()`. `client.jobs.get()` returns the whole job.

`processing_status`: Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final.

### Results

Download the result of a completed job; what you get depends on its `job_type`:

- `parse`: the parsed document (in `output_format` when given);
- `extract`: JSON shaped by your extraction schema;
- `classification`: JSON with the `document_class` and the classified `pages`;
- `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.

Responds with 409 while the job is still processing.

### Uploads

Accepted file types: `pdf`, `doc`, `docx`, `odt`, `rtf`, `txt`, `md`, `html`, `xlsx`, `xls`, `pptx`, `jpeg`, `jpg`, `png`, `tiff`, `bmp`, `json`, `xml`.
A document can have up to 250 pages and 200 MB; longer or larger documents are rejected.
An upload request carries up to 50 MB in total and, for operations that take `files`, up to 25 files; a larger upload fails with `FILE_TOO_LARGE` (HTTP 413).

### Job fields

`client.jobs.get()` and `client.jobs.list()` return a job of one of these types, told apart by `job_type`. Fields use the API's names.

Every job has:

| Field | Type | Description |
|---|---|---|
| `job_id` | string | Unique job identifier. |
| `nickname` | string, nullable | Display name you gave the job. |
| `processing_status` | one of `pending`, `processing`, `completed`, `failed`, `queued` | Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final. |
| `created_at` | date-time, nullable | When the job was created. |
| `updated_at` | date-time, nullable | When the job last changed. |
| `processing_time_seconds` | double, nullable | Time the job took to process, once it has finished. |
| `credits_cost` | double | Credits charged for the job. |
| `error` | string, nullable | Why the job failed, when it did. |
| `error_code` | string, nullable | Stable error code of a failed job, from the same vocabulary as API errors. |
| `file_name` | string, nullable | Name of the uploaded file, when the job has one. |
| `page_count` | integer, nullable | Pages in the document, once it has been inspected. |

`job_type` `parse` adds:

| Field | Type | Description |
|---|---|---|
| `file_size` | integer, nullable | Size of the document in bytes. |
| `output_format` | string, nullable | Format of the parsed result. |
| `processing_options` | ProcessingOptions, nullable | Options the document was parsed with. |
| `input_connector` | string, nullable | Where the document came from: `localfile` (uploaded) or `s3`. |
| `output_connector` | string, nullable | Where the result is delivered: `localfile` (download) or `s3`. |
| `billable_unit` | string, nullable | Unit the job is billed in: `page`, `char`, `cell` or `pixel`. |
| `billable_quantity` | integer, nullable | Quantity billed, in `billable_unit`. |

`job_type` `extract` adds:

| Field | Type | Description |
|---|---|---|
| `input_job_id` | string, nullable | The parse job this extraction reads from. |
| `extraction_schema` | object | JSON schema that was applied. |
| `extraction_complexity` | one of `low`, `medium`, `high` | Complexity level the extraction ran with. |
| `billable_unit` | string, nullable | Unit the job is billed in: `page`, `char`, `cell` or `pixel`. |
| `billable_quantity` | integer, nullable | Quantity billed, in `billable_unit`. |

`job_type` `classification` adds:

| Field | Type | Description |
|---|---|---|
| `document_class` | string, nullable | Majority page label for the document, or 'mixed' when the vote ties. |

`job_type` `custom` adds:

| Field | Type | Description |
|---|---|---|
| `extraction_schema` | object, nullable | JSON schema the job extracted with, when it extracts data. |
| `user_prompt` | string, nullable | Instructions you gave the job. |
| `file_names` | list of string | Names of the uploaded files, in upload order. |
| `total_page_count` | integer, nullable | Pages across all uploaded files. |
| `document_types` | list of string, nullable | File type of each uploaded file, in upload order. |
| `has_extras` | boolean | Whether an extras ZIP can be downloaded. |

### Error codes

A failed request raises the error for its HTTP status (see *Errors, retries and timeouts*), and its body's `code` is one of these. A failed job reports the same codes in `error_code`. 5xx errors are temporary: retry later.

| Code | HTTP | Message |
|---|---|---|
| `INTERNAL_SERVER_ERROR` | 500 | An unexpected error occurred. Please try again later. |
| `SERVICE_UNAVAILABLE` | 503 | The service is temporarily unavailable. Please try again later. |
| `EXTRACT_JOB_NOT_FOUND` | 404 | Extract job not found. |
| `JOB_NOT_FOUND` | 404 | Job not found or access denied. |
| `MISSING_REQUIRED_FIELD` | 400 | A required field is missing. |
| `INVALID_VALUE` | 422 | The provided value is invalid. |
| `STATE_CONFLICT` | 409 | The operation conflicts with the current state. |
| `JOB_ALREADY_FINALIZED` | 409 | This job has already been processed. |
| `REFUND_DESTINATION_MISSING` | 400 | We couldn't refund the credits automatically; we'll reconcile this. |
| `EMPTY_MODEL_RESPONSE` | 500 | The document could not be processed because no data was returned. |
| `MALFORMED_MODEL_RESPONSE` | 500 | The document could not be processed due to an invalid response. |
| `MODEL_PROCESSING_ERROR` | 500 | The document could not be processed. Please try again. |
| `PDF_PASSWORD_PROTECTED` | 400 | The uploaded file is password protected and could not be processed. Please remove the password and try again. |
| `PDF_NOT_VALID` | 400 | The uploaded file is not a valid PDF and could not be processed. The file appears to be corrupted or truncated; please check the file and try again. |
| `PDF_TRUNCATED` | 400 | The uploaded file is truncated and could not be processed. The file appears to be corrupted; please upload the complete file and try again. |
| `PDF_CORRUPTED` | 400 | The uploaded file is corrupted and could not be processed. The file appears to be damaged or truncated; please check the file and try again. |
| `IMAGE_CORRUPTED` | 400 | The uploaded image is corrupted and could not be processed. The image appears to be damaged or truncated; please check the file and try again. |
| `UNSUPPORTED_FILE_TYPE` | 400 | Unsupported file type. |
| `FILE_TOO_LARGE` | 413 | The upload exceeds the maximum request size. |
| `UNSUPPORTED_OFFICE_TYPE` | 400 | Unsupported Office file type. |
| `UNSUPPORTED_SPREADSHEET` | 400 | Spreadsheet files (.xlsx, .xls) are not supported for CV extraction. |
| `NO_TEXT_EXTRACTED` | 400 | No text could be extracted from the uploaded `{file_type}` document. |
| `RTF_NOT_VALID` | 400 | The uploaded file is not a valid RTF document. |
| `ARCHIVE_INVALID` | 400 | The uploaded file is not a valid archive. |
| `ARCHIVE_EMPTY` | 400 | The uploaded document appears to be an empty or invalid archive. |
| `RESOURCE_NOT_FOUND` | 404 | The requested resource was not found. |
| `RESULT_EXPIRED` | 410 | The requested result has expired and is no longer available. |
| `UNAUTHORIZED` | 401 | Authentication is required to perform this action. |
| `FORBIDDEN` | 403 | You do not have permission to perform this action. |
| `INSUFFICIENT_CREDITS` | 409 | You do not have enough credits for this operation. |
| `UPSTREAM_ERROR` | 502 | A dependency failed to process the request. Please try again later. |

## Errors, retries and timeouts

A failed request throws a `ByteItError`; the `ByteIt` namespace has one
subclass per status (`ByteIt.NotFoundError`, ...). Its `body` holds a
stable error `code`, a `message` and the `request_id` to quote to
support.

```typescript
import { ByteIt, ByteItError } from "@byteit/sdk";

try {
    await client.jobs.get({ id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" });
} catch (err) {
    if (err instanceof ByteIt.NotFoundError) {
        // ...
    } else if (err instanceof ByteItError) {
        console.log(err.statusCode, err.body);
    }
}
```

Requests are retried twice, with exponential backoff, on 408, 429 and
5xx responses, and time out after 60 seconds. Change both for the
client or for one call:

```typescript
const client = new ByteItClient({ apiKey, maxRetries: 3, timeoutInSeconds: 120 });
await client.jobs.list({}, { maxRetries: 0, timeoutInSeconds: 30 });
```

## Contributing

This library is generated from the ByteIt API definition, so changes made here would be overwritten by the next release. To report a bug or request a feature, open an issue (see the repository's CONTRIBUTING.md).
