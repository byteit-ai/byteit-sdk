# This file was auto-generated from the ByteIt API definition.

import typing

from .. import core
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.classification_class_entry_request import ClassificationClassEntryRequest
from ..types.create_classification_job_response import CreateClassificationJobResponse
from .raw_client import AsyncRawClassificationJobsClient, RawClassificationJobsClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ClassificationJobsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawClassificationJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawClassificationJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawClassificationJobsClient
        """
        return self._raw_client

    def create(
        self,
        *,
        file: core.File,
        classes: typing.Optional[typing.List[ClassificationClassEntryRequest]] = OMIT,
        nickname: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateClassificationJobResponse:
        """
        Create a user-requested classification job from an uploaded file.

        Parameters
        ----------
        file : core.File
            See core.File for more documentation

        classes : typing.Optional[typing.List[ClassificationClassEntryRequest]]
            Optional list of {label, description} objects. When omitted, system default classes are used. When provided, only these classes are used.

        nickname : typing.Optional[str]
            Optional nickname for easier job identification.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateClassificationJobResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt, ClassificationClassEntryRequest

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.classification_jobs.create(
            classes=[
                ClassificationClassEntryRequest(
                    label="invoice",
                    description="A bill requesting payment",
                ),
                ClassificationClassEntryRequest(
                    label="contract",
                    description="A signed agreement between parties",
                ),
            ],
            nickname="inbox-batch",
        )
        """
        _response = self._raw_client.create(
            file=file, classes=classes, nickname=nickname, request_options=request_options
        )
        return _response.data


class AsyncClassificationJobsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawClassificationJobsClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawClassificationJobsClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawClassificationJobsClient
        """
        return self._raw_client

    async def create(
        self,
        *,
        file: core.File,
        classes: typing.Optional[typing.List[ClassificationClassEntryRequest]] = OMIT,
        nickname: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateClassificationJobResponse:
        """
        Create a user-requested classification job from an uploaded file.

        Parameters
        ----------
        file : core.File
            See core.File for more documentation

        classes : typing.Optional[typing.List[ClassificationClassEntryRequest]]
            Optional list of {label, description} objects. When omitted, system default classes are used. When provided, only these classes are used.

        nickname : typing.Optional[str]
            Optional nickname for easier job identification.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateClassificationJobResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt, ClassificationClassEntryRequest

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.classification_jobs.create(
                classes=[
                    ClassificationClassEntryRequest(
                        label="invoice",
                        description="A bill requesting payment",
                    ),
                    ClassificationClassEntryRequest(
                        label="contract",
                        description="A signed agreement between parties",
                    ),
                ],
                nickname="inbox-batch",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(
            file=file, classes=classes, nickname=nickname, request_options=request_options
        )
        return _response.data
