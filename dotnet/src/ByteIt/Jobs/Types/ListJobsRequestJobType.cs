using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ListJobsRequestJobType.ListJobsRequestJobTypeSerializer))]
[Serializable]
public readonly record struct ListJobsRequestJobType : IStringEnum
{
    public static readonly ListJobsRequestJobType Parse = new(Values.Parse);

    public static readonly ListJobsRequestJobType Extract = new(Values.Extract);

    public static readonly ListJobsRequestJobType Schema = new(Values.Schema);

    public static readonly ListJobsRequestJobType Classification = new(Values.Classification);

    public static readonly ListJobsRequestJobType Custom = new(Values.Custom);

    public ListJobsRequestJobType(string value)
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
    public static ListJobsRequestJobType FromCustom(string value)
    {
        return new ListJobsRequestJobType(value);
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

    public static bool operator ==(ListJobsRequestJobType value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(ListJobsRequestJobType value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(ListJobsRequestJobType value) => value.Value;

    public static explicit operator ListJobsRequestJobType(string value) => new(value);

    internal class ListJobsRequestJobTypeSerializer : JsonConverter<ListJobsRequestJobType>
    {
        public override ListJobsRequestJobType Read(
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
            return new ListJobsRequestJobType(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ListJobsRequestJobType value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ListJobsRequestJobType ReadAsPropertyName(
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
            return new ListJobsRequestJobType(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ListJobsRequestJobType value,
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
        public const string Parse = "parse";

        public const string Extract = "extract";

        public const string Schema = "schema";

        public const string Classification = "classification";

        public const string Custom = "custom";
    }
}
