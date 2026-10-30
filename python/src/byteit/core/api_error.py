# This file was auto-generated from the ByteIt API definition.

from typing import Any, Dict, Optional


class ApiError(Exception):
    headers: Optional[Dict[str, str]]
    status_code: Optional[int]
    body: Any

    def __init__(
        self,
        *,
        headers: Optional[Dict[str, str]] = None,
        status_code: Optional[int] = None,
        body: Any = None,
    ) -> None:
        self.headers = headers
        self.status_code = status_code
        self.body = body

    def __str__(self) -> str:
        message = getattr(self.body, "message", None)
        if message is not None:
            request_id = getattr(self.body, "request_id", None)
            return (
                f"{type(self).__name__} ({self.status_code}): {message}"
                f" [request_id={request_id}]"
            )
        return f"headers: {self.headers}, status_code: {self.status_code}, body: {self.body}"
