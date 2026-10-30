namespace ByteIt;

public partial interface IByteItClient
{
    public IParseJobsClient ParseJobs { get; }
    public IExtractJobsClient ExtractJobs { get; }
    public IClassificationJobsClient ClassificationJobs { get; }
    public ICustomJobsClient CustomJobs { get; }
    public IJobsClient Jobs { get; }
    public ISchemasClient Schemas { get; }
    public IDocumentClassesClient DocumentClasses { get; }
    public IApiKeysClient ApiKeys { get; }
}
