using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ProcessingStatusEnum.ProcessingStatusEnumSerializer))]
[Serializable]
public readonly record struct ProcessingStatusEnum : IStringEnum
{
    public static readonly ProcessingStatusEnum Pending = new(Values.Pending);

    public static readonly ProcessingStatusEnum Processing = new(Values.Processing);

    public static readonly ProcessingStatusEnum Completed = new(Values.Completed);

    public static readonly ProcessingStatusEnum Failed = new(Values.Failed);

    public static readonly ProcessingStatusEnum Queued = new(Values.Queued);

    public ProcessingStatusEnum(string value)
    {
        Value = value;
    }

    /// <summary>
    /// The string value of the enum.
    /// </summary>
    public string Value { get; }

    /// <summary>
    /// Create a string enum with the given value.
    /// </summary>
    public static ProcessingStatusEnum FromCustom(string value)
    {
        return new ProcessingStatusEnum(value);
    }

    public bool Equals(string? other)
    {
        return Value.Equals(other);
    }

    /// <summary>
    /// Returns the string value of the enum.
    /// </summary>
    public override string ToString()
    {
        return Value;
    }

    public static bool operator ==(ProcessingStatusEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(ProcessingStatusEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(ProcessingStatusEnum value) => value.Value;

    public static explicit operator ProcessingStatusEnum(string value) => new(value);

    internal class ProcessingStatusEnumSerializer : JsonConverter<ProcessingStatusEnum>
    {
        public override ProcessingStatusEnum Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            var stringValue =
                reader.GetString()
                ?? throw new global::System.Exception(
                    "The JSON value could not be read as a string."
                );
            return new ProcessingStatusEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ProcessingStatusEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ProcessingStatusEnum ReadAsPropertyName(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            var stringValue =
                reader.GetString()
                ?? throw new global::System.Exception(
                    "The JSON property name could not be read as a string."
                );
            return new ProcessingStatusEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ProcessingStatusEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WritePropertyName(value.Value);
        }
    }

    /// <summary>
    /// Constant strings for enum values
    /// </summary>
    [Serializable]
    public static class Values
    {
        public const string Pending = "pending";

        public const string Processing = "processing";

        public const string Completed = "completed";

        public const string Failed = "failed";

        public const string Queued = "queued";
    }
}
