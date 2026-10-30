namespace ByteIt;

public partial interface IExtractJobsClient
{
    /// <summary>
    /// Create an extract job from an existing parse job.
    /// </summary>
    WithRawResponseTask<CreateExtractJobResponse> CreateAsync(
        CreateExtractJobRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
