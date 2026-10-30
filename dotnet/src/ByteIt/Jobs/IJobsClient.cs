namespace ByteIt;

public partial interface IJobsClient
{
    /// <summary>
    /// List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.
    /// </summary>
    WithRawResponseTask<ReadJobsListResponse> ListAsync(
        ListJobsRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Retrieve any of your jobs by its ID. The response shape depends on `job_type`.
    /// </summary>
    WithRawResponseTask<Job> GetAsync(
        GetJobsRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Set or clear the display name of any of your jobs.
    /// </summary>
    WithRawResponseTask<Job> UpdateNicknameAsync(
        PatchedUpdateJobNicknameRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Download the original input file of a job by its public ID.
    /// </summary>
    WithRawResponseTask<global::System.IO.Stream> DownloadInputFileAsync(
        DownloadInputFileJobsRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Download the result of a completed job; what you get depends on its `job_type`:
    ///
    /// - `parse`: the parsed document (in `output_format` when given);
    /// - `extract`: JSON shaped by your extraction schema;
    /// - `classification`: JSON with the `document_class` and the classified `pages`;
    /// - `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.
    ///
    /// Responds with 409 while the job is still processing.
    /// </summary>
    WithRawResponseTask<global::System.IO.Stream> DownloadResultAsync(
        DownloadResultJobsRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );

    /// <summary>
    /// Return job processing status with estimated progress.
    /// </summary>
    WithRawResponseTask<ReadJobStatusResponse> GetStatusAsync(
        GetStatusJobsRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    );
}
