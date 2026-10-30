using ByteIt;
using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.Jobs;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class GetTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string mockResponse = """
            {
              "job_type": "parse",
              "job_id": "job_id",
              "nickname": "nickname",
              "processing_status": "pending",
              "created_at": "2024-01-15T09:30:00.000Z",
              "updated_at": "2024-01-15T09:30:00.000Z",
              "processing_time_seconds": 1.1,
              "credits_cost": 1.1,
              "error": "error",
              "error_code": "error_code",
              "file_name": "file_name",
              "page_count": 1,
              "file_size": 1,
              "output_format": "output_format",
              "processing_options": {
                "languages": [
                  "languages",
                  "languages"
                ],
                "page_range": "",
                "image_annotations": true,
                "force_image_annotations": true,
                "table_enrichment": true,
                "parse_type": "auto",
                "output_format": "txt"
              },
              "input_connector": "input_connector",
              "output_connector": "output_connector",
              "billable_unit": "billable_unit",
              "billable_quantity": 1
            }
            """;

        Server
            .Given(WireMock.RequestBuilders.Request.Create().WithPath("/v1/jobs/id/").UsingGet())
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Jobs.GetAsync(new GetJobsRequest { Id = "id" });
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string mockResponse = """
            {
              "job_type": "parse",
              "job_id": "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
              "nickname": "invoice-march",
              "processing_status": "completed",
              "file_name": "invoice.pdf",
              "page_count": 2,
              "input_connector": "localfile",
              "output_connector": "localfile"
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/jobs/3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b/")
                    .UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Jobs.GetAsync(
            new GetJobsRequest { Id = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b" }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }
}
