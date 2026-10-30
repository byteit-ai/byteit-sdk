namespace ByteIt;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
[Serializable]
public class ConflictError(object body, ByteIt.RawResponse? rawResponse = null)
    : ByteItClientApiException("ConflictError", 409, body, rawResponse: rawResponse);
