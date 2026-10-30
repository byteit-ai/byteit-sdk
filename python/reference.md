# Reference
## ParseJobs
<details><summary><code>client.parse_jobs.<a href="src/byteit/parse_jobs/client.py">create</a>(...) -> CreateParseJobResponse</code></summary>

#### Description

Create a parse job entry for document processing.

#### Usage

```python
with open("invoice.pdf", "rb") as file:
    client.parse_jobs.create(file=file, nickname="invoice-march", output_format="md")
```

#### Parameters

- **file:** `typing.Optional[core.File]` — Document to parse (localfile connector). Use 'files' for several.
- **files:** `typing.Optional[typing.List[core.File]]` — Upload up to 25 files in one request (localfile connector only). Mutually exclusive with 'file'.
- **nickname:** `typing.Optional[str]` — Optional nickname for easier job identification.
- **output_format:** `typing.Optional[OutputFormatEnum]` — Output format for the result: 'txt', 'json', 'html', 'md', 'zip'
- **input_connector:** `typing.Optional[InputConnectorEnum]` — Where to read the document from: 'localfile' (upload) or 's3'.
- **input_connection_data:** `typing.Optional[InputConnectionDataRequest]` — Configuration for the input connector. For localfile: leave empty.
- **output_connector:** `typing.Optional[OutputConnectorEnum]` — Where to deliver the result: 's3' (your bucket, see output_connection_data). Leave empty to download it from ByteIt.
- **output_connection_data:** `typing.Optional[OutputConnectionDataRequest]` — Configuration for the output connector.
- **processing_options:** `typing.Optional[ProcessingOptionsRequest]` — Processing options for the job.
- **queue_for_batch:** `typing.Optional[bool]` — When true, the job is accepted and held in queued status instead of starting processing immediately.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## ExtractJobs
<details><summary><code>client.extract_jobs.<a href="src/byteit/extract_jobs/client.py">create</a>(...) -> CreateExtractJobResponse</code></summary>

#### Description

Create an extract job from an existing parse job.

#### Usage

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

#### Parameters

- **parse_job_id:** `str` — Public ID of the completed parse job to extract data from.
- **schema:** `typing.Dict[str, typing.Any]` — JSON extraction schema for the extract job.
- **extraction_complexity:** `typing.Optional[ExtractionComplexityEnum]` — Complexity tier for the extraction: low, medium, or high.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## ClassificationJobs
<details><summary><code>client.classification_jobs.<a href="src/byteit/classification_jobs/client.py">create</a>(...) -> CreateClassificationJobResponse</code></summary>

#### Description

Create a user-requested classification job from an uploaded file.

#### Usage

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

#### Parameters

- **file:** `core.File` — Document to classify.
- **classes:** `typing.Optional[typing.List[ClassificationClassEntryRequest]]` — Optional list of {label, description} objects. When omitted, system default classes are used. When provided, only these classes are used.
- **nickname:** `typing.Optional[str]` — Optional nickname for easier job identification.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## CustomJobs
<details><summary><code>client.custom_jobs.<a href="src/byteit/custom_jobs/client.py">create</a>(...) -> CreateCustomJobResponse</code></summary>

#### Description

Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.

#### Usage

```python
with open("invoice-1.pdf", "rb") as first, open("invoice-2.pdf", "rb") as second:
    client.custom_jobs.create(
        files=[first, second],
        user_prompt="Extract every line item with its VAT rate.",
        nickname="supplier-invoices",
    )
```

#### Parameters

- **files:** `typing.Optional[typing.List[core.File]]` — Upload up to 25 documents for one custom job.
- **schema:** `typing.Optional[typing.Dict[str, typing.Any]]` — Optional JSON extraction schema for the custom job.
- **user_prompt:** `typing.Optional[str]` — Optional user prompt appended to the custom job request.
- **nickname:** `typing.Optional[str]` — Optional nickname for easier job identification.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## jobs
<details><summary><code>client.jobs.<a href="src/byteit/jobs/client.py">list</a>(...) -> ReadJobsListResponse</code></summary>

#### Description

List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.

#### Usage

```python
client.jobs.list(
    job_type="parse",
    limit=20,
)
```

#### Parameters

- **before:** `typing.Optional[datetime.datetime]` — Cursor for the next page: pass the `created_at` of the last job you received to get older jobs (ISO 8601).
- **job_type:** `typing.Optional[ListJobsRequestJobType]` — Only list jobs of this type.
- **limit:** `typing.Optional[int]` — Maximum number of jobs to return (default 50).
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.jobs.<a href="src/byteit/jobs/client.py">get</a>(...) -> Job</code></summary>

#### Description

Retrieve any of your jobs by its ID. The response shape depends on `job_type`.

#### Usage

