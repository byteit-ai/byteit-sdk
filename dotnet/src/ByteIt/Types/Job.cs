// ReSharper disable NullableWarningSuppressionIsUsed
// ReSharper disable InconsistentNaming

using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Nodes;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(Job.JsonConverter))]
[Serializable]
public record Job
{
    internal Job(string type, object? value)
    {
        JobType = type;
        Value = value;
    }

    /// <summary>
    /// Create an instance of Job with <see cref="Job.Parse"/>.
    /// </summary>
    public Job(Job.Parse value)
    {
        JobType = "parse";
        Value = value.Value;
    }

    /// <summary>
    /// Create an instance of Job with <see cref="Job.Extract"/>.
    /// </summary>
    public Job(Job.Extract value)
    {
        JobType = "extract";
        Value = value.Value;
    }

    /// <summary>
    /// Create an instance of Job with <see cref="Job.Classification"/>.
    /// </summary>
    public Job(Job.Classification value)
    {
        JobType = "classification";
        Value = value.Value;
    }

    /// <summary>
    /// Create an instance of Job with <see cref="Job.Custom"/>.
    /// </summary>
    public Job(Job.Custom value)
    {
        JobType = "custom";
        Value = value.Value;
    }

    /// <summary>
    /// Discriminant value
    /// </summary>
    [JsonPropertyName("job_type")]
    public string JobType { get; internal set; }

    /// <summary>
    /// Discriminated union value
    /// </summary>
    public object? Value { get; internal set; }

    /// <summary>
    /// Returns true if <see cref="JobType"/> is "parse"
    /// </summary>
    public bool IsParse => JobType == "parse";

    /// <summary>
    /// Returns true if <see cref="JobType"/> is "extract"
    /// </summary>
    public bool IsExtract => JobType == "extract";

    /// <summary>
    /// Returns true if <see cref="JobType"/> is "classification"
    /// </summary>
    public bool IsClassification => JobType == "classification";

    /// <summary>
    /// Returns true if <see cref="JobType"/> is "custom"
    /// </summary>
    public bool IsCustom => JobType == "custom";

    /// <summary>
    /// Returns the value as a <see cref="ByteIt.ParseJob"/> if <see cref="JobType"/> is 'parse', otherwise throws an exception.
    /// </summary>
    /// <exception cref="Exception">Thrown when <see cref="JobType"/> is not 'parse'.</exception>
    public ByteIt.ParseJob AsParse() =>
        IsParse
            ? (ByteIt.ParseJob)Value!
            : throw new global::System.Exception("Job.JobType is not 'parse'");

    /// <summary>
    /// Returns the value as a <see cref="ByteIt.ExtractJob"/> if <see cref="JobType"/> is 'extract', otherwise throws an exception.
    /// </summary>
    /// <exception cref="Exception">Thrown when <see cref="JobType"/> is not 'extract'.</exception>
    public ByteIt.ExtractJob AsExtract() =>
        IsExtract
            ? (ByteIt.ExtractJob)Value!
            : throw new global::System.Exception("Job.JobType is not 'extract'");

    /// <summary>
    /// Returns the value as a <see cref="ByteIt.ClassificationJob"/> if <see cref="JobType"/> is 'classification', otherwise throws an exception.
    /// </summary>
    /// <exception cref="Exception">Thrown when <see cref="JobType"/> is not 'classification'.</exception>
    public ByteIt.ClassificationJob AsClassification() =>
        IsClassification
            ? (ByteIt.ClassificationJob)Value!
            : throw new global::System.Exception("Job.JobType is not 'classification'");

    /// <summary>
    /// Returns the value as a <see cref="ByteIt.CustomJob"/> if <see cref="JobType"/> is 'custom', otherwise throws an exception.
    /// </summary>
    /// <exception cref="Exception">Thrown when <see cref="JobType"/> is not 'custom'.</exception>
    public ByteIt.CustomJob AsCustom() =>
        IsCustom
            ? (ByteIt.CustomJob)Value!
            : throw new global::System.Exception("Job.JobType is not 'custom'");

