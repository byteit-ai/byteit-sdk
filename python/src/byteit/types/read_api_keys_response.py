# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .api_key_summary import ApiKeySummary


class ReadApiKeysResponse(UniversalBaseModel):
    name: typing.Optional[str] = None
    uid: typing.Optional[str] = None
    create_time: typing.Optional[dt.datetime] = None
    update_time: typing.Optional[dt.datetime] = None
    delete_time: typing.Optional[dt.datetime] = None
    detail: typing.Optional[str] = None
    count: typing.Optional[int] = None
    keys: typing.Optional[typing.List[ApiKeySummary]] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
