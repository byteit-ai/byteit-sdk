using ByteIt.Core;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[Serializable]
public record ListJobsRequest
{
    /// <summary>
    /// Cursor for the next page: pass the `created_at` of the last job you received to get older jobs (ISO 8601).
    /// </summary>
    [JsonIgnore]
    public DateTime? Before { get; set; }

    /// <summary>
    /// Only list jobs of this type.
    /// </summary>
    [JsonIgnore]
    public ListJobsRequestJobType? JobType { get; set; }

    /// <summary>
    /// Maximum number of jobs to return (default 50).
    /// </summary>
    [JsonIgnore]
    public int? Limit { get; set; }

    /// <inheritdoc />
    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
