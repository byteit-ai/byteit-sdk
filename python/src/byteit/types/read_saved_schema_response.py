# This file was auto-generated from the ByteIt API definition.

import datetime as dt
import typing

import pydantic
import typing_extensions
from ..core.pydantic_utilities import UniversalBaseModel
from ..core.serialization import FieldMetadata


class ReadSavedSchemaResponse(UniversalBaseModel):
    name: str
    schema_json_: typing_extensions.Annotated[
        typing.Dict[str, typing.Any], FieldMetadata(alias="schema_json"), pydantic.Field(alias="schema_json")
    ]
    create_time: typing.Optional[dt.datetime] = None

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
