# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel
from .custom_job_type_enum import CustomJobTypeEnum
from .processing_status_enum import ProcessingStatusEnum


class CustomJob(UniversalBaseModel):
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

    job_type: CustomJobTypeEnum
    extraction_schema: typing.Optional[typing.Any] = pydantic.Field(default=None)
    """
    JSON schema the job extracted with, when it extracts data.
    """

    user_prompt: typing.Optional[str] = pydantic.Field(default=None)
    """
    Instructions you gave the job.
    """

    file_names: typing.Optional[typing.List[str]] = pydantic.Field(default=None)
    """
    Names of the uploaded files, in upload order.
    """

    total_page_count: typing.Optional[int] = pydantic.Field(default=None)
    """
    Pages across all uploaded files.
    """

    document_types: typing.Optional[typing.List[typing.Optional[str]]] = pydantic.Field(default=None)
    """
    File type of each uploaded file, in upload order.
    """

    has_extras: typing.Optional[bool] = pydantic.Field(default=None)
    """
    Whether an extras ZIP can be downloaded.
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
