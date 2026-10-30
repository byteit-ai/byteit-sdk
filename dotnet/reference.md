# Reference
## ParseJobs
<details><summary><code>client.ParseJobs.<a href="/src/ByteIt/ParseJobs/ParseJobsClient.cs">CreateAsync</a>(CreateParseJobRequest { ... }) -> WithRawResponseTask&lt;CreateParseJobResponse&gt;</code></summary>

#### Description

Create a parse job entry for document processing.

#### Usage

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

#### Parameters

- **request:** `CreateParseJobRequest`

</details>

## ExtractJobs
<details><summary><code>client.ExtractJobs.<a href="/src/ByteIt/ExtractJobs/ExtractJobsClient.cs">CreateAsync</a>(CreateExtractJobRequest { ... }) -> WithRawResponseTask&lt;CreateExtractJobResponse&gt;</code></summary>

#### Description

Create an extract job from an existing parse job.

#### Usage

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

#### Parameters

- **request:** `CreateExtractJobRequest`

</details>

## ClassificationJobs
<details><summary><code>client.ClassificationJobs.<a href="/src/ByteIt/ClassificationJobs/ClassificationJobsClient.cs">CreateAsync</a>(CreateClassificationJobRequest { ... }) -> WithRawResponseTask&lt;CreateClassificationJobResponse&gt;</code></summary>

#### Description

Create a user-requested classification job from an uploaded file.

#### Usage

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

#### Parameters

- **request:** `CreateClassificationJobRequest`

</details>

## CustomJobs
<details><summary><code>client.CustomJobs.<a href="/src/ByteIt/CustomJobs/CustomJobsClient.cs">CreateAsync</a>(CreateCustomJobRequest { ... }) -> WithRawResponseTask&lt;CreateCustomJobResponse&gt;</code></summary>

#### Description

Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.

#### Usage

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

#### Parameters

- **request:** `CreateCustomJobRequest`

</details>

## jobs
<details><summary><code>client.Jobs.<a href="/src/ByteIt/Jobs/JobsClient.cs">ListAsync</a>(ListJobsRequest { ... }) -> WithRawResponseTask&lt;ReadJobsListResponse&gt;</code></summary>

#### Description

List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.

#### Usage

```csharp
await client.Jobs.ListAsync(
    new ListJobsRequest { JobType = ListJobsRequestJobType.Parse, Limit = 20 }
);
```

#### Parameters

- **request:** `ListJobsRequest`

</details>

<details><summary><code>client.Jobs.<a href="/src/ByteIt/Jobs/JobsClient.cs">GetAsync</a>(GetJobsRequest { ... }) -> WithRawResponseTask&lt;Job&gt;</code></summary>

#### Description

Retrieve any of your jobs by its ID. The response shape depends on `job_type`.

#### Usage

```csharp
await client.Jobs.GetAsync(new GetJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" });
```

#### Parameters

- **request:** `GetJobsRequest`

</details>

<details><summary><code>client.Jobs.<a href="/src/ByteIt/Jobs/JobsClient.cs">UpdateNicknameAsync</a>(PatchedUpdateJobNicknameRequest { ... }) -> WithRawResponseTask&lt;Job&gt;</code></summary>

#### Description

Set or clear the display name of any of your jobs.

#### Usage

```csharp
await client.Jobs.UpdateNicknameAsync(
    new PatchedUpdateJobNicknameRequest
    {
        Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        Nickname = "invoice-march-final",
    }
);
```

#### Parameters

- **request:** `PatchedUpdateJobNicknameRequest`

</details>

<details><summary><code>client.Jobs.<a href="/src/ByteIt/Jobs/JobsClient.cs">DownloadInputFileAsync</a>(DownloadInputFileJobsRequest { ... }) -> WithRawResponseTask&lt;Stream&gt;</code></summary>

#### Description

Download the original input file of a job by its public ID.

#### Usage

```csharp
await client.Jobs.DownloadInputFileAsync(
    new DownloadInputFileJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
);
```

#### Parameters

- **request:** `DownloadInputFileJobsRequest`

</details>

<details><summary><code>client.Jobs.<a href="/src/ByteIt/Jobs/JobsClient.cs">DownloadResultAsync</a>(DownloadResultJobsRequest { ... }) -> WithRawResponseTask&lt;Stream&gt;</code></summary>

#### Description

Download the result of a completed job; what you get depends on its `job_type`:

