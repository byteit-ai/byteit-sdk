using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ExtractJobTypeEnum.ExtractJobTypeEnumSerializer))]
[Serializable]
public readonly record struct ExtractJobTypeEnum : IStringEnum
{
    public static readonly ExtractJobTypeEnum Extract = new(Values.Extract);

    public ExtractJobTypeEnum(string value)
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
    public static ExtractJobTypeEnum FromCustom(string value)
    {
        return new ExtractJobTypeEnum(value);
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

    public static bool operator ==(ExtractJobTypeEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(ExtractJobTypeEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(ExtractJobTypeEnum value) => value.Value;

    public static explicit operator ExtractJobTypeEnum(string value) => new(value);

    internal class ExtractJobTypeEnumSerializer : JsonConverter<ExtractJobTypeEnum>
    {
        public override ExtractJobTypeEnum Read(
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
            return new ExtractJobTypeEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ExtractJobTypeEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ExtractJobTypeEnum ReadAsPropertyName(
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
            return new ExtractJobTypeEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ExtractJobTypeEnum value,
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
        public const string Extract = "extract";
    }
}
