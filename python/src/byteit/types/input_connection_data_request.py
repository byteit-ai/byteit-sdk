# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class InputConnectionDataRequest(UniversalBaseModel):
    source_bucket: typing.Optional[str] = pydantic.Field(default=None)
    """
    S3 bucket that holds the source object(s).
    """

    source_path_inside_bucket: typing.Optional[str] = pydantic.Field(default=None)
    """
    Single object key inside the bucket (mutually exclusive with source_paths).
    """

    source_paths: typing.Optional[typing.List[str]] = pydantic.Field(default=None)
    """
    Bulk object keys inside the bucket (mutually exclusive with source_path_inside_bucket).
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
