using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CreateApiKeyRequest
{
    /// <summary>
    /// Unique name for the key (per user).
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    /// <summary>
    /// Days until the key expires. Omit for a key that does not expire.
    /// </summary>
    [JsonPropertyName("expires_in_days")]
    public int? ExpiresInDays { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
