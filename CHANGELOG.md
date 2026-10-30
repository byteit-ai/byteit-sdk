# Changelog

All notable changes to the ByteIt SDKs are documented here. Every SDK shares
the version of the ByteIt API contract.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html):
a **major** release may remove or rename something, a **minor** release only
adds, and a **patch** release only fixes. Anything scheduled for removal is
marked deprecated for at least one minor release first.

## [2.0.0] - 2026-10-30

### Added
- `client.jobs` works on any job by its ID, whatever its type: `get`, `list`
  (all types, filter with `job_type`), `update_nickname`, `download_result`,
  `download_input_file` and `get_status`. `get` and `list` return a `Job` that is
  a `ParseJob`, `ExtractJob`, `ClassificationJob` or `CustomJob`,
  told apart by `job_type`. Each type's `create` returns that same job.
- Every job type has `file_name`, `page_count` and `error_code` (each may be
  null; `error_code` uses the same codes as API errors).
- Every SDK directory is self-contained: its own README, ENDPOINTS.md (every
  operation with its exact call), CHANGELOG.md and LICENSE.
- Every SDK README explains the job lifecycle, what each job type's result
  contains, the accepted file types, the document and upload limits, every job
  field and every error code.
- `FILE_TOO_LARGE` (HTTP 413): an upload over the request size limit (50 MB,
  up to 25 files) fails with this typed error.

### Changed
- Rebuilt every SDK from the ByteIt API definition, with typed models, typed
  errors, automatic retries and timeouts. Each job type's namespace
  (`parse_jobs`, `extract_jobs`, `classification_jobs`, `custom_jobs`) only
  creates jobs; everything else works on any job through `client.jobs`
  (`download_result` returns each job type's own result; for custom jobs it can
  include the extras ZIP).
- Every SDK words a failed request the same way: the exception text reads
  `NotFoundError (404): <server message> [request_id=...]`, so a logged error
  says what went wrong and carries the request ID to quote to support. All
  SDKs retry 408, 429 and 5xx responses twice and time out after 60 seconds.
- Python: `ByteIt` (sync) and `AsyncByteIt` (asyncio) replace `ByteITClient`.
  There are no blocking calls: create a job, follow it with `jobs.get_status`
  and download it with `jobs.download_result`. `ExtractionSchema` is unchanged
  and produces the same schemas as 1.x.
- The Python, TypeScript and C# SDKs live in one repository, one directory per
  language. Only the Python package is published to a registry. The Java, Go,
  Ruby, PHP, Swift and Rust directories hold a README on how to request the
  SDK (support@byteit.ai).

### Removed
- Python: the 1.x `ByteITClient`, connectors and 1.x models. See the method
  mapping in the README to migrate.

## [1.3.0] - 2026-07-29

### Added
- `ParseType.HANDWRITTEN` (`"handwritten"`) parse mode for handwritten documents.

### Changed
- Renamed `ExtractionType` to `ParseType`.
- Renamed `ProcessingOptions.extraction_type` to `ProcessingOptions.parse_type`
  (API payload key is now `parse_type`).

## [1.2.0] - 2026-07-28

### Added
- Custom processing jobs: `custom_job()`, `custom_job_async()`,
  `get_custom_jobs()`, `get_custom_job_result()` and `CustomJob`, `CustomJobList`
  models.
- Saved schema management: `save_schema()`, `get_schemas()`, `delete_schema()`
  and `SavedSchema`, `SavedSchemaList` models.
- `parse_async()` now accepts a list of file paths (`list[str | Path]`) for
  multi-file batch submission with automatic packing and per-file failure
  reporting.
- `force_image_annotations` option on `ProcessingOptions`.
- `batch_request_delay` parameter on `ByteITClient` to pace consecutive uploads.
- `DocumentType` model with `is_supported_extension()` for file-type filtering.
- Internal modules extracted: `_http.py` (HTTP helpers), `_polling.py` (shared
  adaptive polling), `_rate_limit.py` (rate-limited submitter with backoff).
- CI: standalone `pytest-unit.yml` workflow; AdolfoBOT failure notification on
  publish.
