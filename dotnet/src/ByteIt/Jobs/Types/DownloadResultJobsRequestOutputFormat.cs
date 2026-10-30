using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(
    typeof(DownloadResultJobsRequestOutputFormat.DownloadResultJobsRequestOutputFormatSerializer)
)]
[Serializable]
public readonly record struct DownloadResultJobsRequestOutputFormat : IStringEnum
{
    public static readonly DownloadResultJobsRequestOutputFormat Txt = new(Values.Txt);

    public static readonly DownloadResultJobsRequestOutputFormat Json = new(Values.Json);

    public static readonly DownloadResultJobsRequestOutputFormat Html = new(Values.Html);

    public static readonly DownloadResultJobsRequestOutputFormat Md = new(Values.Md);

    public static readonly DownloadResultJobsRequestOutputFormat Zip = new(Values.Zip);

    public DownloadResultJobsRequestOutputFormat(string value)
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
    public static DownloadResultJobsRequestOutputFormat FromCustom(string value)
    {
        return new DownloadResultJobsRequestOutputFormat(value);
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

    public static bool operator ==(DownloadResultJobsRequestOutputFormat value1, string value2) =>
        value1.Value.Equals(value2);

    public static bool operator !=(DownloadResultJobsRequestOutputFormat value1, string value2) =>
        !value1.Value.Equals(value2);

    public static explicit operator string(DownloadResultJobsRequestOutputFormat value) =>
        value.Value;

    public static explicit operator DownloadResultJobsRequestOutputFormat(string value) =>
        new(value);

    internal class DownloadResultJobsRequestOutputFormatSerializer
        : JsonConverter<DownloadResultJobsRequestOutputFormat>
    {
        public override DownloadResultJobsRequestOutputFormat Read(
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
            return new DownloadResultJobsRequestOutputFormat(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            DownloadResultJobsRequestOutputFormat value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override DownloadResultJobsRequestOutputFormat ReadAsPropertyName(
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
            return new DownloadResultJobsRequestOutputFormat(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            DownloadResultJobsRequestOutputFormat value,
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
