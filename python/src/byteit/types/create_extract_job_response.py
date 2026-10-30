# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .extract_job import ExtractJob


class CreateExtractJobResponse(UniversalBaseModel):
    detail: str
    extract_job: ExtractJob

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
