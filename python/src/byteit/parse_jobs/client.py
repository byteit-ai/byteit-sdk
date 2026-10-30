# This file was auto-generated from the ByteIt API definition.

import typing

from .. import core
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.create_parse_job_response import CreateParseJobResponse
from ..types.input_connection_data_request import InputConnectionDataRequest
from ..types.input_connector_enum import InputConnectorEnum
from ..types.output_connection_data_request import OutputConnectionDataRequest
from ..types.output_connector_enum import OutputConnectorEnum
from ..types.output_format_enum import OutputFormatEnum
from ..types.processing_options_request import ProcessingOptionsRequest
from .raw_client import AsyncRawParseJobsClient, RawParseJobsClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ParseJobsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawParseJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawParseJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawParseJobsClient
        """
        return self._raw_client

    def create(
        self,
        *,
        file: typing.Optional[core.File] = OMIT,
        files: typing.Optional[typing.List[core.File]] = OMIT,
        nickname: typing.Optional[str] = OMIT,
        output_format: typing.Optional[OutputFormatEnum] = OMIT,
        input_connector: typing.Optional[InputConnectorEnum] = OMIT,
        input_connection_data: typing.Optional[InputConnectionDataRequest] = OMIT,
        output_connector: typing.Optional[OutputConnectorEnum] = OMIT,
        output_connection_data: typing.Optional[OutputConnectionDataRequest] = OMIT,
        processing_options: typing.Optional[ProcessingOptionsRequest] = OMIT,
        queue_for_batch: typing.Optional[bool] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateParseJobResponse:
        """
        Create a parse job entry for document processing.

        Parameters
        ----------
        file : typing.Optional[core.File]
            See core.File for more documentation

        files : typing.Optional[typing.List[core.File]]
            See core.File for more documentation

        nickname : typing.Optional[str]
            Optional nickname for easier job identification.

        output_format : typing.Optional[OutputFormatEnum]
            Output format for the result: 'txt', 'json', 'html', 'md', 'zip'

        input_connector : typing.Optional[InputConnectorEnum]
            Where to read the document from: 'localfile' (upload) or 's3'.

        input_connection_data : typing.Optional[InputConnectionDataRequest]
            Configuration for the input connector. For localfile: leave empty.

        output_connector : typing.Optional[OutputConnectorEnum]
            Where to deliver the result: 's3' (your bucket, see output_connection_data). Leave empty to download it from ByteIt.

        output_connection_data : typing.Optional[OutputConnectionDataRequest]
            Configuration for the output connector.

        processing_options : typing.Optional[ProcessingOptionsRequest]
            Processing options for the job.

        queue_for_batch : typing.Optional[bool]
            When true, the job is accepted and held in queued status instead of starting processing immediately.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateParseJobResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.parse_jobs.create(
            nickname="invoice-march",
            output_format="md",
        )
        """
        _response = self._raw_client.create(
            file=file,
            files=files,
            nickname=nickname,
            output_format=output_format,
            input_connector=input_connector,
            input_connection_data=input_connection_data,
            output_connector=output_connector,
            output_connection_data=output_connection_data,
            processing_options=processing_options,
            queue_for_batch=queue_for_batch,
            request_options=request_options,
        )
        return _response.data


class AsyncParseJobsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawParseJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawParseJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawParseJobsClient
        """
        return self._raw_client

    async def create(
        self,
        *,
        file: typing.Optional[core.File] = OMIT,
        files: typing.Optional[typing.List[core.File]] = OMIT,
        nickname: typing.Optional[str] = OMIT,
        output_format: typing.Optional[OutputFormatEnum] = OMIT,
        input_connector: typing.Optional[InputConnectorEnum] = OMIT,
        input_connection_data: typing.Optional[InputConnectionDataRequest] = OMIT,
        output_connector: typing.Optional[OutputConnectorEnum] = OMIT,
        output_connection_data: typing.Optional[OutputConnectionDataRequest] = OMIT,
        processing_options: typing.Optional[ProcessingOptionsRequest] = OMIT,
        queue_for_batch: typing.Optional[bool] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateParseJobResponse:
        """
        Create a parse job entry for document processing.

        Parameters
        ----------
        file : typing.Optional[core.File]
            See core.File for more documentation

        files : typing.Optional[typing.List[core.File]]
            See core.File for more documentation

        nickname : typing.Optional[str]
            Optional nickname for easier job identification.

        output_format : typing.Optional[OutputFormatEnum]
            Output format for the result: 'txt', 'json', 'html', 'md', 'zip'

        input_connector : typing.Optional[InputConnectorEnum]
            Where to read the document from: 'localfile' (upload) or 's3'.

        input_connection_data : typing.Optional[InputConnectionDataRequest]
            Configuration for the input connector. For localfile: leave empty.

        output_connector : typing.Optional[OutputConnectorEnum]
            Where to deliver the result: 's3' (your bucket, see output_connection_data). Leave empty to download it from ByteIt.

        output_connection_data : typing.Optional[OutputConnectionDataRequest]
            Configuration for the output connector.

        processing_options : typing.Optional[ProcessingOptionsRequest]
            Processing options for the job.

        queue_for_batch : typing.Optional[bool]
            When true, the job is accepted and held in queued status instead of starting processing immediately.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateParseJobResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.parse_jobs.create(
                nickname="invoice-march",
                output_format="md",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(
            file=file,
            files=files,
            nickname=nickname,
            output_format=output_format,
            input_connector=input_connector,
            input_connection_data=input_connection_data,
            output_connector=output_connector,
            output_connection_data=output_connection_data,
            processing_options=processing_options,
            queue_for_batch=queue_for_batch,
            request_options=request_options,
        )
        return _response.data
