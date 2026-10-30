using ByteIt.Core;

namespace ByteIt;

[Serializable]
public record CreateCustomJobRequest
{
    public IEnumerable<FileParameter>? Files { get; set; }

    /// <summary>
    /// Optional JSON extraction schema for the custom job.
    /// </summary>
    public Dictionary<string, object?>? Schema { get; set; }

    /// <summary>
    /// Optional user prompt appended to the custom job request.
    /// </summary>
    public string? UserPrompt { get; set; }

    /// <summary>
    /// Optional nickname for easier job identification.
    /// </summary>
    public string? Nickname { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
