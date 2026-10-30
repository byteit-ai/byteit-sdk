# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class ApiKeySummary(UniversalBaseModel):
    id: str
    name: str
    active: bool
    expires_at: typing.Optional[dt.datetime] = None
    created_at: typing.Optional[dt.datetime] = None
    updated_at: typing.Optional[dt.datetime] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
