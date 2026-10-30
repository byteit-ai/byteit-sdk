using ByteIt.Core;
using global::System.Text.Json;
using global::System.Text.Json.Serialization;

namespace ByteIt;

[JsonConverter(typeof(CodeEnum.CodeEnumSerializer))]
[Serializable]
public readonly record struct CodeEnum : IStringEnum
{
    public static readonly CodeEnum ArchiveEmpty = new(Values.ArchiveEmpty);

    public static readonly CodeEnum ArchiveInvalid = new(Values.ArchiveInvalid);

    public static readonly CodeEnum EmptyModelResponse = new(Values.EmptyModelResponse);

    public static readonly CodeEnum ExtractJobNotFound = new(Values.ExtractJobNotFound);

    public static readonly CodeEnum FileTooLarge = new(Values.FileTooLarge);

    public static readonly CodeEnum Forbidden = new(Values.Forbidden);

    public static readonly CodeEnum ImageCorrupted = new(Values.ImageCorrupted);

    public static readonly CodeEnum InsufficientCredits = new(Values.InsufficientCredits);

    public static readonly CodeEnum InternalServerError = new(Values.InternalServerError);

    public static readonly CodeEnum InvalidValue = new(Values.InvalidValue);

    public static readonly CodeEnum JobAlreadyFinalized = new(Values.JobAlreadyFinalized);

    public static readonly CodeEnum JobNotFound = new(Values.JobNotFound);

    public static readonly CodeEnum MalformedModelResponse = new(Values.MalformedModelResponse);

    public static readonly CodeEnum MissingRequiredField = new(Values.MissingRequiredField);

    public static readonly CodeEnum ModelProcessingError = new(Values.ModelProcessingError);

    public static readonly CodeEnum NoTextExtracted = new(Values.NoTextExtracted);

    public static readonly CodeEnum PdfCorrupted = new(Values.PdfCorrupted);

    public static readonly CodeEnum PdfNotValid = new(Values.PdfNotValid);

    public static readonly CodeEnum PdfPasswordProtected = new(Values.PdfPasswordProtected);

    public static readonly CodeEnum PdfTruncated = new(Values.PdfTruncated);

    public static readonly CodeEnum RefundDestinationMissing = new(Values.RefundDestinationMissing);

    public static readonly CodeEnum ResourceNotFound = new(Values.ResourceNotFound);

    public static readonly CodeEnum ResultExpired = new(Values.ResultExpired);

    public static readonly CodeEnum RtfNotValid = new(Values.RtfNotValid);

    public static readonly CodeEnum ServiceUnavailable = new(Values.ServiceUnavailable);

    public static readonly CodeEnum StateConflict = new(Values.StateConflict);

    public static readonly CodeEnum Unauthorized = new(Values.Unauthorized);

    public static readonly CodeEnum UnsupportedFileType = new(Values.UnsupportedFileType);

    public static readonly CodeEnum UnsupportedOfficeType = new(Values.UnsupportedOfficeType);

    public static readonly CodeEnum UnsupportedSpreadsheet = new(Values.UnsupportedSpreadsheet);

    public static readonly CodeEnum UpstreamError = new(Values.UpstreamError);

    public CodeEnum(string value)
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
    public static CodeEnum FromCustom(string value)
    {
        return new CodeEnum(value);
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

    public static bool operator ==(CodeEnum value1, string value2) => value1.Value.Equals(value2);

    public static bool operator !=(CodeEnum value1, string value2) => !value1.Value.Equals(value2);

    public static explicit operator string(CodeEnum value) => value.Value;

    public static explicit operator CodeEnum(string value) => new(value);

    internal class CodeEnumSerializer : JsonConverter<CodeEnum>
    {
        public override CodeEnum Read(
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
            return new CodeEnum(stringValue);
        }

        public override void Write(
            Utf8JsonWriter writer,
            CodeEnum value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStringValue(value.Value);
        }

        public override CodeEnum ReadAsPropertyName(
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
            return new CodeEnum(stringValue);
        }

        public override void WriteAsPropertyName(
            Utf8JsonWriter writer,
            CodeEnum value,
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
        public const string ArchiveEmpty = "ARCHIVE_EMPTY";

        public const string ArchiveInvalid = "ARCHIVE_INVALID";

        public const string EmptyModelResponse = "EMPTY_MODEL_RESPONSE";

        public const string ExtractJobNotFound = "EXTRACT_JOB_NOT_FOUND";

        public const string FileTooLarge = "FILE_TOO_LARGE";

        public const string Forbidden = "FORBIDDEN";

        public const string ImageCorrupted = "IMAGE_CORRUPTED";

        public const string InsufficientCredits = "INSUFFICIENT_CREDITS";

        public const string InternalServerError = "INTERNAL_SERVER_ERROR";

        public const string InvalidValue = "INVALID_VALUE";

        public const string JobAlreadyFinalized = "JOB_ALREADY_FINALIZED";

        public const string JobNotFound = "JOB_NOT_FOUND";

        public const string MalformedModelResponse = "MALFORMED_MODEL_RESPONSE";

        public const string MissingRequiredField = "MISSING_REQUIRED_FIELD";

        public const string ModelProcessingError = "MODEL_PROCESSING_ERROR";

        public const string NoTextExtracted = "NO_TEXT_EXTRACTED";

        public const string PdfCorrupted = "PDF_CORRUPTED";

        public const string PdfNotValid = "PDF_NOT_VALID";

        public const string PdfPasswordProtected = "PDF_PASSWORD_PROTECTED";

        public const string PdfTruncated = "PDF_TRUNCATED";

        public const string RefundDestinationMissing = "REFUND_DESTINATION_MISSING";

        public const string ResourceNotFound = "RESOURCE_NOT_FOUND";

        public const string ResultExpired = "RESULT_EXPIRED";

        public const string RtfNotValid = "RTF_NOT_VALID";

        public const string ServiceUnavailable = "SERVICE_UNAVAILABLE";

        public const string StateConflict = "STATE_CONFLICT";

        public const string Unauthorized = "UNAUTHORIZED";

        public const string UnsupportedFileType = "UNSUPPORTED_FILE_TYPE";

        public const string UnsupportedOfficeType = "UNSUPPORTED_OFFICE_TYPE";

        public const string UnsupportedSpreadsheet = "UNSUPPORTED_SPREADSHEET";

        public const string UpstreamError = "UPSTREAM_ERROR";
    }
}
