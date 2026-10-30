namespace ByteIt;

/// <summary>
/// Base exception class for all exceptions thrown by the SDK.
/// </summary>
public class ByteItClientException(string message, Exception? innerException = null)
    : Exception(message, innerException);
