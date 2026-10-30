# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .classification_job import ClassificationJob


class CreateClassificationJobResponse(UniversalBaseModel):
    detail: str
    classification_job: ClassificationJob

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
