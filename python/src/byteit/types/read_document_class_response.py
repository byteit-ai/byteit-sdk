# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .scope_enum import ScopeEnum


class ReadDocumentClassResponse(UniversalBaseModel):
    id: str
    label: str
    description: str
    scope: ScopeEnum
    create_time: typing.Optional[dt.datetime] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
