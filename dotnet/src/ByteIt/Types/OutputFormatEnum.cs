using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(OutputFormatEnum.OutputFormatEnumSerializer))]
[Serializable]
public readonly record struct OutputFormatEnum : IStringEnum
{
    public static readonly OutputFormatEnum Txt = new(Values.Txt);

    public static readonly OutputFormatEnum Json = new(Values.Json);

    public static readonly OutputFormatEnum Html = new(Values.Html);

    public static readonly OutputFormatEnum Md = new(Values.Md);

    public static readonly OutputFormatEnum Zip = new(Values.Zip);

    public OutputFormatEnum(string value)
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
    public static OutputFormatEnum FromCustom(string value)
    {
        return new OutputFormatEnum(value);
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

    public static bool operator ==(OutputFormatEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(OutputFormatEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(OutputFormatEnum value) => value.Value;

    public static explicit operator OutputFormatEnum(string value) => new(value);

    internal class OutputFormatEnumSerializer : JsonConverter<OutputFormatEnum>
    {
        public override OutputFormatEnum Read(
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
            return new OutputFormatEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            OutputFormatEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override OutputFormatEnum ReadAsPropertyName(
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
            return new OutputFormatEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            OutputFormatEnum value,
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
        public const string Txt = "txt";

        public const string Json = "json";

        public const string Html = "html";

        public const string Md = "md";

        public const string Zip = "zip";
    }
}