- `parse`: the parsed document (in `output_format` when given);
- `extract`: JSON shaped by your extraction schema;
- `classification`: JSON with the `document_class` and the classified `pages`;
- `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.

Responds with 409 while the job is still processing.

#### Usage

```csharp
await client.Jobs.DownloadResultAsync(
    new DownloadResultJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
);
```

#### Parameters

- **request:** `DownloadResultJobsRequest`

</details>

<details><summary><code>client.Jobs.<a href="/src/ByteIt/Jobs/JobsClient.cs">GetStatusAsync</a>(GetStatusJobsRequest { ... }) -> WithRawResponseTask&lt;ReadJobStatusResponse&gt;</code></summary>

#### Description

Return job processing status with estimated progress.

#### Usage

```csharp
await client.Jobs.GetStatusAsync(
    new GetStatusJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
);
```

#### Parameters

- **request:** `GetStatusJobsRequest`

</details>

## schemas
<details><summary><code>client.Schemas.<a href="/src/ByteIt/Schemas/SchemasClient.cs">ListAsync</a>() -> WithRawResponseTask&lt;ReadSavedSchemasListResponse&gt;</code></summary>

#### Description

Return all saved schemas owned by the authenticated user.

#### Usage

```csharp
await client.Schemas.ListAsync();
```

</details>

<details><summary><code>client.Schemas.<a href="/src/ByteIt/Schemas/SchemasClient.cs">CreateAsync</a>(CreateSavedSchemaRequest { ... }) -> WithRawResponseTask&lt;ReadSavedSchemaResponse&gt;</code></summary>

#### Description

Persist a validated schema for the authenticated user.

#### Usage

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

#### Parameters

- **request:** `CreateSavedSchemaRequest`

</details>

<details><summary><code>client.Schemas.<a href="/src/ByteIt/Schemas/SchemasClient.cs">GetAsync</a>(GetSchemasRequest { ... }) -> WithRawResponseTask&lt;ReadSavedSchemaResponse&gt;</code></summary>

#### Description

Return a saved schema owned by the authenticated user.

#### Usage

```csharp
await client.Schemas.GetAsync(new GetSchemasRequest { Name = "invoice" });
```

#### Parameters

- **request:** `GetSchemasRequest`

</details>

<details><summary><code>client.Schemas.<a href="/src/ByteIt/Schemas/SchemasClient.cs">DeleteAsync</a>(DeleteSchemasRequest { ... }) -> WithRawResponseTask</code></summary>

#### Description

Delete a saved schema owned by the authenticated user.

#### Usage

```csharp
await client.Schemas.DeleteAsync(new DeleteSchemasRequest { Name = "invoice" });
```

#### Parameters

- **request:** `DeleteSchemasRequest`

</details>

## DocumentClasses
<details><summary><code>client.DocumentClasses.<a href="/src/ByteIt/DocumentClasses/DocumentClassesClient.cs">ListAsync</a>() -> WithRawResponseTask&lt;ReadDocumentClassesListResponse&gt;</code></summary>

#### Description

Return default catalogue entries plus the user's custom classes.

#### Usage

```csharp
await client.DocumentClasses.ListAsync();
```

</details>

<details><summary><code>client.DocumentClasses.<a href="/src/ByteIt/DocumentClasses/DocumentClassesClient.cs">CreateAsync</a>(CreateDocumentClassRequest { ... }) -> WithRawResponseTask&lt;ReadDocumentClassResponse&gt;</code></summary>

#### Description

Persist a new user-owned document class.

#### Usage

```csharp
await client.DocumentClasses.CreateAsync(
    new CreateDocumentClassRequest { Label = "invoice", Description = "A bill requesting payment" }
);
```

#### Parameters

- **request:** `CreateDocumentClassRequest`

</details>

<details><summary><code>client.DocumentClasses.<a href="/src/ByteIt/DocumentClasses/DocumentClassesClient.cs">GetAsync</a>(GetDocumentClassesRequest { ... }) -> WithRawResponseTask&lt;ReadDocumentClassResponse&gt;</code></summary>

#### Description

Return one document class by id.

#### Usage

```csharp
await client.DocumentClasses.GetAsync(
    new GetDocumentClassesRequest { Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e" }
);
```

#### Parameters

- **request:** `GetDocumentClassesRequest`

</details>

<details><summary><code>client.DocumentClasses.<a href="/src/ByteIt/DocumentClasses/DocumentClassesClient.cs">UpdateAsync</a>(UpdateDocumentClassRequest { ... }) -> WithRawResponseTask&lt;ReadDocumentClassResponse&gt;</code></summary>

#### Description

Update an owned custom document class.

#### Usage

```csharp
await client.DocumentClasses.UpdateAsync(
    new UpdateDocumentClassRequest
    {
        Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
        Description = "A bill or invoice requesting payment",
    }
);
```

#### Parameters

- **request:** `UpdateDocumentClassRequest`

</details>

<details><summary><code>client.DocumentClasses.<a href="/src/ByteIt/DocumentClasses/DocumentClassesClient.cs">DeleteAsync</a>(DeleteDocumentClassesRequest { ... }) -> WithRawResponseTask</code></summary>

#### Description

Delete an owned custom document class.

#### Usage

```csharp
await client.DocumentClasses.DeleteAsync(
    new DeleteDocumentClassesRequest { Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e" }
);
```

#### Parameters

- **request:** `DeleteDocumentClassesRequest`

</details>

## ApiKeys
<details><summary><code>client.ApiKeys.<a href="/src/ByteIt/ApiKeys/ApiKeysClient.cs">CreateAsync</a>(CreateApiKeyRequest { ... }) -> WithRawResponseTask&lt;CreateApiKeyResponse&gt;</code></summary>

#### Description

Create a named API key. The raw key is returned only once, in this response; store it securely.

#### Usage

```csharp
await client.ApiKeys.CreateAsync(
    new CreateApiKeyRequest { Name = "ci-pipeline", ExpiresInDays = 90 }
);
```

#### Parameters

- **request:** `CreateApiKeyRequest`

</details>

<details><summary><code>client.ApiKeys.<a href="/src/ByteIt/ApiKeys/ApiKeysClient.cs">DeleteAsync</a>(DeleteApiKeysRequest { ... }) -> WithRawResponseTask&lt;ApiKeyResponse&gt;</code></summary>

#### Description

Revoke and delete one of your API keys by name.

#### Usage

```csharp
await client.ApiKeys.DeleteAsync(new DeleteApiKeysRequest { Name = "ci-pipeline" });
```

#### Parameters

- **request:** `DeleteApiKeysRequest`

</details>

<details><summary><code>client.ApiKeys.<a href="/src/ByteIt/ApiKeys/ApiKeysClient.cs">ListAsync</a>() -> WithRawResponseTask&lt;ReadApiKeysResponse&gt;</code></summary>

#### Description

List your API keys (metadata only; raw keys are never returned).

#### Usage

```csharp
await client.ApiKeys.ListAsync();
```

</details>
