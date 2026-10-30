# This file was auto-generated from the ByteIt API definition.

import typing

from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.read_document_class_response import ReadDocumentClassResponse
from ..types.read_document_classes_list_response import ReadDocumentClassesListResponse
from .raw_client import AsyncRawDocumentClassesClient, RawDocumentClassesClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class DocumentClassesClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawDocumentClassesClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawDocumentClassesClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawDocumentClassesClient
        """
        return self._raw_client

    def list(self, *, request_options: typing.Optional[RequestOptions] = None) -> ReadDocumentClassesListResponse:
        """
        Return default catalogue entries plus the user's custom classes.

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassesListResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.document_classes.list()
        """
        _response = self._raw_client.list(request_options=request_options)
        return _response.data

    def create(
        self, *, label: str, description: str, request_options: typing.Optional[RequestOptions] = None
    ) -> ReadDocumentClassResponse:
        """
        Persist a new user-owned document class.

        Parameters
        ----------
        label : str
            Class label returned by the classifier.

        description : str
            Short description of when this class applies.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.document_classes.create(
            label="invoice",
            description="A bill requesting payment",
        )
        """
        _response = self._raw_client.create(label=label, description=description, request_options=request_options)
        return _response.data

    def get(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> ReadDocumentClassResponse:
        """
        Return one document class by id.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.document_classes.get(
            id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
        )
        """
        _response = self._raw_client.get(id, request_options=request_options)
        return _response.data

    def update(
        self,
        id: str,
        *,
        label: typing.Optional[str] = OMIT,
        description: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ReadDocumentClassResponse:
        """
        Update an owned custom document class.

        Parameters
        ----------
        id : str

        label : typing.Optional[str]
            Class label returned by the classifier.

        description : typing.Optional[str]
            Short description of when this class applies.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.document_classes.update(
            id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            description="A bill or invoice requesting payment",
        )
        """
        _response = self._raw_client.update(id, label=label, description=description, request_options=request_options)
        return _response.data

    def delete(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Delete an owned custom document class.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.document_classes.delete(
            id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
        )
        """
        _response = self._raw_client.delete(id, request_options=request_options)
        return _response.data


class AsyncDocumentClassesClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawDocumentClassesClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawDocumentClassesClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawDocumentClassesClient
        """
        return self._raw_client

    async def list(self, *, request_options: typing.Optional[RequestOptions] = None) -> ReadDocumentClassesListResponse:
        """
        Return default catalogue entries plus the user's custom classes.

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassesListResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.document_classes.list()


        asyncio.run(main())
        """
        _response = await self._raw_client.list(request_options=request_options)
        return _response.data

    async def create(
        self, *, label: str, description: str, request_options: typing.Optional[RequestOptions] = None
    ) -> ReadDocumentClassResponse:
        """
        Persist a new user-owned document class.

        Parameters
        ----------
        label : str
            Class label returned by the classifier.

        description : str
            Short description of when this class applies.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.document_classes.create(
                label="invoice",
                description="A bill requesting payment",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(label=label, description=description, request_options=request_options)
        return _response.data

    async def get(
        self, id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ReadDocumentClassResponse:
        """
        Return one document class by id.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.document_classes.get(
                id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.get(id, request_options=request_options)
        return _response.data

    async def update(
        self,
        id: str,
        *,
        label: typing.Optional[str] = OMIT,
        description: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ReadDocumentClassResponse:
        """
        Update an owned custom document class.

        Parameters
        ----------
        id : str

        label : typing.Optional[str]
            Class label returned by the classifier.

        description : typing.Optional[str]
            Short description of when this class applies.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadDocumentClassResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.document_classes.update(
                id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
                description="A bill or invoice requesting payment",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.update(
            id, label=label, description=description, request_options=request_options
        )
        return _response.data

    async def delete(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Delete an owned custom document class.

        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.document_classes.delete(
                id="2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.delete(id, request_options=request_options)
        return _response.data