- HTTP API examples in `docs/api-curl-typescript-examples.md`.

### Changed
- CI/CD workflows consolidated to call `scripts/release_preflight.py --ci` for
  all validation, removing inline release checks.
- Release preflight script refactored with shared helpers and clearer error
  messages.
- Rate-limit handling and polling logic extracted from `ByteITClient` into
  dedicated modules.

### Fixed
- `RateLimitError` now carries `retry_after_seconds` attribute from response
  headers.

### Removed
- `queue_for_batch` parameter from synchronous `parse()` (was async-only).
- Inline release validation logic from CI/CD workflows.
- Stale test file `rate_limit_test/run_batch_async_test.py`.

## [1.1.2] - 2026-07-08
- Fixed pruning of title fields in byteit schemas
- Improved error handling for downloading result

## [1.1.1] - 2026-06-05

### Fixed
- Restored `result_format` support for synchronous `parse()` so callers can
  explicitly choose the returned output format.

## [1.1.0] - 2026-05-06

### Breaking Changes
- Renamed parse-job public methods to explicit parse naming:
  - `get_jobs()` -> `get_parse_jobs()`
  - `get_job_details(job_id)` -> `get_parse_job_details(job_id)`
  - `get_job_result(job_id)` -> `get_parse_job_result(job_id)`
- Removed `result_format` parameter from `parse()` and `parse_async()`.
  Parse job submission now defaults to JSON internally.

### Added
- Structured extraction workflow for completed parse jobs:
  - `extract(parse_job_id, schema, output=None, extraction_complexity="medium")`
  - `extract_async(parse_job_id, schema, extraction_complexity="medium")`
  - `get_extract_jobs()`, `get_extract_job_details(job_id)`,
    `get_extract_job_result(job_id)`
- Optional download-time output selection for async parse results via
  `get_parse_job_result(job_id, result_format=...)`.
- New extraction domain models and schema support:
  - `ExtractJob`, `ExtractJobList`, `ExtractionSchema`
  - `ExtractionSchema` export via package `__init__` when available

### Changed
- Parse and extract operations now use dedicated endpoints under `/v1/jobs/`:
  - parse jobs under `parse-jobs`
  - extract jobs under `extract-jobs`
- `get_job_status(job_id)` continues using the generic lightweight status path
  while detail and result operations route to parse/extract-specific endpoints.
- `result_format` validation accepts both enum names and backend value tokens
  (for example `"excel"` and `"zip"`).
- Dependency set now includes `pydantic` for extraction schema flows.

## [1.0.1] - 2026-04-29

### Added
- Local release preflight checks for version consistency, changelog presence, and package integrity.
- Commit-title validation for release commits (`chore(release): X.Y.Z`) through pre-commit hooks.
- Release checklist skill document to standardize pre-commit and pre-publish verification.

## [1.0.0] - 2026-03-25

### Added
- `parse_async()` method for non-blocking document submission.
- `_submit_job()` internal helper to eliminate duplication between `parse()` and `parse_async()`.

## [0.1.2] - 2026-01-31

### Changed
- Processing migrated to top-enhanced production servers, reducing processing time by ~50%.

- Adaptive polling improved for smoother operation.

- Progress bar and output display enhanced for notebooks.

- Increased `DEFAULT_TIMEOUT` from 10 minutes to 30 minutes for large documents

## [0.1.1] - 2026-01-24

### Changed
- Increased `DEFAULT_TIMEOUT` from 30 seconds to 10 minutes for large documents
- Adaptive polling in `_wait_for_completion`: starts at 2s, increases to max 10s

### Added
- Progress logging during document parsing

## [0.1.0] - 2026-01-18

### Added
- Initial release of the ByteIT Python SDK
- `ByteITClient` for AI-powered document parsing
- Multiple output formats: text, JSON, Markdown, HTML
- Input connectors:
  - `LocalFileInputConnector`
  - `S3InputConnector`
- Output connector:
  - `LocalFileOutputConnector`
- Job management (list jobs, check status, download results)
- Support for PDF, Word, Excel, and other common document formats
- Batch processing support
- Environment variable configuration
- Custom base URL support (testing & staging)
- Python 3.8+ support
