using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ClassificationJobTypeEnum.ClassificationJobTypeEnumSerializer))]
[Serializable]
public readonly record struct ClassificationJobTypeEnum : IStringEnum
{
    public static readonly ClassificationJobTypeEnum Classification = new(Values.Classification);

    public ClassificationJobTypeEnum(string value)
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
    public static ClassificationJobTypeEnum FromCustom(string value)
    {
        return new ClassificationJobTypeEnum(value);
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

    public static bool operator ==(ClassificationJobTypeEnum value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(ClassificationJobTypeEnum value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(ClassificationJobTypeEnum value) => value.Value;

    public static explicit operator ClassificationJobTypeEnum(string value) => new(value);

    internal class ClassificationJobTypeEnumSerializer : JsonConverter<ClassificationJobTypeEnum>
    {
        public override ClassificationJobTypeEnum Read(
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
            return new ClassificationJobTypeEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ClassificationJobTypeEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ClassificationJobTypeEnum ReadAsPropertyName(
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
            return new ClassificationJobTypeEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ClassificationJobTypeEnum value,
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
        public const string Classification = "classification";
    }
}
