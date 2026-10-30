# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class CreateApiKeyResponse(UniversalBaseModel):
    name: typing.Optional[str] = None
    uid: typing.Optional[str] = None
    create_time: typing.Optional[dt.datetime] = None
    update_time: typing.Optional[dt.datetime] = None
    delete_time: typing.Optional[dt.datetime] = None
    detail: typing.Optional[str] = None
    api_key_id: typing.Optional[str] = None
    key_name: typing.Optional[str] = None
    active: typing.Optional[bool] = None
    expires_at: typing.Optional[dt.datetime] = None
    raw_key: typing.Optional[str] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
