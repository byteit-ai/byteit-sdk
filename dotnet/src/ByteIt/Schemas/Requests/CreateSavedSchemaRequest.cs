using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CreateSavedSchemaRequest
{
    /// <summary>
    /// Unique name to save the schema under (per user).
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    /// <summary>
    /// JSON extraction schema to save.
    /// </summary>
    [JsonPropertyName("schema_json")]
    public Dictionary<string, object?> SchemaJson { get; set; } = new Dictionary<string, object?>();

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
