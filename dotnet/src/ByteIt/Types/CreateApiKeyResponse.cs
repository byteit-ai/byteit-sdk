using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CreateApiKeyResponse : IJsonOnDeserialized
{
    [JsonExtensionData]
    private readonly IDictionary<string, JsonElement> _extensionData =
        new Dictionary<string, JsonElement>();

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("name")]
    public string? Name { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("uid")]
    public string? Uid { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("create_time")]
    public DateTime? CreateTime { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("update_time")]
    public DateTime? UpdateTime { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("delete_time")]
    public DateTime? DeleteTime { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("detail")]
    public string? Detail { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("api_key_id")]
    public string? ApiKeyId { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("key_name")]
    public string? KeyName { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("active")]
    public bool? Active { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("expires_at")]
    public DateTime? ExpiresAt { get; set; }

    [JsonAccess(JsonAccessType.ReadOnly)]
    [JsonPropertyName("raw_key")]
    public string? RawKey { get; set; }

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
