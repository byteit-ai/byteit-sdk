# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .read_document_class_response import ReadDocumentClassResponse


class ReadDocumentClassesListResponse(UniversalBaseModel):
    detail: str
    count: int
    classes: typing.List[ReadDocumentClassResponse]

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
