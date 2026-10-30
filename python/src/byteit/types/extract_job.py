# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .extract_job_type_enum import ExtractJobTypeEnum
from .extraction_complexity_enum import ExtractionComplexityEnum
from .processing_status_enum import ProcessingStatusEnum


class ExtractJob(UniversalBaseModel):
    job_id: str = pydantic.Field()
    """
    Unique job identifier.
    """

    nickname: typing.Optional[str] = pydantic.Field(default=None)
    """
    Display name you gave the job.
    """

    processing_status: ProcessingStatusEnum = pydantic.Field()
    """
    Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final.
    """

    created_at: typing.Optional[dt.datetime] = pydantic.Field(default=None)
    """
    When the job was created.
    """

    updated_at: typing.Optional[dt.datetime] = pydantic.Field(default=None)
    """
    When the job last changed.
    """

    processing_time_seconds: typing.Optional[float] = pydantic.Field(default=None)
    """
    Time the job took to process, once it has finished.
    """

    credits_cost: typing.Optional[float] = pydantic.Field(default=None)
    """
    Credits charged for the job.
    """

    error: typing.Optional[str] = pydantic.Field(default=None)
    """
    Why the job failed, when it did.
    """

    error_code: typing.Optional[str] = pydantic.Field(default=None)
    """
    Stable error code of a failed job, from the same vocabulary as API errors.
    """

    file_name: typing.Optional[str] = pydantic.Field(default=None)
    """
    Name of the uploaded file, when the job has one.
    """

    page_count: typing.Optional[int] = pydantic.Field(default=None)
    """
    Pages in the document, once it has been inspected.
    """

    job_type: ExtractJobTypeEnum
    input_job_id: typing.Optional[str] = pydantic.Field(default=None)
    """
    The parse job this extraction reads from.
    """

    extraction_schema: typing.Any
    extraction_complexity: ExtractionComplexityEnum = pydantic.Field()
    """
    Complexity level the extraction ran with.
    """

    billable_unit: typing.Optional[str] = pydantic.Field(default=None)
    """
    Unit the job is billed in: `page`, `char`, `cell` or `pixel`.
    """

    billable_quantity: typing.Optional[int] = pydantic.Field(default=None)
    """
    Quantity billed, in `billable_unit`.
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