```python
client.jobs.get(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

#### Parameters

- **id:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.jobs.<a href="src/byteit/jobs/client.py">update_nickname</a>(...) -> Job</code></summary>

#### Description

Set or clear the display name of any of your jobs.

#### Usage

```python
client.jobs.update_nickname(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
    nickname="invoice-march-final",
)
```

#### Parameters

- **id:** `str`
- **nickname:** `typing.Optional[str]` — Optional display nickname for the job.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.jobs.<a href="src/byteit/jobs/client.py">download_input_file</a>(...) -> typing.Iterator[bytes]</code></summary>

#### Description

Download the original input file of a job by its public ID.

#### Usage

```python
client.jobs.download_input_file(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

#### Parameters

- **id:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.jobs.<a href="src/byteit/jobs/client.py">download_result</a>(...) -> typing.Iterator[bytes]</code></summary>

#### Description

Download the result of a completed job; what you get depends on its `job_type`:

- `parse`: the parsed document (in `output_format` when given);
- `extract`: JSON shaped by your extraction schema;
- `classification`: JSON with the `document_class` and the classified `pages`;
- `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.

Responds with 409 while the job is still processing.

#### Usage

```python
client.jobs.download_result(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

#### Parameters

- **id:** `str`
- **include_extras:** `typing.Optional[bool]` — Custom jobs only: return one ZIP with the result and the job's extra files (under `extras/`) instead of the result alone.
- **output_format:** `typing.Optional[DownloadResultJobsRequestOutputFormat]` — Optional output format override. When set, the result file with the requested extension is retrieved instead of the default. Case-insensitive.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.jobs.<a href="src/byteit/jobs/client.py">get_status</a>(...) -> ReadJobStatusResponse</code></summary>

#### Description

Return job processing status with estimated progress.

#### Usage

```python
client.jobs.get_status(
    id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
)
```

#### Parameters

- **id:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## schemas
<details><summary><code>client.schemas.<a href="src/byteit/schemas/client.py">list</a>() -> ReadSavedSchemasListResponse</code></summary>

#### Description

Return all saved schemas owned by the authenticated user.

#### Usage

```python
client.schemas.list()
```

#### Parameters

- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.schemas.<a href="src/byteit/schemas/client.py">create</a>(...) -> ReadSavedSchemaResponse</code></summary>

#### Description

Persist a validated schema for the authenticated user.

#### Usage

```python
client.schemas.create(
    name="invoice",
    schema_json={
        "type": "object",
        "properties": {"invoice_number": {"type": "string", "description": "Invoice number"}, "total": {"type": "string", "description": "Total amount due"}}
    },
)
```

#### Parameters

- **name:** `str` — Unique name to save the schema under (per user).
- **schema_json:** `typing.Dict[str, typing.Any]` — JSON extraction schema to save.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.schemas.<a href="src/byteit/schemas/client.py">get</a>(...) -> ReadSavedSchemaResponse</code></summary>

#### Description

Return a saved schema owned by the authenticated user.

#### Usage

```python
client.schemas.get(
    name="invoice",
)
```

#### Parameters

- **name:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.schemas.<a href="src/byteit/schemas/client.py">delete</a>(...)</code></summary>

#### Description

Delete a saved schema owned by the authenticated user.

#### Usage

```python
client.schemas.delete(
    name="invoice",
)
```

#### Parameters

- **name:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## DocumentClasses
<details><summary><code>client.document_classes.<a href="src/byteit/document_classes/client.py">list</a>() -> ReadDocumentClassesListResponse</code></summary>

#### Description

Return default catalogue entries plus the user's custom classes.

#### Usage

```python
client.document_classes.list()
```

#### Parameters

- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.document_classes.<a href="src/byteit/document_classes/client.py">create</a>(...) -> ReadDocumentClassResponse</code></summary>

#### Description

Persist a new user-owned document class.

#### Usage

```python
client.document_classes.create(
    label="invoice",
    description="A bill requesting payment",
)
```

#### Parameters

- **label:** `str` — Class label returned by the classifier.
- **description:** `str` — Short description of when this class applies.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.document_classes.<a href="src/byteit/document_classes/client.py">get</a>(...) -> ReadDocumentClassResponse</code></summary>

#### Description

Return one document class by id.

#### Usage

```python
client.document_classes.get(
    id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
)
```

#### Parameters

- **id:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.document_classes.<a href="src/byteit/document_classes/client.py">update</a>(...) -> ReadDocumentClassResponse</code></summary>

#### Description

Update an owned custom document class.

#### Usage

```python
client.document_classes.update(
    id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
    description="A bill or invoice requesting payment",
)
```

#### Parameters

- **id:** `str`
- **label:** `typing.Optional[str]` — Class label returned by the classifier.
- **description:** `typing.Optional[str]` — Short description of when this class applies.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.document_classes.<a href="src/byteit/document_classes/client.py">delete</a>(...)</code></summary>

#### Description

Delete an owned custom document class.

#### Usage

```python
client.document_classes.delete(
    id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
)
```

#### Parameters

- **id:** `str`
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

## ApiKeys
<details><summary><code>client.api_keys.<a href="src/byteit/api_keys/client.py">create</a>(...) -> CreateApiKeyResponse</code></summary>

#### Description

Create a named API key. The raw key is returned only once, in this response; store it securely.

#### Usage

```python
client.api_keys.create(
    name="ci-pipeline",
    expires_in_days=90,
)
```

#### Parameters

- **name:** `str` — Unique name for the key (per user).
- **expires_in_days:** `typing.Optional[int]` — Days until the key expires. Omit for a key that does not expire.
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.api_keys.<a href="src/byteit/api_keys/client.py">delete</a>(...) -> ApiKeyResponse</code></summary>

#### Description

Revoke and delete one of your API keys by name.

#### Usage

```python
client.api_keys.delete(
    name="ci-pipeline",
)
```

#### Parameters

- **name:** `str` — The unique key name to delete (per user).
- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>

<details><summary><code>client.api_keys.<a href="src/byteit/api_keys/client.py">list</a>() -> ReadApiKeysResponse</code></summary>

#### Description

List your API keys (metadata only; raw keys are never returned).

#### Usage

```python
client.api_keys.list()
```

#### Parameters

- **request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.

</details>
