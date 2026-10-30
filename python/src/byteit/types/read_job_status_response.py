# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class ReadJobStatusResponse(UniversalBaseModel):
    processing_status: str = pydantic.Field()
    """
    Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final.
    """

    progress: int = pydantic.Field()
    """
    Estimated progress percentage from 0 to 100
    """

    message: typing.Optional[str] = pydantic.Field(default=None)
    """
    Optional informational message, e.g. when processing takes longer than expected
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
