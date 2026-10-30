# This file was auto-generated from the ByteIt API definition.

from __future__ import annotations

import datetime as dt
import typing

import pydantic
import typing_extensions
from ..core.pydantic_utilities import UniversalBaseModel
from .extraction_complexity_enum import ExtractionComplexityEnum
from .processing_options import ProcessingOptions
from .processing_status_enum import ProcessingStatusEnum


class Job_Parse(UniversalBaseModel):
    job_type: typing.Literal["parse"] = "parse"
    job_id: str
    nickname: typing.Optional[str] = None
    processing_status: ProcessingStatusEnum
    created_at: typing.Optional[dt.datetime] = None
    updated_at: typing.Optional[dt.datetime] = None
    processing_time_seconds: typing.Optional[float] = None
    credits_cost: typing.Optional[float] = None
    error: typing.Optional[str] = None
    error_code: typing.Optional[str] = None
    file_name: typing.Optional[str] = None
    page_count: typing.Optional[int] = None
    file_size: typing.Optional[int] = None
    output_format: typing.Optional[str] = None
    processing_options: typing.Optional[ProcessingOptions] = None
    input_connector: typing.Optional[str] = None
    output_connector: typing.Optional[str] = None
    billable_unit: typing.Optional[str] = None
    billable_quantity: typing.Optional[int] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)


class Job_Extract(UniversalBaseModel):
    job_type: typing.Literal["extract"] = "extract"
    job_id: str
    nickname: typing.Optional[str] = None
    processing_status: ProcessingStatusEnum
    created_at: typing.Optional[dt.datetime] = None
    updated_at: typing.Optional[dt.datetime] = None
    processing_time_seconds: typing.Optional[float] = None
    credits_cost: typing.Optional[float] = None
    error: typing.Optional[str] = None
    error_code: typing.Optional[str] = None
    file_name: typing.Optional[str] = None
    page_count: typing.Optional[int] = None
    input_job_id: typing.Optional[str] = None
    extraction_schema: typing.Any
    extraction_complexity: ExtractionComplexityEnum
    billable_unit: typing.Optional[str] = None
    billable_quantity: typing.Optional[int] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)


class Job_Classification(UniversalBaseModel):
    job_type: typing.Literal["classification"] = "classification"
    job_id: str
    nickname: typing.Optional[str] = None
    processing_status: ProcessingStatusEnum
    created_at: typing.Optional[dt.datetime] = None
    updated_at: typing.Optional[dt.datetime] = None
    processing_time_seconds: typing.Optional[float] = None
    credits_cost: typing.Optional[float] = None
    error: typing.Optional[str] = None
    error_code: typing.Optional[str] = None
    file_name: typing.Optional[str] = None
    page_count: typing.Optional[int] = None
    document_class: typing.Optional[str] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)


class Job_Custom(UniversalBaseModel):
    job_type: typing.Literal["custom"] = "custom"
    job_id: str
    nickname: typing.Optional[str] = None
    processing_status: ProcessingStatusEnum
    created_at: typing.Optional[dt.datetime] = None
    updated_at: typing.Optional[dt.datetime] = None
    processing_time_seconds: typing.Optional[float] = None
    credits_cost: typing.Optional[float] = None
    error: typing.Optional[str] = None
    error_code: typing.Optional[str] = None
    file_name: typing.Optional[str] = None
    page_count: typing.Optional[int] = None
    extraction_schema: typing.Optional[typing.Any] = None
    user_prompt: typing.Optional[str] = None
    file_names: typing.Optional[typing.List[str]] = None
    total_page_count: typing.Optional[int] = None
    document_types: typing.Optional[typing.List[typing.Optional[str]]] = None
    has_extras: typing.Optional[bool] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)


Job = typing_extensions.Annotated[
    typing.Union[Job_Parse, Job_Extract, Job_Classification, Job_Custom], pydantic.Field(discriminator="job_type")
]