    public T Match<T>(
        Func<ByteIt.ParseJob, T> onParse,
        Func<ByteIt.ExtractJob, T> onExtract,
        Func<ByteIt.ClassificationJob, T> onClassification,
        Func<ByteIt.CustomJob, T> onCustom,
        Func<string, object?, T> onUnknown_
    )
    {
        return JobType switch
        {
            "parse" => onParse(AsParse()),
            "extract" => onExtract(AsExtract()),
            "classification" => onClassification(AsClassification()),
            "custom" => onCustom(AsCustom()),
            _ => onUnknown_(JobType, Value),
        };
    }

    public void Visit(
        Action<ByteIt.ParseJob> onParse,
        Action<ByteIt.ExtractJob> onExtract,
        Action<ByteIt.ClassificationJob> onClassification,
        Action<ByteIt.CustomJob> onCustom,
        Action<string, object?> onUnknown_
    )
    {
        switch (JobType)
        {
            case "parse":
                onParse(AsParse());
                break;
            case "extract":
                onExtract(AsExtract());
                break;
            case "classification":
                onClassification(AsClassification());
                break;
            case "custom":
                onCustom(AsCustom());
                break;
            default:
                onUnknown_(JobType, Value);
                break;
        }
    }

    /// <summary>
    /// Attempts to cast the value to a <see cref="ByteIt.ParseJob"/> and returns true if successful.
    /// </summary>
    public bool TryAsParse(out ByteIt.ParseJob? value)
    {
        if (JobType == "parse")
        {
            value = (ByteIt.ParseJob)Value!;
            return true;
        }
        value = null;
        return false;
    }

    /// <summary>
    /// Attempts to cast the value to a <see cref="ByteIt.ExtractJob"/> and returns true if successful.
    /// </summary>
    public bool TryAsExtract(out ByteIt.ExtractJob? value)
    {
        if (JobType == "extract")
        {
            value = (ByteIt.ExtractJob)Value!;
            return true;
        }
        value = null;
        return false;
    }

    /// <summary>
    /// Attempts to cast the value to a <see cref="ByteIt.ClassificationJob"/> and returns true if successful.
    /// </summary>
    public bool TryAsClassification(out ByteIt.ClassificationJob? value)
    {
        if (JobType == "classification")
        {
            value = (ByteIt.ClassificationJob)Value!;
            return true;
        }
        value = null;
        return false;
    }

    /// <summary>
    /// Attempts to cast the value to a <see cref="ByteIt.CustomJob"/> and returns true if successful.
    /// </summary>
    public bool TryAsCustom(out ByteIt.CustomJob? value)
    {
        if (JobType == "custom")
        {
            value = (ByteIt.CustomJob)Value!;
            return true;
        }
        value = null;
        return false;
    }

    public override string ToString() => JsonUtils.Serialize(this);

    public static implicit operator Job(Job.Parse value) => new(value);

    public static implicit operator Job(Job.Extract value) => new(value);

    public static implicit operator Job(Job.Classification value) => new(value);

    public static implicit operator Job(Job.Custom value) => new(value);

    [Serializable]
    internal sealed class JsonConverter : JsonConverter<Job>
    {
        public override bool CanConvert(global::System.Type typeToConvert) =>
            typeof(Job).IsAssignableFrom(typeToConvert);

