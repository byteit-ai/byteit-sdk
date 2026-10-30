namespace ByteIt;

public partial interface IDocumentClassesClient
{
    /// <summary>
    /// Return default catalogue entries plus the user's custom classes.
    /// </summary>
    WithRawResponseTask<ReadDocumentClassesListResponse> ListAsync(
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Persist a new user-owned document class.
    /// </summary>
    WithRawResponseTask<ReadDocumentClassResponse> CreateAsync(
        CreateDocumentClassRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Return one document class by id.
    /// </summary>
    WithRawResponseTask<ReadDocumentClassResponse> GetAsync(
        GetDocumentClassesRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Update an owned custom document class.
    /// </summary>
    WithRawResponseTask<ReadDocumentClassResponse> UpdateAsync(
        UpdateDocumentClassRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Delete an owned custom document class.
    /// </summary>
    WithRawResponseTask DeleteAsync(
        DeleteDocumentClassesRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
