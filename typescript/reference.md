# Reference
## ParseJobs
<details><summary><code>client.parseJobs.<a href="/src/api/resources/parseJobs/client/Client.ts">create</a>({ ...params }) -> ByteIt.CreateParseJobResponse</code></summary>

#### Description

Create a parse job entry for document processing.

#### Usage

```typescript
await client.parseJobs.create({
    file: fs.createReadStream("invoice.pdf"),
    nickname: "invoice-march",
    output_format: "md",
});
```

#### Parameters

- **request:** `ByteIt.CreateParseJobRequest`
- **requestOptions:** `ParseJobsClient.RequestOptions`

</details>

## ExtractJobs
<details><summary><code>client.extractJobs.<a href="/src/api/resources/extractJobs/client/Client.ts">create</a>({ ...params }) -> ByteIt.CreateExtractJobResponse</code></summary>

#### Description

Create an extract job from an existing parse job.

#### Usage

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

#### Parameters

- **request:** `ByteIt.CreateExtractJobRequest`
- **requestOptions:** `ExtractJobsClient.RequestOptions`

</details>

## ClassificationJobs
<details><summary><code>client.classificationJobs.<a href="/src/api/resources/classificationJobs/client/Client.ts">create</a>({ ...params }) -> ByteIt.CreateClassificationJobResponse</code></summary>

#### Description

Create a user-requested classification job from an uploaded file.

#### Usage

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

#### Parameters

- **request:** `ByteIt.CreateClassificationJobRequest`
- **requestOptions:** `ClassificationJobsClient.RequestOptions`

</details>

## CustomJobs
<details><summary><code>client.customJobs.<a href="/src/api/resources/customJobs/client/Client.ts">create</a>({ ...params }) -> ByteIt.CreateCustomJobResponse</code></summary>

#### Description

Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.

#### Usage

```typescript
await client.customJobs.create({
    files: [fs.createReadStream("invoice-1.pdf"), fs.createReadStream("invoice-2.pdf")],
    user_prompt: "Extract every line item with its VAT rate.",
    nickname: "supplier-invoices",
});
```

#### Parameters

- **request:** `ByteIt.CreateCustomJobRequest`
- **requestOptions:** `CustomJobsClient.RequestOptions`

</details>

## jobs
<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">list</a>({ ...params }) -> ByteIt.ReadJobsListResponse</code></summary>

#### Description

List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.

#### Usage

```typescript
await client.jobs.list({
    job_type: "parse",
    limit: 20
});
```

#### Parameters

- **request:** `ByteIt.ListJobsRequest`
- **requestOptions:** `JobsClient.RequestOptions`

</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>({ ...params }) -> ByteIt.Job</code></summary>

#### Description

Retrieve any of your jobs by its ID. The response shape depends on `job_type`.

#### Usage

