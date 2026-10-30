# This file was auto-generated from the ByteIt API definition.

from __future__ import annotations

import typing

import httpx
from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .core.logging import LogConfig, Logger
from .environment import ByteItEnvironment

if typing.TYPE_CHECKING:
    from .api_keys.client import ApiKeysClient, AsyncApiKeysClient
    from .classification_jobs.client import AsyncClassificationJobsClient, ClassificationJobsClient
    from .custom_jobs.client import AsyncCustomJobsClient, CustomJobsClient
    from .document_classes.client import AsyncDocumentClassesClient, DocumentClassesClient
    from .extract_jobs.client import AsyncExtractJobsClient, ExtractJobsClient
    from .jobs.client import AsyncJobsClient, JobsClient
    from .parse_jobs.client import AsyncParseJobsClient, ParseJobsClient
    from .schemas.client import AsyncSchemasClient, SchemasClient


class ByteIt:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : typing.Optional[str]
        The base url to use for requests from the client.

    environment : ByteItEnvironment
        The environment to use for requests from the client. from .environment import ByteItEnvironment



        Defaults to ByteItEnvironment.DEFAULT



    api_key : str
    headers : typing.Optional[typing.Dict[str, str]]
        Additional headers to send with every request.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    max_retries : typing.Optional[int]
        The default maximum number of retries for failed requests. Defaults to 2. Per-request `max_retries` in `request_options` takes precedence over this value.

    stream_reconnection_enabled : typing.Optional[bool]
        Whether to automatically reconnect on stream disconnection for resumable streaming endpoints. Defaults to True. Per-request `stream_reconnection_enabled` in `request_options` takes precedence over this value.

    max_stream_reconnection_attempts : typing.Optional[int]
        The maximum number of reconnection attempts for resumable streaming endpoints. Defaults to no limit. Per-request `max_stream_reconnection_attempts` in `request_options` takes precedence over this value.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.Client]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    logging : typing.Optional[typing.Union[LogConfig, Logger]]
        Configure logging for the SDK. Accepts a LogConfig dict with 'level' (debug/info/warn/error), 'logger' (custom logger implementation), and 'silent' (boolean, defaults to True) fields. You can also pass a pre-configured Logger instance.

    Examples
    --------
    from byteit import ByteIt

    client = ByteIt(
        api_key="YOUR_API_KEY",
    )
    """

    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: ByteItEnvironment = ByteItEnvironment.DEFAULT,
        api_key: str,
        headers: typing.Optional[typing.Dict[str, str]] = None,
        timeout: typing.Optional[float] = None,
        max_retries: typing.Optional[int] = None,
        stream_reconnection_enabled: typing.Optional[bool] = None,
        max_stream_reconnection_attempts: typing.Optional[int] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.Client] = None,
        logging: typing.Optional[typing.Union[LogConfig, Logger]] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        _defaulted_max_retries = max_retries if max_retries is not None else 2
        self._client_wrapper = SyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            api_key=api_key,
            headers=headers,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
            max_retries=_defaulted_max_retries,
            stream_reconnection_enabled=stream_reconnection_enabled,
            max_stream_reconnection_attempts=max_stream_reconnection_attempts,
            logging=logging,
        )
        self._parse_jobs: typing.Optional[ParseJobsClient] = None
        self._extract_jobs: typing.Optional[ExtractJobsClient] = None
        self._classification_jobs: typing.Optional[ClassificationJobsClient] = None
        self._custom_jobs: typing.Optional[CustomJobsClient] = None
        self._jobs: typing.Optional[JobsClient] = None
        self._schemas: typing.Optional[SchemasClient] = None
        self._document_classes: typing.Optional[DocumentClassesClient] = None
        self._api_keys: typing.Optional[ApiKeysClient] = None

    @property
    def parse_jobs(self):
        if self._parse_jobs is None:
            from .parse_jobs.client import ParseJobsClient  # noqa: E402

            self._parse_jobs = ParseJobsClient(client_wrapper=self._client_wrapper)
        return self._parse_jobs

    @property
    def extract_jobs(self):
        if self._extract_jobs is None:
            from .extract_jobs.client import ExtractJobsClient  # noqa: E402

            self._extract_jobs = ExtractJobsClient(client_wrapper=self._client_wrapper)
        return self._extract_jobs

    @property
    def classification_jobs(self):
        if self._classification_jobs is None:
            from .classification_jobs.client import ClassificationJobsClient  # noqa: E402

            self._classification_jobs = ClassificationJobsClient(client_wrapper=self._client_wrapper)
        return self._classification_jobs

    @property
    def custom_jobs(self):
        if self._custom_jobs is None:
            from .custom_jobs.client import CustomJobsClient  # noqa: E402

            self._custom_jobs = CustomJobsClient(client_wrapper=self._client_wrapper)
        return self._custom_jobs

    @property
    def jobs(self):
        if self._jobs is None:
            from .jobs.client import JobsClient  # noqa: E402

            self._jobs = JobsClient(client_wrapper=self._client_wrapper)
        return self._jobs

    @property
    def schemas(self):
        if self._schemas is None:
            from .schemas.client import SchemasClient  # noqa: E402

            self._schemas = SchemasClient(client_wrapper=self._client_wrapper)
        return self._schemas

    @property
    def document_classes(self):
        if self._document_classes is None:
            from .document_classes.client import DocumentClassesClient  # noqa: E402

            self._document_classes = DocumentClassesClient(client_wrapper=self._client_wrapper)
        return self._document_classes

    @property
    def api_keys(self):
        if self._api_keys is None:
            from .api_keys.client import ApiKeysClient  # noqa: E402

            self._api_keys = ApiKeysClient(client_wrapper=self._client_wrapper)
        return self._api_keys


def _make_default_async_client(
    timeout: typing.Optional[float],
    follow_redirects: typing.Optional[bool],
) -> httpx.AsyncClient:
    try:
        import httpx_aiohttp  # type: ignore[import-not-found]
    except ImportError:
        pass
    else:
        if follow_redirects is not None:
            return httpx_aiohttp.HttpxAiohttpClient(timeout=timeout, follow_redirects=follow_redirects)
        return httpx_aiohttp.HttpxAiohttpClient(timeout=timeout)

    if follow_redirects is not None:
        return httpx.AsyncClient(timeout=timeout, follow_redirects=follow_redirects)
    return httpx.AsyncClient(timeout=timeout)


class AsyncByteIt:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : typing.Optional[str]
        The base url to use for requests from the client.

    environment : ByteItEnvironment
        The environment to use for requests from the client. from .environment import ByteItEnvironment



        Defaults to ByteItEnvironment.DEFAULT



    api_key : str
    headers : typing.Optional[typing.Dict[str, str]]
        Additional headers to send with every request.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    max_retries : typing.Optional[int]
        The default maximum number of retries for failed requests. Defaults to 2. Per-request `max_retries` in `request_options` takes precedence over this value.

    stream_reconnection_enabled : typing.Optional[bool]
        Whether to automatically reconnect on stream disconnection for resumable streaming endpoints. Defaults to True. Per-request `stream_reconnection_enabled` in `request_options` takes precedence over this value.

    max_stream_reconnection_attempts : typing.Optional[int]
        The maximum number of reconnection attempts for resumable streaming endpoints. Defaults to no limit. Per-request `max_stream_reconnection_attempts` in `request_options` takes precedence over this value.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.AsyncClient]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    logging : typing.Optional[typing.Union[LogConfig, Logger]]
        Configure logging for the SDK. Accepts a LogConfig dict with 'level' (debug/info/warn/error), 'logger' (custom logger implementation), and 'silent' (boolean, defaults to True) fields. You can also pass a pre-configured Logger instance.

    Examples
    --------
    from byteit import AsyncByteIt

    client = AsyncByteIt(
        api_key="YOUR_API_KEY",
    )
    """

    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: ByteItEnvironment = ByteItEnvironment.DEFAULT,
        api_key: str,
        headers: typing.Optional[typing.Dict[str, str]] = None,
        timeout: typing.Optional[float] = None,
        max_retries: typing.Optional[int] = None,
        stream_reconnection_enabled: typing.Optional[bool] = None,
        max_stream_reconnection_attempts: typing.Optional[int] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.AsyncClient] = None,
        logging: typing.Optional[typing.Union[LogConfig, Logger]] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        _defaulted_max_retries = max_retries if max_retries is not None else 2
        self._client_wrapper = AsyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            api_key=api_key,
            headers=headers,
            httpx_client=httpx_client
            if httpx_client is not None
            else _make_default_async_client(timeout=_defaulted_timeout, follow_redirects=follow_redirects),
            timeout=_defaulted_timeout,
            max_retries=_defaulted_max_retries,
            stream_reconnection_enabled=stream_reconnection_enabled,
            max_stream_reconnection_attempts=max_stream_reconnection_attempts,
            logging=logging,
        )
        self._parse_jobs: typing.Optional[AsyncParseJobsClient] = None
        self._extract_jobs: typing.Optional[AsyncExtractJobsClient] = None
        self._classification_jobs: typing.Optional[AsyncClassificationJobsClient] = None
        self._custom_jobs: typing.Optional[AsyncCustomJobsClient] = None
        self._jobs: typing.Optional[AsyncJobsClient] = None
        self._schemas: typing.Optional[AsyncSchemasClient] = None
        self._document_classes: typing.Optional[AsyncDocumentClassesClient] = None
        self._api_keys: typing.Optional[AsyncApiKeysClient] = None

    @property
    def parse_jobs(self):
        if self._parse_jobs is None:
            from .parse_jobs.client import AsyncParseJobsClient  # noqa: E402

            self._parse_jobs = AsyncParseJobsClient(client_wrapper=self._client_wrapper)
        return self._parse_jobs

    @property
    def extract_jobs(self):
        if self._extract_jobs is None:
            from .extract_jobs.client import AsyncExtractJobsClient  # noqa: E402

            self._extract_jobs = AsyncExtractJobsClient(client_wrapper=self._client_wrapper)
        return self._extract_jobs

    @property
    def classification_jobs(self):
        if self._classification_jobs is None:
            from .classification_jobs.client import AsyncClassificationJobsClient  # noqa: E402

            self._classification_jobs = AsyncClassificationJobsClient(client_wrapper=self._client_wrapper)
        return self._classification_jobs

    @property
    def custom_jobs(self):
        if self._custom_jobs is None:
            from .custom_jobs.client import AsyncCustomJobsClient  # noqa: E402

            self._custom_jobs = AsyncCustomJobsClient(client_wrapper=self._client_wrapper)
        return self._custom_jobs

    @property
    def jobs(self):
        if self._jobs is None:
            from .jobs.client import AsyncJobsClient  # noqa: E402

            self._jobs = AsyncJobsClient(client_wrapper=self._client_wrapper)
        return self._jobs

    @property
    def schemas(self):
        if self._schemas is None:
            from .schemas.client import AsyncSchemasClient  # noqa: E402

            self._schemas = AsyncSchemasClient(client_wrapper=self._client_wrapper)
        return self._schemas

    @property
    def document_classes(self):
        if self._document_classes is None:
            from .document_classes.client import AsyncDocumentClassesClient  # noqa: E402

            self._document_classes = AsyncDocumentClassesClient(client_wrapper=self._client_wrapper)
        return self._document_classes

    @property
    def api_keys(self):
        if self._api_keys is None:
            from .api_keys.client import AsyncApiKeysClient  # noqa: E402

            self._api_keys = AsyncApiKeysClient(client_wrapper=self._client_wrapper)
        return self._api_keys


def _get_base_url(*, base_url: typing.Optional[str] = None, environment: ByteItEnvironment) -> str:
    if base_url is not None:
        return base_url
    elif environment is not None:
        return environment.value
    else:
        raise Exception("Please pass in either base_url or environment to construct the client")
