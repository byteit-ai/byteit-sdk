# Changelog — C# SDK

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
- The Python, TypeScript and C# SDKs live in one repository, one directory per
  language. Only the Python package is published to a registry. The Java, Go,
  Ruby, PHP, Swift and Rust directories hold a README on how to request the
  SDK (support@byteit.ai).
