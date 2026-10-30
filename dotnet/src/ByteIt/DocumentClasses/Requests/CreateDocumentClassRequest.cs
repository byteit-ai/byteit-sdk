using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record CreateDocumentClassRequest
{
    /// <summary>
    /// Class label returned by the classifier.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; set; }

    /// <summary>
    /// Short description of when this class applies.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
