namespace ByteIt;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
[Serializable]
public class GoneError(ErrorResponse body, ByteIt.RawResponse? rawResponse = null)
    : ByteItClientApiException("GoneError", 410, body, rawResponse: rawResponse)
{
    /// <summary>
    /// The body of the response that triggered the exception.
    /// </summary>
    public new ErrorResponse Body => body;
}
