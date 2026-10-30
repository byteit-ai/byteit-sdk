using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record InputConnectionDataRequest : IJsonOnDeserialized
{
    [JsonExtensionData]
    private readonly IDictionary<string, JsonElement> _extensionData =
        new Dictionary<string, JsonElement>();

    /// <summary>
    /// S3 bucket that holds the source object(s).
    /// </summary>
    [JsonPropertyName("source_bucket")]
    public string? SourceBucket { get; set; }

    /// <summary>
    /// Single object key inside the bucket (mutually exclusive with source_paths).
    /// </summary>
    [JsonPropertyName("source_path_inside_bucket")]
    public string? SourcePathInsideBucket { get; set; }

    /// <summary>
    /// Bulk object keys inside the bucket (mutually exclusive with source_path_inside_bucket).
    /// </summary>
    [JsonPropertyName("source_paths")]
    public IEnumerable<string>? SourcePaths { get; set; }

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
