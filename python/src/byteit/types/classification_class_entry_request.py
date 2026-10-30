# This file was auto-generated from the ByteIt API definition.

import typing

import pydantic
from ..core.pydantic_utilities import UniversalBaseModel


class ClassificationClassEntryRequest(UniversalBaseModel):
    label: str = pydantic.Field()
    """
    Class label returned by the classifier.
    """

    description: str = pydantic.Field()
    """
    Short description of when this class applies.
    """

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)
