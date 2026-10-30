# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .code_enum import CodeEnum


class ErrorResponse(UniversalBaseModel):
    code: CodeEnum = pydantic.Field()
    """
    Stable machine-readable error code from the versioned vocabulary
    """

    message: str = pydantic.Field()
    """
    Client-safe human-readable message
    """

    request_id: str = pydantic.Field()
    """
    Request identifier to quote when contacting support
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
