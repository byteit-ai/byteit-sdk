# This file was auto-generated from the ByteIt API definition.

import typing

from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.create_extract_job_response import CreateExtractJobResponse
from ..types.extraction_complexity_enum import ExtractionComplexityEnum
from .raw_client import AsyncRawExtractJobsClient, RawExtractJobsClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ExtractJobsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawExtractJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawExtractJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawExtractJobsClient
        """
        return self._raw_client

    def create(
        self,
        *,
        parse_job_id: str,
        schema: typing.Dict[str, typing.Any],
        extraction_complexity: typing.Optional[ExtractionComplexityEnum] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateExtractJobResponse:
        """
        Create an extract job from an existing parse job.

        Parameters
        ----------
        parse_job_id : str
            Public ID of the completed parse job to extract data from.

        schema : typing.Dict[str, typing.Any]
            JSON extraction schema for the extract job.

        extraction_complexity : typing.Optional[ExtractionComplexityEnum]
            Complexity tier for the extraction: low, medium, or high.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateExtractJobResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.extract_jobs.create(
            parse_job_id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            schema={
                "type": "object",
                "properties": {
                    "invoice_number": {
                        "type": "string",
                        "description": "Invoice number",
                    },
                    "total": {"type": "string", "description": "Total amount due"},
                },
            },
            extraction_complexity="medium",
        )
        """
        _response = self._raw_client.create(
            parse_job_id=parse_job_id,
            schema=schema,
            extraction_complexity=extraction_complexity,
            request_options=request_options,
        )
        return _response.data


class AsyncExtractJobsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawExtractJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawExtractJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawExtractJobsClient
        """
        return self._raw_client

    async def create(
        self,
        *,
        parse_job_id: str,
        schema: typing.Dict[str, typing.Any],
        extraction_complexity: typing.Optional[ExtractionComplexityEnum] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateExtractJobResponse:
        """
        Create an extract job from an existing parse job.

        Parameters
        ----------
        parse_job_id : str
            Public ID of the completed parse job to extract data from.

        schema : typing.Dict[str, typing.Any]
            JSON extraction schema for the extract job.

        extraction_complexity : typing.Optional[ExtractionComplexityEnum]
            Complexity tier for the extraction: low, medium, or high.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateExtractJobResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.extract_jobs.create(
                parse_job_id="3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
                schema={
                    "type": "object",
                    "properties": {
                        "invoice_number": {
                            "type": "string",
                            "description": "Invoice number",
                        },
                        "total": {"type": "string", "description": "Total amount due"},
                    },
                },
                extraction_complexity="medium",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(
            parse_job_id=parse_job_id,
            schema=schema,
            extraction_complexity=extraction_complexity,
            request_options=request_options,
        )
        return _response.data
