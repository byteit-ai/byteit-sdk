# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .read_saved_schema_response import ReadSavedSchemaResponse


class ReadSavedSchemasListResponse(UniversalBaseModel):
    detail: str
    count: int
    schemas: typing.List[ReadSavedSchemaResponse]

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
