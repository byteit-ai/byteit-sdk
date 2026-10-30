# ByteIt SDKs

Official client libraries for the [ByteIt](https://byteit.ai) API: parse,
extract, classify and process documents.

| Language | Directory | Install |
|---|---|---|
| Python | [`python/`](python) | `pip install byteit` |
| TypeScript / JavaScript | [`typescript/`](typescript) | source only for now |
| C# / .NET | [`dotnet/`](dotnet) | source only for now |

Only the Python package is published to a registry today. The TypeScript and
C# SDKs are released here as source, tested on every release, and will move to
their registries without any API change.

Need another language (Java, Go, Ruby, PHP, Swift, Rust)? Each of those
directories explains how to request it: write to
[support@byteit.ai](mailto:support@byteit.ai).

## Getting started

Create an API key in the ByteIt dashboard and follow the README of your
language. Every SDK exposes the same operations under the same names:

```python
import time

from byteit import ByteIt

client = ByteIt(api_key="YOUR_API_KEY")

with open("invoice.pdf", "rb") as file:
    job = client.parse_jobs.create(file=file).parse_job
assert job is not None  # one `file` gives `parse_job`; `files` give `parse_jobs`
while client.jobs.get_status(id=job.job_id).processing_status not in ("completed", "failed"):
    time.sleep(2)
text = b"".join(client.jobs.download_result(id=job.job_id))
```

[ENDPOINTS.md](ENDPOINTS.md) lists every operation with its HTTP route and its
exact call in each language. [CHANGELOG.md](CHANGELOG.md) lists what changed.

## Jobs

Everything the API does runs as a job. Create one with its type's `create`
(`parse_jobs`, `extract_jobs`, `classification_jobs`, `custom_jobs`), then work
with it through `jobs`, whatever its type (names shown in Python; every SDK has
the same ones in its own casing):

| Call | What you get |
|---|---|
| `jobs.get(id)` | The job. Its fields depend on its `job_type`. |
| `jobs.list()` | Your jobs of every type, newest first (filter with `job_type`). |
| `jobs.get_status(id)` | Progress while it runs, the error if it failed. |
| `jobs.download_result(id)` | The result: the parsed document, the extracted JSON, the classification JSON, or the custom job's result (`include_extras=True` adds its extra files in one ZIP). |
| `jobs.download_input_file(id)` | The original document. |
| `jobs.update_nickname(id, ...)` | Rename it. |

### Following a job

Jobs run in the background. Poll `jobs.get_status(id)` every few seconds until
its `processing_status` is `completed` (then download the result) or `failed`
(its `message` says why). Every SDK's README shows the loop in its language.

### Custom jobs

Parse, extract and classification jobs cover most documents. When a need goes
further (a specific document family, output layout or business rule), we build
a custom job for it on the same platform and enable it for your account; you
then run it with `custom_jobs.create` and manage it like any other job. Contact
ByteIt to discuss yours.

## Versioning

One version number covers the API, its error codes and every SDK
(`MAJOR.MINOR.PATCH`, see [`VERSION`](VERSION)):

- **minor**: backwards-compatible additions and fixes. Deprecated features keep
  working and are announced in the changelog at least one minor release before
  removal.
- **major**: the only release that may remove or change existing behavior,
  with a migration guide.

## Contributing

These SDKs are generated from the ByteIt API definition, so code changes made
here would be overwritten by the next release. See
[CONTRIBUTING.md](CONTRIBUTING.md) for how to report bugs and request features.

## License

[Apache-2.0](LICENSE)
