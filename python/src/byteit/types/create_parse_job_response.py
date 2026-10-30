# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .failed_file_response import FailedFileResponse
from .parse_job import ParseJob


class CreateParseJobResponse(UniversalBaseModel):
    detail: str
    parse_job: typing.Optional[ParseJob] = None
    count: typing.Optional[int] = None
    parse_jobs: typing.Optional[typing.List[ParseJob]] = None
    failed_files: typing.Optional[typing.List[FailedFileResponse]] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
