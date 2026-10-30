# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class ReadJobResultNotReadyResponse(UniversalBaseModel):
    detail: str
    job_id: str
    processing_status: str
    ready: bool = pydantic.Field()
    """
    Always false until the job completes.
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
