using global::System.Net.Http;

namespace ByteIt.Core;

internal static class HttpMethodExtensions
{
    public static readonly HttpMethod Patch = new("PATCH");
}
