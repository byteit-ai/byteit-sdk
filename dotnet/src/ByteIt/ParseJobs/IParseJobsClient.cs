namespace ByteIt;

public partial interface IParseJobsClient
{
    /// <summary>
    /// Create a parse job entry for document processing.
    /// </summary>
    WithRawResponseTask<CreateParseJobResponse> CreateAsync(
        CreateParseJobRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
