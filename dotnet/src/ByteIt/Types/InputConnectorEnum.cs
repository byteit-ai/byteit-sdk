using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(InputConnectorEnum.InputConnectorEnumSerializer))]
[Serializable]
public readonly record struct InputConnectorEnum : IStringEnum
{
    public static readonly InputConnectorEnum Localfile = new(Values.Localfile);

    public static readonly InputConnectorEnum S3 = new(Values.S3);

    public InputConnectorEnum(string value)
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
    public static InputConnectorEnum FromCustom(string value)
    {
        return new InputConnectorEnum(value);
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

    public static bool operator ==(InputConnectorEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(InputConnectorEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(InputConnectorEnum value) => value.Value;

    public static explicit operator InputConnectorEnum(string value) => new(value);

    internal class InputConnectorEnumSerializer : JsonConverter<InputConnectorEnum>
    {
        public override InputConnectorEnum Read(
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
            return new InputConnectorEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            InputConnectorEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override InputConnectorEnum ReadAsPropertyName(
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
            return new InputConnectorEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            InputConnectorEnum value,
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
