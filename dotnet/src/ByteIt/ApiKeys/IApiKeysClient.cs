namespace ByteIt;

public partial interface IApiKeysClient
{
    /// <summary>
    /// Create a named API key. The raw key is returned only once, in this response; store it securely.
    /// </summary>
    WithRawResponseTask<CreateApiKeyResponse> CreateAsync(
        CreateApiKeyRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Revoke and delete one of your API keys by name.
    /// </summary>
    WithRawResponseTask<ApiKeyResponse> DeleteAsync(
        DeleteApiKeysRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// List your API keys (metadata only; raw keys are never returned).
    /// </summary>
    WithRawResponseTask<ReadApiKeysResponse> ListAsync(
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
