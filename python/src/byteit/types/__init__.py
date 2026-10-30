# This file was auto-generated from the ByteIt API definition.

# isort: skip_file

import typing
from importlib import import_module

if typing.TYPE_CHECKING:
    from .api_key_response import ApiKeyResponse
    from .api_key_summary import ApiKeySummary
    from .classification_class_entry_request import ClassificationClassEntryRequest
    from .classification_job import ClassificationJob
    from .classification_job_type_enum import ClassificationJobTypeEnum
    from .code_enum import CodeEnum
    from .create_api_key_response import CreateApiKeyResponse
    from .create_classification_job_response import CreateClassificationJobResponse
    from .create_custom_job_response import CreateCustomJobResponse
    from .create_extract_job_response import CreateExtractJobResponse
    from .create_parse_job_response import CreateParseJobResponse
    from .custom_job import CustomJob
    from .custom_job_type_enum import CustomJobTypeEnum
    from .error_response import ErrorResponse
    from .extract_job import ExtractJob
    from .extract_job_type_enum import ExtractJobTypeEnum
    from .extraction_complexity_enum import ExtractionComplexityEnum
    from .failed_file_response import FailedFileResponse
    from .input_connection_data_request import InputConnectionDataRequest
    from .input_connector_enum import InputConnectorEnum
    from .job import Job, Job_Classification, Job_Custom, Job_Extract, Job_Parse
    from .output_connection_data_request import OutputConnectionDataRequest
    from .output_connector_enum import OutputConnectorEnum
    from .output_format_enum import OutputFormatEnum
    from .parse_job import ParseJob
    from .parse_job_type_enum import ParseJobTypeEnum
    from .parse_type_enum import ParseTypeEnum
    from .processing_options import ProcessingOptions
    from .processing_options_request import ProcessingOptionsRequest
    from .processing_status_enum import ProcessingStatusEnum
    from .read_api_keys_response import ReadApiKeysResponse
    from .read_document_class_response import ReadDocumentClassResponse
    from .read_document_classes_list_response import ReadDocumentClassesListResponse
    from .read_job_result_not_ready_response import ReadJobResultNotReadyResponse
    from .read_job_status_response import ReadJobStatusResponse
    from .read_jobs_list_response import ReadJobsListResponse
    from .read_saved_schema_response import ReadSavedSchemaResponse
    from .read_saved_schemas_list_response import ReadSavedSchemasListResponse
    from .scope_enum import ScopeEnum
_dynamic_imports: typing.Dict[str, str] = {
    "ApiKeyResponse": ".api_key_response",
    "ApiKeySummary": ".api_key_summary",
    "ClassificationClassEntryRequest": ".classification_class_entry_request",
    "ClassificationJob": ".classification_job",
    "ClassificationJobTypeEnum": ".classification_job_type_enum",
    "CodeEnum": ".code_enum",
    "CreateApiKeyResponse": ".create_api_key_response",
    "CreateClassificationJobResponse": ".create_classification_job_response",
    "CreateCustomJobResponse": ".create_custom_job_response",
    "CreateExtractJobResponse": ".create_extract_job_response",
    "CreateParseJobResponse": ".create_parse_job_response",
    "CustomJob": ".custom_job",
    "CustomJobTypeEnum": ".custom_job_type_enum",
    "ErrorResponse": ".error_response",
    "ExtractJob": ".extract_job",
    "ExtractJobTypeEnum": ".extract_job_type_enum",
    "ExtractionComplexityEnum": ".extraction_complexity_enum",
    "FailedFileResponse": ".failed_file_response",
    "InputConnectionDataRequest": ".input_connection_data_request",
    "InputConnectorEnum": ".input_connector_enum",
    "Job": ".job",
    "Job_Classification": ".job",
    "Job_Custom": ".job",
    "Job_Extract": ".job",
    "Job_Parse": ".job",
    "OutputConnectionDataRequest": ".output_connection_data_request",
    "OutputConnectorEnum": ".output_connector_enum",
    "OutputFormatEnum": ".output_format_enum",
    "ParseJob": ".parse_job",
    "ParseJobTypeEnum": ".parse_job_type_enum",
    "ParseTypeEnum": ".parse_type_enum",
    "ProcessingOptions": ".processing_options",
    "ProcessingOptionsRequest": ".processing_options_request",
    "ProcessingStatusEnum": ".processing_status_enum",
    "ReadApiKeysResponse": ".read_api_keys_response",
    "ReadDocumentClassResponse": ".read_document_class_response",
    "ReadDocumentClassesListResponse": ".read_document_classes_list_response",
    "ReadJobResultNotReadyResponse": ".read_job_result_not_ready_response",
    "ReadJobStatusResponse": ".read_job_status_response",
    "ReadJobsListResponse": ".read_jobs_list_response",
    "ReadSavedSchemaResponse": ".read_saved_schema_response",
    "ReadSavedSchemasListResponse": ".read_saved_schemas_list_response",
    "ScopeEnum": ".scope_enum",
}


def __getattr__(attr_name: str) -> typing.Any:
    module_name = _dynamic_imports.get(attr_name)
    if module_name is None:
        raise AttributeError(f"No {attr_name} found in _dynamic_imports for module name -> {__name__}")
    try:
        module = import_module(module_name, __package__)
        if module_name == f".{attr_name}":
            return module
        else:
            return getattr(module, attr_name)
    except ImportError as e:
        raise ImportError(f"Failed to import {attr_name} from {module_name}: {e}") from e
    except AttributeError as e:
        raise AttributeError(f"Failed to get {attr_name} from {module_name}: {e}") from e


def __dir__():
    lazy_attrs = list(_dynamic_imports.keys())
    return sorted(lazy_attrs)


__all__ = [
    "ApiKeyResponse",
    "ApiKeySummary",
    "ClassificationClassEntryRequest",
    "ClassificationJob",
    "ClassificationJobTypeEnum",
    "CodeEnum",
    "CreateApiKeyResponse",
    "CreateClassificationJobResponse",
    "CreateCustomJobResponse",
    "CreateExtractJobResponse",
    "CreateParseJobResponse",
    "CustomJob",
    "CustomJobTypeEnum",
    "ErrorResponse",
    "ExtractJob",
    "ExtractJobTypeEnum",
    "ExtractionComplexityEnum",
    "FailedFileResponse",
    "InputConnectionDataRequest",
    "InputConnectorEnum",
    "Job",
    "Job_Classification",
    "Job_Custom",
    "Job_Extract",
    "Job_Parse",
    "OutputConnectionDataRequest",
    "OutputConnectorEnum",
    "OutputFormatEnum",
    "ParseJob",
    "ParseJobTypeEnum",
    "ParseTypeEnum",
    "ProcessingOptions",
    "ProcessingOptionsRequest",
    "ProcessingStatusEnum",
    "ReadApiKeysResponse",
    "ReadDocumentClassResponse",
    "ReadDocumentClassesListResponse",
    "ReadJobResultNotReadyResponse",
    "ReadJobStatusResponse",
    "ReadJobsListResponse",
    "ReadSavedSchemaResponse",
    "ReadSavedSchemasListResponse",
    "ScopeEnum",
]
