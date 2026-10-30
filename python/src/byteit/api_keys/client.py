# This file was auto-generated from the ByteIt API definition.

import typing

from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.api_key_response import ApiKeyResponse
from ..types.create_api_key_response import CreateApiKeyResponse
from ..types.read_api_keys_response import ReadApiKeysResponse
from .raw_client import AsyncRawApiKeysClient, RawApiKeysClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ApiKeysClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawApiKeysClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawApiKeysClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawApiKeysClient
        """
        return self._raw_client

    def create(
        self,
        *,
        name: str,
        expires_in_days: typing.Optional[int] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateApiKeyResponse:
        """
        Create a named API key. The raw key is returned only once, in this response; store it securely.

        Parameters
        ----------
        name : str
            Unique name for the key (per user).

        expires_in_days : typing.Optional[int]
            Days until the key expires. Omit for a key that does not expire.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateApiKeyResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.api_keys.create(
            name="ci-pipeline",
            expires_in_days=90,
        )
        """
        _response = self._raw_client.create(name=name, expires_in_days=expires_in_days, request_options=request_options)
        return _response.data

    def delete(self, *, name: str, request_options: typing.Optional[RequestOptions] = None) -> ApiKeyResponse:
        """
        Revoke and delete one of your API keys by name.

        Parameters
        ----------
        name : str
            The unique key name to delete (per user).

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ApiKeyResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.api_keys.delete(
            name="ci-pipeline",
        )
        """
        _response = self._raw_client.delete(name=name, request_options=request_options)
        return _response.data

    def list(self, *, request_options: typing.Optional[RequestOptions] = None) -> ReadApiKeysResponse:
        """
        List your API keys (metadata only; raw keys are never returned).

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadApiKeysResponse
            Successful response

        Examples
        --------
        from byteit import ByteIt

        client = ByteIt(
            api_key="YOUR_API_KEY",
        )
        client.api_keys.list()
        """
        _response = self._raw_client.list(request_options=request_options)
        return _response.data


class AsyncApiKeysClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawApiKeysClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawApiKeysClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawApiKeysClient
        """
        return self._raw_client

    async def create(
        self,
        *,
        name: str,
        expires_in_days: typing.Optional[int] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateApiKeyResponse:
        """
        Create a named API key. The raw key is returned only once, in this response; store it securely.

        Parameters
        ----------
        name : str
            Unique name for the key (per user).

        expires_in_days : typing.Optional[int]
            Days until the key expires. Omit for a key that does not expire.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateApiKeyResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.api_keys.create(
                name="ci-pipeline",
                expires_in_days=90,
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.create(
            name=name, expires_in_days=expires_in_days, request_options=request_options
        )
        return _response.data

    async def delete(self, *, name: str, request_options: typing.Optional[RequestOptions] = None) -> ApiKeyResponse:
        """
        Revoke and delete one of your API keys by name.

        Parameters
        ----------
        name : str
            The unique key name to delete (per user).

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ApiKeyResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.api_keys.delete(
                name="ci-pipeline",
            )


        asyncio.run(main())
        """
        _response = await self._raw_client.delete(name=name, request_options=request_options)
        return _response.data

    async def list(self, *, request_options: typing.Optional[RequestOptions] = None) -> ReadApiKeysResponse:
        """
        List your API keys (metadata only; raw keys are never returned).

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ReadApiKeysResponse
            Successful response

        Examples
        --------
        import asyncio

        from byteit import AsyncByteIt

        client = AsyncByteIt(
            api_key="YOUR_API_KEY",
        )


        async def main() -> None:
            await client.api_keys.list()


        asyncio.run(main())
        """
        _response = await self._raw_client.list(request_options=request_options)
        return _response.data
