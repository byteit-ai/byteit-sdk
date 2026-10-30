using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record ProcessingOptions : IJsonOnDeserialized
{
    [JsonExtensionData]
    private readonly IDictionary<string, JsonElement> _extensionData =
        new Dictionary<string, JsonElement>();

    [JsonPropertyName("languages")]
    public IEnumerable<string>? Languages { get; set; }

    [JsonPropertyName("page_range")]
    public string? PageRange { get; set; }

    [JsonPropertyName("image_annotations")]
    public bool? ImageAnnotations { get; set; }

    [JsonPropertyName("force_image_annotations")]
    public bool? ForceImageAnnotations { get; set; }

    [JsonPropertyName("table_enrichment")]
    public bool? TableEnrichment { get; set; }

    [JsonPropertyName("parse_type")]
    public ParseTypeEnum? ParseType { get; set; }

    [JsonPropertyName("output_format")]
    public OutputFormatEnum? OutputFormat { get; set; }

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
