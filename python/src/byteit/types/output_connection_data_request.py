# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class OutputConnectionDataRequest(UniversalBaseModel):
    bucket: typing.Optional[str] = pydantic.Field(default=None)
    """
    Destination S3 bucket.
    """

    path: typing.Optional[str] = pydantic.Field(default=None)
    """
    Destination key prefix or object path inside the bucket.
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
