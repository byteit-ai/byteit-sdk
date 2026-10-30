# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .custom_job import CustomJob


class CreateCustomJobResponse(UniversalBaseModel):
    detail: str
    custom_job: CustomJob

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
