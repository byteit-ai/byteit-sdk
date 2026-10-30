using ByteIt;
using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.Jobs;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class GetStatusTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string mockResponse = """
            {
              "processing_status": "processing_status",
              "progress": 1,
              "message": "message"
            }
            """;

        Server
            .Given(
                WireMock.RequestBuilders.Request.Create().WithPath("/v1/jobs/id/status/").UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Jobs.GetStatusAsync(new GetStatusJobsRequest { Id = "id" });
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string mockResponse = """
            {
              "processing_status": "processing",
              "progress": 60
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/jobs/3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b/status/")
                    .UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Jobs.GetStatusAsync(
            new GetStatusJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }
}
