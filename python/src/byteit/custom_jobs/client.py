# This file was auto-generated from the ByteIt API definition.

import typing

from .. import core
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.create_custom_job_response import CreateCustomJobResponse
from .raw_client import AsyncRawCustomJobsClient, RawCustomJobsClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class CustomJobsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawCustomJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawCustomJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawCustomJobsClient
        """
        return self._raw_client

    def create(
        self,
        *,
        files: typing.Optional[typing.List[core.File]] = OMIT,
        schema: typing.Optional[typing.Dict[str, typing.Any]] = OMIT,
        user_prompt: typing.Optional[str] = OMIT,
        nickname: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateCustomJobResponse:
        """
        Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.

        Parameters
        ----------
        files : typing.Optional[typing.List[core.File]]
            See core.File for more documentation

        schema : typing.Optional[typing.Dict[str, typing.Any]]
            Optional JSON extraction schema for the custom job.

        user_prompt : typing.Optional[str]
            Optional user prompt appended to the custom job request.

        nickname : typing.Optional[str]
            Optional nickname for easier job identification.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateCustomJobResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.custom_jobs.create(
            user_prompt="Extract every line item with its VAT rate.",
            nickname="supplier-invoices",
        )
        """
        _response = self._raw_client.create(
            files=files, schema=schema, user_prompt=user_prompt, nickname=nickname, request_options=request_options
        )
        return _response.data


class AsyncCustomJobsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawCustomJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawCustomJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawCustomJobsClient
        """
        return self._raw_client

    async def create(
        self,
        *,
        files: typing.Optional[typing.List[core.File]] = OMIT,
        schema: typing.Optional[typing.Dict[str, typing.Any]] = OMIT,
        user_prompt: typing.Optional[str] = OMIT,
        nickname: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateCustomJobResponse:
        """
        Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.

        Parameters
        ----------
        files : typing.Optional[typing.List[core.File]]
            See core.File for more documentation

        schema : typing.Optional[typing.Dict[str, typing.Any]]
            Optional JSON extraction schema for the custom job.

        user_prompt : typing.Optional[str]
            Optional user prompt appended to the custom job request.

        nickname : typing.Optional[str]
            Optional nickname for easier job identification.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateCustomJobResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.custom_jobs.create(
                user_prompt="Extract every line item with its VAT rate.",
                nickname="supplier-invoices",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(
            files=files, schema=schema, user_prompt=user_prompt, nickname=nickname, request_options=request_options
        )
        return _response.data
