using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record PatchedUpdateJobNicknameRequest
{
    [JsonIgnore]
    public required string Id { get; set; }

    /// <summary>
    /// Optional display nickname for the job.
    /// </summary>
    [JsonPropertyName("nickname")]
    public string? Nickname { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
