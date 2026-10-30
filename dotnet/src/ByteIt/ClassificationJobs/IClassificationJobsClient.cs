namespace ByteIt;

public partial interface IClassificationJobsClient
{
    /// <summary>
    /// Create a user-requested classification job from an uploaded file.
    /// </summary>
    WithRawResponseTask<CreateClassificationJobResponse> CreateAsync(
        CreateClassificationJobRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
