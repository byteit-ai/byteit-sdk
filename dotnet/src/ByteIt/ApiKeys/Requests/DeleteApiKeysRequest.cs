using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record DeleteApiKeysRequest
{
    /// <summary>
    /// The unique key name to delete (per user).
    /// </summary>
    [JsonIgnore]
    public required string Name { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
