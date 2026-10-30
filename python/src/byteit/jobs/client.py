# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.job import Job
from ..types.read_job_status_response import ReadJobStatusResponse
from ..types.read_jobs_list_response import ReadJobsListResponse
from .raw_client import AsyncRawJobsClient, RawJobsClient
from .types.download_result_jobs_request_output_format import DownloadResultJobsRequestOutputFormat
from .types.list_jobs_request_job_type import ListJobsRequestJobType

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class JobsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawJobsClient
        """
        return self._raw_client

    def list(
        self,
        *,
        before: typing.Optional[dt.datetime] = None,
        job_type: typing.Optional[ListJobsRequestJobType] = None,
        limit: typing.Optional[int] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ReadJobsListResponse:
        """
        List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.

        Parameters
        ----------
        before : typing.Optional[dt.datetime]
            Cursor for the next page: pass the `created_at` of the last job you received to get older jobs (ISO 8601).

        job_type : typing.Optional[ListJobsRequestJobType]
            Only list jobs of this type.

        limit : typing.Optional[int]
            Maximum number of jobs to return (default 50).

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadJobsListResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.jobs.list(
            job_type="parse",
            limit=20,
        )
        """
        _response = self._raw_client.list(
            before=before, job_type=job_type, limit=limit, request_options=request_options
        )
        return _response.data

    def get(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> Job:
        """
        Retrieve any of your jobs by its ID. The response shape depends on `job_type`.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Job
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.jobs.get(
            id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        )
        """
        _response = self._raw_client.get(id, request_options=request_options)
        return _response.data

    def update_nickname(
        self, id: str, *, nickname: typing.Optional[str] = OMIT, request_options: typing.Optional[RequestOptions] = None
    ) -> Job:
        """
        Set or clear the display name of any of your jobs.

        Parameters
        ----------
        id : str

        nickname : typing.Optional[str]
            Optional display nickname for the job.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Job
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.jobs.update_nickname(
            id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            nickname="invoice-march-final",
        )
        """
        _response = self._raw_client.update_nickname(id, nickname=nickname, request_options=request_options)
        return _response.data

    def download_input_file(
        self, id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Iterator[bytes]:
        """
        Download the original input file of a job by its public ID.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration. You can pass in configuration such as `chunk_size`, and more to customize the request and response.

        Returns
        -------
        typing.Iterator[bytes]
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.jobs.download_input_file(
            id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        )
        """
        with self._raw_client.download_input_file(id, request_options=request_options) as r:
            yield from r.data

    def download_result(
        self,
        id: str,
        *,
        include_extras: typing.Optional[bool] = None,
        output_format: typing.Optional[DownloadResultJobsRequestOutputFormat] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Iterator[bytes]:
        """
        Download the result of a completed job; what you get depends on its `job_type`:

        - `parse`: the parsed document (in `output_format` when given);
        - `extract`: JSON shaped by your extraction schema;
        - `classification`: JSON with the `document_class` and the classified `pages`;
        - `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.

        Responds with 409 while the job is still processing.

        Parameters
        ----------
        id : str

        include_extras : typing.Optional[bool]
            Custom jobs only: return one ZIP with the result and the job's extra files (under `extras/`) instead of the result alone.

        output_format : typing.Optional[DownloadResultJobsRequestOutputFormat]
            Optional output format override. When set, the result file with the requested extension is retrieved instead of the default. Case-insensitive.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration. You can pass in configuration such as `chunk_size`, and more to customize the request and response.

        Returns
        -------
        typing.Iterator[bytes]
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.jobs.download_result(
            id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        )
        """
        with self._raw_client.download_result(
            id, include_extras=include_extras, output_format=output_format, request_options=request_options
        ) as r:
            yield from r.data

    def get_status(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> ReadJobStatusResponse:
        """
        Return job processing status with estimated progress.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadJobStatusResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.jobs.get_status(
            id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        )
        """
        _response = self._raw_client.get_status(id, request_options=request_options)
        return _response.data


class AsyncJobsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawJobsClient
        """
        return self._raw_client

    async def list(
        self,
        *,
        before: typing.Optional[dt.datetime] = None,
        job_type: typing.Optional[ListJobsRequestJobType] = None,
        limit: typing.Optional[int] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ReadJobsListResponse:
        """
        List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.

        Parameters
        ----------
        before : typing.Optional[dt.datetime]
            Cursor for the next page: pass the `created_at` of the last job you received to get older jobs (ISO 8601).

        job_type : typing.Optional[ListJobsRequestJobType]
            Only list jobs of this type.

        limit : typing.Optional[int]
            Maximum number of jobs to return (default 50).

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadJobsListResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.jobs.list(
                job_type="parse",
                limit=20,
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.list(
            before=before, job_type=job_type, limit=limit, request_options=request_options
        )
        return _response.data

    async def get(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> Job:
        """
        Retrieve any of your jobs by its ID. The response shape depends on `job_type`.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Job
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.jobs.get(
                id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.get(id, request_options=request_options)
        return _response.data

    async def update_nickname(
        self, id: str, *, nickname: typing.Optional[str] = OMIT, request_options: typing.Optional[RequestOptions] = None
    ) -> Job:
        """
        Set or clear the display name of any of your jobs.

        Parameters
        ----------
        id : str

        nickname : typing.Optional[str]
            Optional display nickname for the job.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Job
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.jobs.update_nickname(
                id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
                nickname="invoice-march-final",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.update_nickname(id, nickname=nickname, request_options=request_options)
        return _response.data

    async def download_input_file(
        self, id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.AsyncIterator[bytes]:
        """
        Download the original input file of a job by its public ID.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration. You can pass in configuration such as `chunk_size`, and more to customize the request and response.

        Returns
        -------
        typing.AsyncIterator[bytes]
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.jobs.download_input_file(
                id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            )


        asyncio.run(main())
        """
        async with self._raw_client.download_input_file(id, request_options=request_options) as r:
            async for _chunk in r.data:
                yield _chunk

    async def download_result(
        self,
        id: str,
        *,
        include_extras: typing.Optional[bool] = None,
        output_format: typing.Optional[DownloadResultJobsRequestOutputFormat] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.AsyncIterator[bytes]:
        """
        Download the result of a completed job; what you get depends on its `job_type`:

        - `parse`: the parsed document (in `output_format` when given);
        - `extract`: JSON shaped by your extraction schema;
        - `classification`: JSON with the `document_class` and the classified `pages`;
        - `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.

        Responds with 409 while the job is still processing.

        Parameters
        ----------
        id : str

        include_extras : typing.Optional[bool]
            Custom jobs only: return one ZIP with the result and the job's extra files (under `extras/`) instead of the result alone.

        output_format : typing.Optional[DownloadResultJobsRequestOutputFormat]
            Optional output format override. When set, the result file with the requested extension is retrieved instead of the default. Case-insensitive.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration. You can pass in configuration such as `chunk_size`, and more to customize the request and response.

        Returns
        -------
        typing.AsyncIterator[bytes]
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.jobs.download_result(
                id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            )


        asyncio.run(main())
        """
        async with self._raw_client.download_result(
            id, include_extras=include_extras, output_format=output_format, request_options=request_options
        ) as r:
            async for _chunk in r.data:
                yield _chunk

    async def get_status(
        self, id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ReadJobStatusResponse:
        """
        Return job processing status with estimated progress.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadJobStatusResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.jobs.get_status(
                id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.get_status(id, request_options=request_options)
        return _response.data
