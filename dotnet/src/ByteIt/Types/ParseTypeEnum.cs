using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ParseTypeEnum.ParseTypeEnumSerializer))]
[Serializable]
public readonly record struct ParseTypeEnum : IStringEnum
{
    public static readonly ParseTypeEnum Auto = new(Values.Auto);

    public static readonly ParseTypeEnum Complex = new(Values.Complex);

    public static readonly ParseTypeEnum Handwritten = new(Values.Handwritten);

    public ParseTypeEnum(string value)
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
    public static ParseTypeEnum FromCustom(string value)
    {
        return new ParseTypeEnum(value);
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

    public static bool operator ==(ParseTypeEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(ParseTypeEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(ParseTypeEnum value) => value.Value;

    public static explicit operator ParseTypeEnum(string value) => new(value);

    internal class ParseTypeEnumSerializer : JsonConverter<ParseTypeEnum>
    {
        public override ParseTypeEnum Read(
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
            return new ParseTypeEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ParseTypeEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ParseTypeEnum ReadAsPropertyName(
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
            return new ParseTypeEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ParseTypeEnum value,
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
        public const string Auto = "auto";

        public const string Complex = "complex";

        public const string Handwritten = "handwritten";
    }
}
