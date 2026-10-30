# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .job import Job


class ReadJobsListResponse(UniversalBaseModel):
    detail: str
    count: int = pydantic.Field()
    """
    Number of jobs in this page.
    """

    jobs: typing.List[Job] = pydantic.Field()
    """
    Jobs of any type; use `job_type` to tell them apart.
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
