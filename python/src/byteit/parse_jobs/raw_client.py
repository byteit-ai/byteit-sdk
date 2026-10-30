# This file was auto-generated from the ByteIt API definition.

import json
import typing
from json.decoder import JSONDecodeError

from .. import core
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.http_response import AsyncHttpResponse, HttpResponse
from ..core.jsonable_encoder import jsonable_encoder
from ..core.parse_error import ParsingError
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from ..errors.bad_request_error import BadRequestError
from ..errors.conflict_error import ConflictError
from ..errors.content_too_large_error import ContentTooLargeError
from ..errors.forbidden_error import ForbiddenError
from ..errors.gone_error import GoneError
from ..errors.internal_server_error import InternalServerError
from ..errors.not_found_error import NotFoundError
from ..errors.too_many_requests_error import TooManyRequestsError
from ..errors.unauthorized_error import UnauthorizedError
from ..errors.unprocessable_entity_error import UnprocessableEntityError
from ..types.create_parse_job_response import CreateParseJobResponse
from ..types.error_response import ErrorResponse
from ..types.input_connection_data_request import InputConnectionDataRequest
from ..types.input_connector_enum import InputConnectorEnum
from ..types.output_connection_data_request import OutputConnectionDataRequest
from ..types.output_connector_enum import OutputConnectorEnum
from ..types.output_format_enum import OutputFormatEnum
from ..types.processing_options_request import ProcessingOptionsRequest
from pydantic import ValidationError

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class RawParseJobsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

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
    ) -> HttpResponse[CreateParseJobResponse]:
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
        HttpResponse[CreateParseJobResponse]
            Successful response
        """
        _response = self._client_wrapper.httpx_client.request(
            "v1/jobs/parse-jobs/",
            method="POST",
            data={
                "nickname": nickname,
                "output_format": output_format,
                "input_connector": input_connector,
                "input_connection_data": json.dumps(jsonable_encoder(input_connection_data))
                if input_connection_data is not OMIT
                else OMIT,
                "output_connector": output_connector,
                "output_connection_data": json.dumps(jsonable_encoder(output_connection_data))
                if output_connection_data is not OMIT
                else OMIT,
                "processing_options": json.dumps(jsonable_encoder(processing_options))
                if processing_options is not OMIT
                else OMIT,
                "queue_for_batch": queue_for_batch,
            },
            files={
                **({"file": file} if file is not None else {}),
                **({"files": files} if files is not None else {}),
            },
            request_options=request_options,
            omit=OMIT,
            force_multipart=True,
        )
        try:
            if 200 <= _response.status_code < 300:
                _data = typing.cast(
                    CreateParseJobResponse,
                    parse_obj_as(
                        type_=CreateParseJobResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
                return HttpResponse(response=_response, data=_data)
            if _response.status_code == 400:
                raise BadRequestError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 401:
                raise UnauthorizedError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 403:
                raise ForbiddenError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 404:
                raise NotFoundError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 409:
                raise ConflictError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        typing.Any,
                        parse_obj_as(
                            type_=typing.Any,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 410:
                raise GoneError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 413:
                raise ContentTooLargeError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 422:
                raise UnprocessableEntityError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 429:
                raise TooManyRequestsError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 500:
                raise InternalServerError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response.text)
        except ValidationError as e:
            raise ParsingError(
                status_code=_response.status_code, headers=dict(_response.headers), body=_response.json(), cause=e
            )
        raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response_json)


class AsyncRawParseJobsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

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
    ) -> AsyncHttpResponse[CreateParseJobResponse]:
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
        AsyncHttpResponse[CreateParseJobResponse]
            Successful response
        """
        _response = await self._client_wrapper.httpx_client.request(
            "v1/jobs/parse-jobs/",
            method="POST",
            data={
                "nickname": nickname,
                "output_format": output_format,
                "input_connector": input_connector,
                "input_connection_data": json.dumps(jsonable_encoder(input_connection_data))
                if input_connection_data is not OMIT
                else OMIT,
                "output_connector": output_connector,
                "output_connection_data": json.dumps(jsonable_encoder(output_connection_data))
                if output_connection_data is not OMIT
                else OMIT,
                "processing_options": json.dumps(jsonable_encoder(processing_options))
                if processing_options is not OMIT
                else OMIT,
                "queue_for_batch": queue_for_batch,
            },
            files={
                **({"file": file} if file is not None else {}),
                **({"files": files} if files is not None else {}),
            },
            request_options=request_options,
            omit=OMIT,
            force_multipart=True,
        )
        try:
            if 200 <= _response.status_code < 300:
                _data = typing.cast(
                    CreateParseJobResponse,
                    parse_obj_as(
                        type_=CreateParseJobResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
                return AsyncHttpResponse(response=_response, data=_data)
            if _response.status_code == 400:
                raise BadRequestError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 401:
                raise UnauthorizedError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 403:
                raise ForbiddenError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 404:
                raise NotFoundError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 409:
                raise ConflictError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        typing.Any,
                        parse_obj_as(
                            type_=typing.Any,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 410:
                raise GoneError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 413:
                raise ContentTooLargeError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 422:
                raise UnprocessableEntityError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 429:
                raise TooManyRequestsError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            if _response.status_code == 500:
                raise InternalServerError(
                    headers=dict(_response.headers),
                    body=typing.cast(
                        ErrorResponse,
                        parse_obj_as(
                            type_=ErrorResponse,  # type: ignore
                            object_=_response.json(),
                        ),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response.text)
        except ValidationError as e:
            raise ParsingError(
                status_code=_response.status_code, headers=dict(_response.headers), body=_response.json(), cause=e
            )
        raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response_json)
