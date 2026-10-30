using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CreateExtractJobResponse : IJsonOnDeserialized
{
    [JsonExtensionData]
    private readonly IDictionary<string, JsonElement> _extensionData =
        new Dictionary<string, JsonElement>();

    [JsonPropertyName("detail")]
    public required string Detail { get; set; }

    [JsonPropertyName("extract_job")]
    public required ExtractJob ExtractJob { get; set; }

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
