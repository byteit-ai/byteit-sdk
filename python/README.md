# ByteIt SDK for Python

[![pypi](https://img.shields.io/pypi/v/byteit)](https://pypi.org/project/byteit/)

The official ByteIt SDK: parse documents, extract structured data with a JSON schema, classify and split documents, and track every job — with typed models, typed errors, automatic retries and timeouts.

## Installation

```sh
pip install byteit
```

## Quick start

Every job runs the same way: create it with its type's `create(...)`,
poll `client.jobs.get_status` until it is `completed` or `failed`, then
download the result with `client.jobs.download_result`. `client.jobs`
works on any job, whatever its type.

```python
import time

from byteit import ByteIt, ExtractionSchema
from pydantic import Field

client = ByteIt(api_key="YOUR_API_KEY")


def wait_until_done(job_id: str) -> None:
    status = client.jobs.get_status(id=job_id)
    while status.processing_status not in ("completed", "failed"):
        time.sleep(2)
        status = client.jobs.get_status(id=job_id)
    if status.processing_status == "failed":
        raise RuntimeError(f"Job {job_id} failed: {status.message}")


# Parse a document.
with open("invoice.pdf", "rb") as file:
    parse_job = client.parse_jobs.create(file=file).parse_job
assert parse_job is not None  # one `file` gives `parse_job`; `files` give `parse_jobs`
wait_until_done(parse_job.job_id)
text = b"".join(client.jobs.download_result(id=parse_job.job_id))


# Extract fields from it with a schema.
class Invoice(ExtractionSchema):
    number: str | None = Field(default=None, description="Invoice number")
    total: str | None = Field(default=None, description="Total amount due")


extract_job = client.extract_jobs.create(
    parse_job_id=parse_job.job_id, schema=Invoice.build_api_schema()
).extract_job
wait_until_done(extract_job.job_id)
data = b"".join(client.jobs.download_result(id=extract_job.job_id))  # JSON bytes
```

`AsyncByteIt` has the same methods for asyncio
(`await client.jobs.get_status(id=...)`). A `file` can be an open file,
`bytes` or a `(filename, bytes)` tuple.

## Endpoints

One example per operation; each uses the `client` from the Quick start.
Every parameter and response field: [reference.md](https://github.com/byteit-ai/byteit-sdk/blob/main/python/reference.md).
Every HTTP route: [ENDPOINTS.md](https://github.com/byteit-ai/byteit-sdk/blob/main/python/ENDPOINTS.md).

### Parse jobs

**Create parse job** → `CreateParseJobResponse`

```python
with open("invoice.pdf", "rb") as file:
    client.parse_jobs.create(file=file, nickname="invoice-march", output_format="md")
```

### Extract jobs

**Create extract job** → `CreateExtractJobResponse`

```python
client.extract_jobs.create(
    parse_job_id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
    schema={
        "type": "object",
        "properties": {"invoice_number": {"type": "string", "description": "Invoice number"}, "total": {"type": "string", "description": "Total amount due"}}
    },
    extraction_complexity="medium",
)
```

### Classification jobs

**Create classification job** → `CreateClassificationJobResponse`

```python
from byteit import ClassificationClassEntryRequest

with open("inbox.pdf", "rb") as file:
    client.classification_jobs.create(
        file=file,
        classes=[
            ClassificationClassEntryRequest(
                label="invoice", description="A bill requesting payment"
            ),
            ClassificationClassEntryRequest(
                label="contract", description="A signed agreement between parties"
            ),
        ],
        nickname="inbox-batch",
    )
```

### Custom jobs

**Create custom job** → `CreateCustomJobResponse`

```python
with open("invoice-1.pdf", "rb") as first, open("invoice-2.pdf", "rb") as second:
    client.custom_jobs.create(
        files=[first, second],
        user_prompt="Extract every line item with its VAT rate.",
        nickname="supplier-invoices",
    )
```

### Jobs

**List jobs** → `ReadJobsListResponse`

```python
client.jobs.list(
    job_type="parse",
    limit=20,
)
```

**Get job** → `Job`

```python
client.jobs.get(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

**Update job nickname** → `Job`

```python
client.jobs.update_nickname(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
    nickname="invoice-march-final",
)
```

**Download job input file** → `typing.Iterator[bytes]`

```python
client.jobs.download_input_file(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

**Download job result** → `typing.Iterator[bytes]`

```python
client.jobs.download_result(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

**Get job processing status with progress** → `ReadJobStatusResponse`

```python
client.jobs.get_status(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

### Schemas

**List saved schemas** → `ReadSavedSchemasListResponse`

```python
client.schemas.list()
```

**Save schema** → `ReadSavedSchemaResponse`

```python
client.schemas.create(
    name="invoice",
    schema_json={
        "type": "object",
        "properties": {"invoice_number": {"type": "string", "description": "Invoice number"}, "total": {"type": "string", "description": "Total amount due"}}
    },
)
```

**Get saved schema** → `ReadSavedSchemaResponse`

```python
client.schemas.get(
    name="invoice",
)
```

**Delete saved schema**

```python
client.schemas.delete(
    name="invoice",
)
```

### Document classes

**List document classes** → `ReadDocumentClassesListResponse`

```python
client.document_classes.list()
```

**Create document class** → `ReadDocumentClassResponse`

```python
client.document_classes.create(
    label="invoice",
    description="A bill requesting payment",
)
```

**Get document class** → `ReadDocumentClassResponse`

```python
client.document_classes.get(
    id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
)
```

**Update document class** → `ReadDocumentClassResponse`

```python
client.document_classes.update(
    id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
    description="A bill or invoice requesting payment",
)
```

**Delete document class**

```python
client.document_classes.delete(
    id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
)
```

### API keys

**Create API key** → `CreateApiKeyResponse`

```python
client.api_keys.create(
    name="ci-pipeline",
    expires_in_days=90,
)
```

**Delete API key** → `ApiKeyResponse`

```python
client.api_keys.delete(
    name="ci-pipeline",
)
```

**List API keys** → `ReadApiKeysResponse`

```python
client.api_keys.list()
```

## Jobs, results and errors

### Lifecycle

Every job runs the same way, whatever its type: create it, follow it with `client.jobs.get_status()` until its `processing_status` is `completed` or `failed`, then download the result with `client.jobs.download_result()`. `client.jobs.get()` returns the whole job.

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

A failed request raises an `ApiError`; `byteit.errors` has one subclass
per status (`NotFoundError`, `TooManyRequestsError`, ...). Its `body`
holds a stable error `code`, a `message` and the `request_id` to quote
to support.

```python
from byteit.core.api_error import ApiError
from byteit.errors import NotFoundError

try:
    client.jobs.get(id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b")
except NotFoundError:
    ...
except ApiError as error:
    print(error.status_code, error.body)
```

Requests are retried twice, with exponential backoff, on 408, 429 and
5xx responses, and time out after 60 seconds. Change both for the
client or for one call:

```python
client = ByteIt(api_key="YOUR_API_KEY", max_retries=3, timeout=120.0)
client.jobs.list(request_options={"max_retries": 0, "timeout": 30})
```

## Migrating from 1.x

Version 2.0 replaces `ByteITClient` with `ByteIt` / `AsyncByteIt`.
`ExtractionSchema` is unchanged and produces exactly the same schemas.
There are no blocking calls any more: create a job, poll
`client.jobs.get_status` and download its result (see the Quick start).

| 1.x | 2.x |
|---|---|
| `ByteITClient(api_key=...)` | `ByteIt(api_key=...)` |
| `client.parse(path)` | `client.parse_jobs.create(file=open(path, "rb"))`, poll, `client.jobs.download_result(id)` |
| `client.parse_async(path)` | `client.parse_jobs.create(file=...)` |
| `client.get_job_status(id)` | `client.jobs.get_status(id)` |
| `client.get_parse_jobs()` | `client.jobs.list(job_type="parse")` |
| `client.get_parse_job_details(id)` | `client.jobs.get(id)` |
| `client.get_parse_job_result(id)` | `client.jobs.download_result(id)` |
| `client.extract(parse_job_id, Schema)` | `client.extract_jobs.create(parse_job_id=..., schema=Schema.build_api_schema())`, poll, `client.jobs.download_result(id)` |
| `client.extract_async(...)` | `client.extract_jobs.create(...)` |
| `client.get_extract_jobs()` | `client.jobs.list(job_type="extract")` |
| `client.get_extract_job_result(id)` | `client.jobs.download_result(id)` |
| `client.save_schema(name, schema)` | `client.schemas.create(name=..., schema_json=...)` |
| `client.get_saved_schemas()` | `client.schemas.list().schemas` |
| `client.get_saved_schema(name)` | `client.schemas.get(name)` |
| `client.delete_saved_schema(name)` | `client.schemas.delete(name)` |
| `client.custom_job_async(...)` | `client.custom_jobs.create(...)` |
| `client.get_custom_jobs()` | `client.jobs.list(job_type="custom")` |
| `client.get_custom_job_result(id)` | `client.jobs.download_result(id)` |
| `ByteITError` and subclasses | `byteit.core.api_error.ApiError` and the typed errors in `byteit.errors` |

## Contributing

This library is generated from the ByteIt API definition, so changes made here would be overwritten by the next release. To report a bug or request a feature, open an issue (see the repository's CONTRIBUTING.md).
