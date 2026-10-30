namespace ByteIt;

public partial interface ISchemasClient
{
    /// <summary>
    /// Return all saved schemas owned by the authenticated user.
    /// </summary>
    WithRawResponseTask<ReadSavedSchemasListResponse> ListAsync(
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Persist a validated schema for the authenticated user.
    /// </summary>
    WithRawResponseTask<ReadSavedSchemaResponse> CreateAsync(
        CreateSavedSchemaRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Return a saved schema owned by the authenticated user.
    /// </summary>
    WithRawResponseTask<ReadSavedSchemaResponse> GetAsync(
        GetSchemasRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Delete a saved schema owned by the authenticated user.
    /// </summary>
    WithRawResponseTask DeleteAsync(
        DeleteSchemasRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
