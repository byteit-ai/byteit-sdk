using ByteIt.Core;

namespace ByteIt;

public partial class ByteItClient : IByteItClient
{
    private readonly RawClient _client;

    public ByteItClient(string? apiKey = null, ClientOptions? clientOptions = null)
    {
        clientOptions ??= new ClientOptions();
        var platformHeaders = new Headers(
            new Dictionary<string, string>()
            {
                { "X-ByteIt-Language", "C#" },
                { "X-ByteIt-SDK-Name", "ByteIt" },
                { "X-ByteIt-SDK-Version", global::ByteIt.Version.Current },
            }
        );
        foreach (var header in platformHeaders)
        {
            if (!clientOptions.Headers.ContainsKey(header.Key))
            {
                clientOptions.Headers[header.Key] = header.Value;
            }
        }
        var clientOptionsWithAuth = clientOptions.Clone();
        var authHeaders = new Headers(
            new Dictionary<string, string>() { { "X-API-Key", apiKey ?? "" } }
        );
        foreach (var header in authHeaders)
        {
            clientOptionsWithAuth.Headers[header.Key] = header.Value;
        }
        _client = new RawClient(clientOptionsWithAuth);
        ParseJobs = new ParseJobsClient(_client);
        ExtractJobs = new ExtractJobsClient(_client);
        ClassificationJobs = new ClassificationJobsClient(_client);
        CustomJobs = new CustomJobsClient(_client);
        Jobs = new JobsClient(_client);
        Schemas = new SchemasClient(_client);
        DocumentClasses = new DocumentClassesClient(_client);
        ApiKeys = new ApiKeysClient(_client);
    }

    public IParseJobsClient ParseJobs { get; }

    public IExtractJobsClient ExtractJobs { get; }

    public IClassificationJobsClient ClassificationJobs { get; }

    public ICustomJobsClient CustomJobs { get; }

    public IJobsClient Jobs { get; }

    public ISchemasClient Schemas { get; }

    public IDocumentClassesClient DocumentClasses { get; }

    public IApiKeysClient ApiKeys { get; }
}
