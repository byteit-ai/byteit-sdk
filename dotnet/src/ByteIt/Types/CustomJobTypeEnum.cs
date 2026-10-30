using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(CustomJobTypeEnum.CustomJobTypeEnumSerializer))]
[Serializable]
public readonly record struct CustomJobTypeEnum : IStringEnum
{
    public static readonly CustomJobTypeEnum Custom = new(Values.Custom);

    public CustomJobTypeEnum(string value)
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
    public static CustomJobTypeEnum FromCustom(string value)
    {
        return new CustomJobTypeEnum(value);
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

    public static bool operator ==(CustomJobTypeEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(CustomJobTypeEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(CustomJobTypeEnum value) => value.Value;

    public static explicit operator CustomJobTypeEnum(string value) => new(value);

    internal class CustomJobTypeEnumSerializer : JsonConverter<CustomJobTypeEnum>
    {
        public override CustomJobTypeEnum Read(
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
            return new CustomJobTypeEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            CustomJobTypeEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override CustomJobTypeEnum ReadAsPropertyName(
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
            return new CustomJobTypeEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            CustomJobTypeEnum value,
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
        public const string Custom = "custom";
    }
}
