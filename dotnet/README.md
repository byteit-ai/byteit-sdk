# ByteIt SDK for C#

The official ByteIt SDK: parse documents, extract structured data with a JSON schema, classify and split documents, and track every job — with typed models, typed errors, automatic retries and timeouts.

## Requirements

This SDK requires:
- .NET 8 and above
- .NET Framework 4.6.2 and above
- .NET Standard 2.0 and above

## Quick start

Not on NuGet yet: reference the project from this directory with
`dotnet add reference <path-to>/dotnet/src/ByteIt/ByteIt.csproj`.

Every job runs the same way: create it with its type's `CreateAsync`,
poll `client.Jobs.GetStatusAsync` until it is `completed` or `failed`,
then download the result with `client.Jobs.DownloadResultAsync`.
`client.Jobs` works on any job, whatever its type.

```csharp
using ByteIt;

var client = new ByteItClient("YOUR_API_KEY");

var created = await client.ParseJobs.CreateAsync(new CreateParseJobRequest
{
    File = new FileParameter { Stream = File.OpenRead("invoice.pdf"), FileName = "invoice.pdf" },
});
var jobId = created.ParseJob!.JobId;
var status = await client.Jobs.GetStatusAsync(new GetStatusJobsRequest { Id = jobId });
while (status.ProcessingStatus is not ("completed" or "failed"))
{
    await Task.Delay(TimeSpan.FromSeconds(2));
    status = await client.Jobs.GetStatusAsync(new GetStatusJobsRequest { Id = jobId });
}
if (status.ProcessingStatus == "failed")
{
    throw new InvalidOperationException($"Job {jobId} failed: {status.Message}");
}
await using var result = await client.Jobs.DownloadResultAsync(
    new DownloadResultJobsRequest { Id = jobId });
```

## Endpoints

