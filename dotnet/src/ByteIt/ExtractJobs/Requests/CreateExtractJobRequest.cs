using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CreateExtractJobRequest
{
    /// <summary>
    /// Public ID of the completed parse job to extract data from.
    /// </summary>
    [JsonPropertyName("parse_job_id")]
    public required string ParseJobId { get; set; }

    /// <summary>
    /// JSON extraction schema for the extract job.
    /// </summary>
    [JsonPropertyName("schema")]
    public Dictionary<string, object?> Schema { get; set; } = new Dictionary<string, object?>();

    /// <summary>
    /// Complexity tier for the extraction: low, medium, or high.
    /// </summary>
    [JsonPropertyName("extraction_complexity")]
    public ExtractionComplexityEnum? ExtractionComplexity { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
