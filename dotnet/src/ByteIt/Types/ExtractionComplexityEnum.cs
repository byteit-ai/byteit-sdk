using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ExtractionComplexityEnum.ExtractionComplexityEnumSerializer))]
[Serializable]
public readonly record struct ExtractionComplexityEnum : IStringEnum
{
    public static readonly ExtractionComplexityEnum Low = new(Values.Low);

    public static readonly ExtractionComplexityEnum Medium = new(Values.Medium);

    public static readonly ExtractionComplexityEnum High = new(Values.High);

    public ExtractionComplexityEnum(string value)
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
    public static ExtractionComplexityEnum FromCustom(string value)
    {
        return new ExtractionComplexityEnum(value);
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

    public static bool operator ==(ExtractionComplexityEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(ExtractionComplexityEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(ExtractionComplexityEnum value) => value.Value;

    public static explicit operator ExtractionComplexityEnum(string value) => new(value);

    internal class ExtractionComplexityEnumSerializer : JsonConverter<ExtractionComplexityEnum>
    {
        public override ExtractionComplexityEnum Read(
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
            return new ExtractionComplexityEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ExtractionComplexityEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ExtractionComplexityEnum ReadAsPropertyName(
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
            return new ExtractionComplexityEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ExtractionComplexityEnum value,
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
        public const string Low = "low";

        public const string Medium = "medium";

        public const string High = "high";
    }
}
