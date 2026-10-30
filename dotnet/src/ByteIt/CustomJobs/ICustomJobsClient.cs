namespace ByteIt;

public partial interface ICustomJobsClient
{
    /// <summary>
    /// Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.
    /// </summary>
    WithRawResponseTask<CreateCustomJobResponse> CreateAsync(
        CreateCustomJobRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
