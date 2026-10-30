# This file was auto-generated from the ByteIt API definition.

import typing

from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.read_saved_schema_response import ReadSavedSchemaResponse
from ..types.read_saved_schemas_list_response import ReadSavedSchemasListResponse
from .raw_client import AsyncRawSchemasClient, RawSchemasClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class SchemasClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawSchemasClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawSchemasClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawSchemasClient
        """
        return self._raw_client

    def list(self, *, request_options: typing.Optional[RequestOptions] = None) -> ReadSavedSchemasListResponse:
        """
        Return all saved schemas owned by the authenticated user.

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadSavedSchemasListResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.schemas.list()
        """
        _response = self._raw_client.list(request_options=request_options)
        return _response.data

    def create(
        self,
        *,
        name: str,
        schema_json: typing.Dict[str, typing.Any],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ReadSavedSchemaResponse:
        """
        Persist a validated schema for the authenticated user.

        Parameters
        ----------
        name : str
            Unique name to save the schema under (per user).

        schema_json : typing.Dict[str, typing.Any]
            JSON extraction schema to save.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadSavedSchemaResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.schemas.create(
            name="invoice",
            schema_json={
                "type": "object",
                "properties": {
                    "invoice_number": {
                        "type": "string",
                        "description": "Invoice number",
                    },
                    "total": {"type": "string", "description": "Total amount due"},
                },
            },
        )
        """
        _response = self._raw_client.create(name=name, schema_json=schema_json, request_options=request_options)
        return _response.data

    def get(self, name: str, *, request_options: typing.Optional[RequestOptions] = None) -> ReadSavedSchemaResponse:
        """
        Return a saved schema owned by the authenticated user.

        Parameters
        ----------
        name : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadSavedSchemaResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.schemas.get(
            name="invoice",
        )
        """
        _response = self._raw_client.get(name, request_options=request_options)
        return _response.data

    def delete(self, name: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Delete a saved schema owned by the authenticated user.

        Parameters
        ----------
        name : str

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
        client.schemas.delete(
            name="invoice",
        )
        """
        _response = self._raw_client.delete(name, request_options=request_options)
        return _response.data


class AsyncSchemasClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawSchemasClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawSchemasClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawSchemasClient
        """
        return self._raw_client

    async def list(self, *, request_options: typing.Optional[RequestOptions] = None) -> ReadSavedSchemasListResponse:
        """
        Return all saved schemas owned by the authenticated user.

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadSavedSchemasListResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.schemas.list()


        asyncio.run(main())
        """
        _response = await self._raw_client.list(request_options=request_options)
        return _response.data

    async def create(
        self,
        *,
        name: str,
        schema_json: typing.Dict[str, typing.Any],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ReadSavedSchemaResponse:
        """
        Persist a validated schema for the authenticated user.

        Parameters
        ----------
        name : str
            Unique name to save the schema under (per user).

        schema_json : typing.Dict[str, typing.Any]
            JSON extraction schema to save.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadSavedSchemaResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.schemas.create(
                name="invoice",
                schema_json={
                    "type": "object",
                    "properties": {
                        "invoice_number": {
                            "type": "string",
                            "description": "Invoice number",
                        },
                        "total": {"type": "string", "description": "Total amount due"},
                    },
                },
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(name=name, schema_json=schema_json, request_options=request_options)
        return _response.data

    async def get(
        self, name: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ReadSavedSchemaResponse:
        """
        Return a saved schema owned by the authenticated user.

        Parameters
        ----------
        name : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadSavedSchemaResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.schemas.get(
                name="invoice",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.get(name, request_options=request_options)
        return _response.data

    async def delete(self, name: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Delete a saved schema owned by the authenticated user.

        Parameters
        ----------
        name : str

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
            await client.schemas.delete(
                name="invoice",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.delete(name, request_options=request_options)
        return _response.data