One example per operation; each uses the `client` from the Quick start.
Every parameter and response field: [reference.md](https://github.com/byteit-ai/byteit-sdk/blob/main/dotnet/reference.md).
Every HTTP route: [ENDPOINTS.md](https://github.com/byteit-ai/byteit-sdk/blob/main/dotnet/ENDPOINTS.md).

### Parse jobs

**Create parse job** → `CreateParseJobResponse`

```csharp
await client.ParseJobs.CreateAsync(
    new CreateParseJobRequest
    {
        File = new FileParameter { Stream = File.OpenRead("invoice.pdf"), FileName = "invoice.pdf" },
        Nickname = "invoice-march",
        OutputFormat = OutputFormatEnum.Md,
    }
);
```

### Extract jobs

**Create extract job** → `CreateExtractJobResponse`

```csharp
await client.ExtractJobs.CreateAsync(
    new CreateExtractJobRequest
    {
        ParseJobId = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        Schema = new Dictionary<string, object?>()
        {
            { "type", "object" },
            {
                "properties",
                new Dictionary<object, object?>()
                {
                    {
                        "invoice_number",
                        new Dictionary<object, object?>()
                        {
                            { "description", "Invoice number" },
                            { "type", "string" },
                        }
                    },
                    {
                        "total",
                        new Dictionary<object, object?>()
                        {
                            { "description", "Total amount due" },
                            { "type", "string" },
                        }
                    },
                }
            },
        },
        ExtractionComplexity = ExtractionComplexityEnum.Medium,
    }
);
```

### Classification jobs

**Create classification job** → `CreateClassificationJobResponse`

```csharp
await client.ClassificationJobs.CreateAsync(
    new CreateClassificationJobRequest
    {
        File = new FileParameter { Stream = File.OpenRead("inbox.pdf"), FileName = "inbox.pdf" },
        Classes = new List<ClassificationClassEntryRequest>
        {
            new() { Label = "invoice", Description = "A bill requesting payment" },
            new() { Label = "contract", Description = "A signed agreement between parties" },
        },
        Nickname = "inbox-batch",
    }
);
```

### Custom jobs

**Create custom job** → `CreateCustomJobResponse`

```csharp
await client.CustomJobs.CreateAsync(
    new CreateCustomJobRequest
    {
        Files = new[]
        {
            new FileParameter { Stream = File.OpenRead("invoice-1.pdf"), FileName = "invoice-1.pdf" },
            new FileParameter { Stream = File.OpenRead("invoice-2.pdf"), FileName = "invoice-2.pdf" },
        },
        UserPrompt = "Extract every line item with its VAT rate.",
        Nickname = "supplier-invoices",
    }
);
```

### Jobs

**List jobs** → `ReadJobsListResponse`

```csharp
await client.Jobs.ListAsync(
    new ListJobsRequest { JobType = ListJobsRequestJobType.Parse, Limit = 20 }
);
```

**Get job** → `Job`

```csharp
await client.Jobs.GetAsync(new GetJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" });
```

**Update job nickname** → `Job`

```csharp
await client.Jobs.UpdateNicknameAsync(
    new PatchedUpdateJobNicknameRequest
    {
        Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        Nickname = "invoice-march-final",
    }
);
```

**Download job input file** → `Stream`

```csharp
await client.Jobs.DownloadInputFileAsync(
    new DownloadInputFileJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
);
```

**Download job result** → `Stream`

```csharp
await client.Jobs.DownloadResultAsync(
    new DownloadResultJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
);
```

**Get job processing status with progress** → `ReadJobStatusResponse`

```csharp
await client.Jobs.GetStatusAsync(
    new GetStatusJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
);
```

### Schemas

**List saved schemas** → `ReadSavedSchemasListResponse`

```csharp
await client.Schemas.ListAsync();
```

**Save schema** → `ReadSavedSchemaResponse`

```csharp
await client.Schemas.CreateAsync(
    new CreateSavedSchemaRequest
    {
        Name = "invoice",
        SchemaJson = new Dictionary<string, object?>()
        {
            { "type", "object" },
            {
                "properties",
                new Dictionary<object, object?>()
                {
                    {
                        "invoice_number",
                        new Dictionary<object, object?>()
                        {
                            { "description", "Invoice number" },
                            { "type", "string" },
                        }
                    },
                    {
                        "total",
                        new Dictionary<object, object?>()
                        {
                            { "description", "Total amount due" },
                            { "type", "string" },
                        }
                    },
                }
            },
        },
    }
);
```

**Get saved schema** → `ReadSavedSchemaResponse`

```csharp
await client.Schemas.GetAsync(new GetSchemasRequest { Name = "invoice" });
```

**Delete saved schema** → `WithRawResponseTask`

```csharp
await client.Schemas.DeleteAsync(new DeleteSchemasRequest { Name = "invoice" });
```

### Document classes

**List document classes** → `ReadDocumentClassesListResponse`

```csharp
await client.DocumentClasses.ListAsync();
```

**Create document class** → `ReadDocumentClassResponse`

```csharp
await client.DocumentClasses.CreateAsync(
    new CreateDocumentClassRequest { Label = "invoice", Description = "A bill requesting payment" }
);
```

**Get document class** → `ReadDocumentClassResponse`

```csharp
await client.DocumentClasses.GetAsync(
    new GetDocumentClassesRequest { Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e" }
);
```

**Update document class** → `ReadDocumentClassResponse`

```csharp
await client.DocumentClasses.UpdateAsync(
    new UpdateDocumentClassRequest
    {
        Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
        Description = "A bill or invoice requesting payment",
    }
);
```

**Delete document class** → `WithRawResponseTask`

```csharp
await client.DocumentClasses.DeleteAsync(
    new DeleteDocumentClassesRequest { Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e" }
);
```

### API keys

**Create API key** → `CreateApiKeyResponse`

```csharp
await client.ApiKeys.CreateAsync(
    new CreateApiKeyRequest { Name = "ci-pipeline", ExpiresInDays = 90 }
);
```

**Delete API key** → `ApiKeyResponse`

```csharp
await client.ApiKeys.DeleteAsync(new DeleteApiKeysRequest { Name = "ci-pipeline" });
```

**List API keys** → `ReadApiKeysResponse`

```csharp
await client.ApiKeys.ListAsync();
```

## Jobs, results and errors

### Lifecycle

Every job runs the same way, whatever its type: create it, follow it with `client.Jobs.GetStatusAsync()` until its `processing_status` is `completed` or `failed`, then download the result with `client.Jobs.DownloadResultAsync()`. `client.Jobs.GetAsync()` returns the whole job.

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

`client.Jobs.GetAsync()` and `client.Jobs.ListAsync()` return a job of one of these types, told apart by `job_type`. Fields use the API's names; this SDK spells them in PascalCase (`processing_status` is `ProcessingStatus`).

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

A failed request throws a `ByteItClientApiException`; there is one
subclass per status (`NotFoundError`, ...). Its `Body` holds a stable
error `Code`, a `Message` and the `RequestId` to quote to support.

```csharp
try
{
    await client.Jobs.GetAsync(new GetJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" });
}
catch (NotFoundError)
{
    // ...
}
catch (ByteItClientApiException e)
{
    Console.WriteLine($"{e.StatusCode}: {e.Body}");
}
```

Requests are retried twice, with exponential backoff, on 408, 429 and
5xx responses, and time out after 60 seconds. Change both for the
client or for one call:

```csharp
var client = new ByteItClient("YOUR_API_KEY", new ClientOptions { MaxRetries = 3, Timeout = TimeSpan.FromMinutes(2) });
await client.Jobs.ListAsync(new ListJobsRequest(), new RequestOptions { MaxRetries = 0, Timeout = TimeSpan.FromSeconds(30) });
```

## Contributing

This library is generated from the ByteIt API definition, so changes made here would be overwritten by the next release. To report a bug or request a feature, open an issue (see the repository's CONTRIBUTING.md).