```typescript
await client.jobs.get({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

#### Parameters

- **request:** `ByteIt.GetJobsRequest`
- **requestOptions:** `JobsClient.RequestOptions`

</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">updateNickname</a>({ ...params }) -> ByteIt.Job</code></summary>

#### Description

Set or clear the display name of any of your jobs.

#### Usage

```typescript
await client.jobs.updateNickname({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
    nickname: "invoice-march-final"
});
```

#### Parameters

- **request:** `ByteIt.PatchedUpdateJobNicknameRequest`
- **requestOptions:** `JobsClient.RequestOptions`

</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">downloadInputFile</a>({ ...params }) -> core.BinaryResponse</code></summary>

#### Description

Download the original input file of a job by its public ID.

#### Usage

```typescript
await client.jobs.downloadInputFile({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

#### Parameters

- **request:** `ByteIt.DownloadInputFileJobsRequest`
- **requestOptions:** `JobsClient.RequestOptions`

</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">downloadResult</a>({ ...params }) -> core.BinaryResponse</code></summary>

#### Description

Download the result of a completed job; what you get depends on its `job_type`:

- `parse`: the parsed document (in `output_format` when given);
- `extract`: JSON shaped by your extraction schema;
- `classification`: JSON with the `document_class` and the classified `pages`;
- `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.

Responds with 409 while the job is still processing.

#### Usage

```typescript
await client.jobs.downloadResult({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

#### Parameters

- **request:** `ByteIt.DownloadResultJobsRequest`
- **requestOptions:** `JobsClient.RequestOptions`

</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">getStatus</a>({ ...params }) -> ByteIt.ReadJobStatusResponse</code></summary>

#### Description

Return job processing status with estimated progress.

#### Usage

```typescript
await client.jobs.getStatus({
    id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
});
```

#### Parameters

- **request:** `ByteIt.GetStatusJobsRequest`
- **requestOptions:** `JobsClient.RequestOptions`

</details>

## schemas
<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">list</a>() -> ByteIt.ReadSavedSchemasListResponse</code></summary>

#### Description

Return all saved schemas owned by the authenticated user.

#### Usage

```typescript
await client.schemas.list();
```

#### Parameters

- **requestOptions:** `SchemasClient.RequestOptions`

</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">create</a>({ ...params }) -> ByteIt.ReadSavedSchemaResponse</code></summary>

#### Description

Persist a validated schema for the authenticated user.

#### Usage

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

#### Parameters

- **request:** `ByteIt.CreateSavedSchemaRequest`
- **requestOptions:** `SchemasClient.RequestOptions`

</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">get</a>({ ...params }) -> ByteIt.ReadSavedSchemaResponse</code></summary>

#### Description

Return a saved schema owned by the authenticated user.

#### Usage

```typescript
await client.schemas.get({
    name: "invoice"
});
```

#### Parameters

- **request:** `ByteIt.GetSchemasRequest`
- **requestOptions:** `SchemasClient.RequestOptions`

</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>

#### Description

Delete a saved schema owned by the authenticated user.

#### Usage

```typescript
await client.schemas.delete({
    name: "invoice"
});
```

#### Parameters

- **request:** `ByteIt.DeleteSchemasRequest`
- **requestOptions:** `SchemasClient.RequestOptions`

</details>

## DocumentClasses
<details><summary><code>client.documentClasses.<a href="/src/api/resources/documentClasses/client/Client.ts">list</a>() -> ByteIt.ReadDocumentClassesListResponse</code></summary>

#### Description

Return default catalogue entries plus the user's custom classes.

#### Usage

```typescript
await client.documentClasses.list();
```

#### Parameters

- **requestOptions:** `DocumentClassesClient.RequestOptions`

</details>

<details><summary><code>client.documentClasses.<a href="/src/api/resources/documentClasses/client/Client.ts">create</a>({ ...params }) -> ByteIt.ReadDocumentClassResponse</code></summary>

#### Description

Persist a new user-owned document class.

#### Usage

```typescript
await client.documentClasses.create({
    label: "invoice",
    description: "A bill requesting payment"
});
```

#### Parameters

- **request:** `ByteIt.CreateDocumentClassRequest`
- **requestOptions:** `DocumentClassesClient.RequestOptions`

</details>

<details><summary><code>client.documentClasses.<a href="/src/api/resources/documentClasses/client/Client.ts">get</a>({ ...params }) -> ByteIt.ReadDocumentClassResponse</code></summary>

#### Description

Return one document class by id.

#### Usage

```typescript
await client.documentClasses.get({
    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e"
});
```

#### Parameters

- **request:** `ByteIt.GetDocumentClassesRequest`
- **requestOptions:** `DocumentClassesClient.RequestOptions`

</details>

<details><summary><code>client.documentClasses.<a href="/src/api/resources/documentClasses/client/Client.ts">update</a>({ ...params }) -> ByteIt.ReadDocumentClassResponse</code></summary>

#### Description

Update an owned custom document class.

#### Usage

```typescript
await client.documentClasses.update({
    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
    description: "A bill or invoice requesting payment"
});
```

#### Parameters

- **request:** `ByteIt.UpdateDocumentClassRequest`
- **requestOptions:** `DocumentClassesClient.RequestOptions`

</details>

<details><summary><code>client.documentClasses.<a href="/src/api/resources/documentClasses/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>

#### Description

Delete an owned custom document class.

#### Usage

```typescript
await client.documentClasses.delete({
    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e"
});
```

#### Parameters

- **request:** `ByteIt.DeleteDocumentClassesRequest`
- **requestOptions:** `DocumentClassesClient.RequestOptions`

</details>

## ApiKeys
<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">create</a>({ ...params }) -> ByteIt.CreateApiKeyResponse</code></summary>

#### Description

Create a named API key. The raw key is returned only once, in this response; store it securely.

#### Usage

```typescript
await client.apiKeys.create({
    name: "ci-pipeline",
    expires_in_days: 90
});
```

#### Parameters

- **request:** `ByteIt.CreateApiKeyRequest`
- **requestOptions:** `ApiKeysClient.RequestOptions`

</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">delete</a>({ ...params }) -> ByteIt.ApiKeyResponse</code></summary>

#### Description

Revoke and delete one of your API keys by name.

#### Usage

```typescript
await client.apiKeys.delete({
    name: "ci-pipeline"
});
```

#### Parameters

- **request:** `ByteIt.DeleteApiKeysRequest`
- **requestOptions:** `ApiKeysClient.RequestOptions`

</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">list</a>() -> ByteIt.ReadApiKeysResponse</code></summary>

#### Description

List your API keys (metadata only; raw keys are never returned).

#### Usage

```typescript
await client.apiKeys.list();
```

#### Parameters

- **requestOptions:** `ApiKeysClient.RequestOptions`

</details>
