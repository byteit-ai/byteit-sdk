using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CustomJob : IJsonOnDeserialized
{
    [JsonExtensionData]
    private readonly IDictionary<string, JsonElement> _extensionData =
        new Dictionary<string, JsonElement>();

    /// <summary>
    /// Unique job identifier.
    /// </summary>
    [JsonPropertyName("job_id")]
    public required string JobId { get; set; }

    /// <summary>
    /// Display name you gave the job.
    /// </summary>
    [JsonPropertyName("nickname")]
    public string? Nickname { get; set; }

    /// <summary>
    /// Where the job is in its lifecycle: `pending` (received, being inspected), `queued` (accepted, waiting to be processed), `processing`, `completed` (the result can be downloaded) or `failed` (the job's `error` and `error_code` say why). `completed` and `failed` are final.
    /// </summary>
    [JsonPropertyName("processing_status")]
    public required ProcessingStatusEnum ProcessingStatus { get; set; }

    /// <summary>
    /// When the job was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public DateTime? CreatedAt { get; set; }

    /// <summary>
    /// When the job last changed.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public DateTime? UpdatedAt { get; set; }

    /// <summary>
    /// Time the job took to process, once it has finished.
    /// </summary>
    [JsonPropertyName("processing_time_seconds")]
    public double? ProcessingTimeSeconds { get; set; }

    /// <summary>
    /// Credits charged for the job.
    /// </summary>
    [JsonPropertyName("credits_cost")]
    public double? CreditsCost { get; set; }

    /// <summary>
    /// Why the job failed, when it did.
    /// </summary>
    [JsonPropertyName("error")]
    public string? Error { get; set; }

    /// <summary>
    /// Stable error code of a failed job, from the same vocabulary as API errors.
    /// </summary>
    [JsonPropertyName("error_code")]
    public string? ErrorCode { get; set; }

    /// <summary>
    /// Name of the uploaded file, when the job has one.
    /// </summary>
    [JsonPropertyName("file_name")]
    public string? FileName { get; set; }

    /// <summary>
    /// Pages in the document, once it has been inspected.
    /// </summary>
    [JsonPropertyName("page_count")]
    public int? PageCount { get; set; }

    [JsonPropertyName("job_type")]
    public required CustomJobTypeEnum JobType { get; set; }

    /// <summary>
    /// JSON schema the job extracted with, when it extracts data.
    /// </summary>
    [JsonPropertyName("extraction_schema")]
    public object? ExtractionSchema { get; set; }

    /// <summary>
    /// Instructions you gave the job.
    /// </summary>
    [JsonPropertyName("user_prompt")]
    public string? UserPrompt { get; set; }

    /// <summary>
    /// Names of the uploaded files, in upload order.
    /// </summary>
    [JsonPropertyName("file_names")]
    public IEnumerable<string>? FileNames { get; set; }

    /// <summary>
    /// Pages across all uploaded files.
    /// </summary>
    [JsonPropertyName("total_page_count")]
    public int? TotalPageCount { get; set; }

    /// <summary>
    /// File type of each uploaded file, in upload order.
    /// </summary>
    [JsonPropertyName("document_types")]
    public IEnumerable<string?>? DocumentTypes { get; set; }

    /// <summary>
    /// Whether an extras ZIP can be downloaded.
    /// </summary>
    [JsonPropertyName("has_extras")]
    public bool? HasExtras { get; set; }

    [JsonIgnore]
    public ReadOnlyAdditionalProperties AdditionalProperties { get; private set; } = new();

    void IJsonOnDeserialized.OnDeserialized() =>
        AdditionalProperties.CopyFromExtensionData(_extensionData);

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
