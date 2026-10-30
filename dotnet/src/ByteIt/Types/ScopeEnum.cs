using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(ScopeEnum.ScopeEnumSerializer))]
[Serializable]
public readonly record struct ScopeEnum : IStringEnum
{
    public static readonly ScopeEnum Default = new(Values.Default);

    public static readonly ScopeEnum Custom = new(Values.Custom);

    public ScopeEnum(string value)
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
    public static ScopeEnum FromCustom(string value)
    {
        return new ScopeEnum(value);
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

    public static bool operator ==(ScopeEnum value1, string value2) => value1.Value.Equals(value2);

    public static bool operator !=(ScopeEnum value1, string value2) => !value1.Value.Equals(value2);

    public static explicit operator string(ScopeEnum value) => value.Value;

    public static explicit operator ScopeEnum(string value) => new(value);

    internal class ScopeEnumSerializer : JsonConverter<ScopeEnum>
    {
        public override ScopeEnum Read(
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
            return new ScopeEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            ScopeEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override ScopeEnum ReadAsPropertyName(
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
            return new ScopeEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            ScopeEnum value,
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
        public const string Default = "default";

        public const string Custom = "custom";
    }
}