        public override Job Read(
            ref Utf8JsonReader reader,
            global::System.Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            var json = JsonElement.ParseValue(ref reader);
            if (!json.TryGetProperty("job_type", out var discriminatorElement))
            {
                throw new JsonException("Missing discriminator property 'job_type'");
            }
            if (discriminatorElement.ValueKind != JsonValueKind.String)
            {
                if (discriminatorElement.ValueKind == JsonValueKind.Null)
                {
                    throw new JsonException("Discriminator property 'job_type' is null");
                }

                throw new JsonException(
                    $"Discriminator property 'job_type' is not a string, instead is {discriminatorElement.ToString()}"
                );
            }

            var discriminator =
                discriminatorElement.GetString()
                ?? throw new JsonException("Discriminator property 'job_type' is null");

            var value = discriminator switch
            {
                "parse" => json.Deserialize<ByteIt.ParseJob?>(options)
                    ?? throw new JsonException("Failed to deserialize ByteIt.ParseJob"),
                "extract" => json.Deserialize<ByteIt.ExtractJob?>(options)
                    ?? throw new JsonException("Failed to deserialize ByteIt.ExtractJob"),
                "classification" => json.Deserialize<ByteIt.ClassificationJob?>(options)
                    ?? throw new JsonException("Failed to deserialize ByteIt.ClassificationJob"),
                "custom" => json.Deserialize<ByteIt.CustomJob?>(options)
                    ?? throw new JsonException("Failed to deserialize ByteIt.CustomJob"),
                _ => json.Deserialize<object?>(options),
            };
            return new Job(discriminator, value);
        }

        public override void Write(Utf8JsonWriter writer, Job value, JsonSerializerOptions options)
        {
            JsonNode json =
                value.JobType switch
                {
                    "parse" => JsonSerializer.SerializeToNode(value.Value, options),
                    "extract" => JsonSerializer.SerializeToNode(value.Value, options),
                    "classification" => JsonSerializer.SerializeToNode(value.Value, options),
                    "custom" => JsonSerializer.SerializeToNode(value.Value, options),
                    _ => JsonSerializer.SerializeToNode(value.Value, options),
                } ?? new JsonObject();
            json["job_type"] = value.JobType;
            json.WriteTo(writer, options);
        }

        public override Job ReadAsPropertyName(
            ref Utf8JsonReader reader,
            global::System.Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            var stringValue =
                reader.GetString()
                ?? throw new JsonException("The JSON property name could not be read as a string.");
            return new Job(stringValue, stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            Job value,
            JsonSerializerOptions options
        )
        {
            writer.WritePropertyName(value.JobType);
        }
    }

    /// <summary>
    /// Discriminated union type for parse
    /// </summary>
    [Serializable]
    public struct Parse
    {
        public Parse(ByteIt.ParseJob value)
        {
            Value = value;
        }

        internal ByteIt.ParseJob Value { get; set; }

        public override string ToString() => Value.ToString() ?? "null";

        public static implicit operator Job.Parse(ByteIt.ParseJob value) => new(value);
    }

    /// <summary>
    /// Discriminated union type for extract
    /// </summary>
    [Serializable]
    public struct Extract
    {
        public Extract(ByteIt.ExtractJob value)
        {
            Value = value;
        }

        internal ByteIt.ExtractJob Value { get; set; }

        public override string ToString() => Value.ToString() ?? "null";

        public static implicit operator Job.Extract(ByteIt.ExtractJob value) => new(value);
    }

    /// <summary>
    /// Discriminated union type for classification
    /// </summary>
    [Serializable]
    public struct Classification
    {
        public Classification(ByteIt.ClassificationJob value)
        {
            Value = value;
        }

        internal ByteIt.ClassificationJob Value { get; set; }

        public override string ToString() => Value.ToString() ?? "null";

        public static implicit operator Job.Classification(ByteIt.ClassificationJob value) =>
            new(value);
    }

    /// <summary>
    /// Discriminated union type for custom
    /// </summary>
    [Serializable]
    public struct Custom
    {
        public Custom(ByteIt.CustomJob value)
        {
            Value = value;
        }

        internal ByteIt.CustomJob Value { get; set; }

        public override string ToString() => Value.ToString() ?? "null";

        public static implicit operator Job.Custom(ByteIt.CustomJob value) => new(value);
    }
}
