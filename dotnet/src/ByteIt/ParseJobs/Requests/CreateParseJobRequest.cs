using ByteIt.Core;

namespace ByteIt;

[Serializable]
public record CreateParseJobRequest
{
    public FileParameter? File { get; set; }

    public IEnumerable<FileParameter>? Files { get; set; }

    /// <summary>
    /// Optional nickname for easier job identification.
    /// </summary>
    public string? Nickname { get; set; }

    /// <summary>
    /// Output format for the result: 'txt', 'json', 'html', 'md', 'zip'
    /// </summary>
    public OutputFormatEnum? OutputFormat { get; set; }

    /// <summary>
    /// Where to read the document from: 'localfile' (upload) or 's3'.
    /// </summary>
    public InputConnectorEnum? InputConnector { get; set; }

    /// <summary>
    /// Configuration for the input connector. For localfile: leave empty.
    /// </summary>
    public InputConnectionDataRequest? InputConnectionData { get; set; }

    /// <summary>
    /// Where to deliver the result: 's3' (your bucket, see output_connection_data). Leave empty to download it from ByteIt.
    /// </summary>
    public OutputConnectorEnum? OutputConnector { get; set; }

    /// <summary>
    /// Configuration for the output connector.
    /// </summary>
    public OutputConnectionDataRequest? OutputConnectionData { get; set; }

    /// <summary>
    /// Processing options for the job.
    /// </summary>
    public ProcessingOptionsRequest? ProcessingOptions { get; set; }

    /// <summary>
    /// When true, the job is accepted and held in queued status instead of starting processing immediately.
    /// </summary>
    public bool? QueueForBatch { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
