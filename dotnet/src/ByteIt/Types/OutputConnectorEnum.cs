using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(OutputConnectorEnum.OutputConnectorEnumSerializer))]
[Serializable]
public readonly record struct OutputConnectorEnum : IStringEnum
{
    public static readonly OutputConnectorEnum Localfile = new(Values.Localfile);

    public static readonly OutputConnectorEnum S3 = new(Values.S3);

    public OutputConnectorEnum(string value)
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
    public static OutputConnectorEnum FromCustom(string value)
    {
        return new OutputConnectorEnum(value);
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

    public static bool operator ==(OutputConnectorEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(OutputConnectorEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(OutputConnectorEnum value) => value.Value;

    public static explicit operator OutputConnectorEnum(string value) => new(value);

    internal class OutputConnectorEnumSerializer : JsonConverter<OutputConnectorEnum>
    {
        public override OutputConnectorEnum Read(
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
            return new OutputConnectorEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            OutputConnectorEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override OutputConnectorEnum ReadAsPropertyName(
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
            return new OutputConnectorEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            OutputConnectorEnum value,
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
        public const string Localfile = "localfile";

        public const string S3 = "s3";
    }
}
