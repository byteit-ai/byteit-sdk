using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record DownloadResultJobsRequest
{
    [JsonIgnore]
    public required string Id { get; set; }

    /// <summary>
    /// Custom jobs only: return one ZIP with the result and the job's extra files (under `extras/`) instead of the result alone.
    /// </summary>
    [JsonIgnore]
    public bool? IncludeExtras { get; set; }

    /// <summary>
    /// Optional output format override. When set, the result file with the requested extension is retrieved instead of the default. Case-insensitive.
    /// </summary>
    [JsonIgnore]
    public DownloadResultJobsRequestOutputFormat? OutputFormat { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
