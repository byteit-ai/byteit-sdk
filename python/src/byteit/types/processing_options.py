# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .output_format_enum import OutputFormatEnum
from .parse_type_enum import ParseTypeEnum


class ProcessingOptions(UniversalBaseModel):
    languages: typing.Optional[typing.List[str]] = None
    page_range: typing.Optional[str] = None
    image_annotations: typing.Optional[bool] = None
    force_image_annotations: typing.Optional[bool] = None
    table_enrichment: typing.Optional[bool] = None
    parse_type: typing.Optional[ParseTypeEnum] = None
    output_format: typing.Optional[OutputFormatEnum] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
