using ByteIt.Core;

namespace ByteIt;

[Serializable]
public record CreateClassificationJobRequest
{
    public required FileParameter File { get; set; }

    /// <summary>
    /// Optional list of {label, description} objects. When omitted, system default classes are used. When provided, only these classes are used.
    /// </summary>
    public IEnumerable<ClassificationClassEntryRequest>? Classes { get; set; }

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
