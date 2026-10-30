using ByteIt;
using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.ExtractJobs;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class CreateTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string requestJson = """
            {
              "parse_job_id": "x",
              "schema": {
                "schema": {
                  "key": "value"
                }
              }
            }
            """;

        const string mockResponse = """
            {
              "detail": "detail",
              "extract_job": {
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
                "job_type": "extract",
                "input_job_id": "input_job_id",
                "extraction_schema": {
                  "key": "value"
                },
                "extraction_complexity": "low",
                "billable_unit": "billable_unit",
                "billable_quantity": 1
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/jobs/extract-jobs/")
                    .WithHeader("Content-Type", "application/json")
                    .UsingPost()
                    .WithBodyAsJson(requestJson)
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.ExtractJobs.CreateAsync(
            new CreateExtractJobRequest
            {
                ParseJobId = "x",
                Schema = new Dictionary<string, object?>()
                {
                    {
                        "schema",
                        new Dictionary<object, object?>() { { "key", "value" } }
                    },
                },
                ExtractionComplexity = null,
            }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string requestJson = """
            {
              "parse_job_id": "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
              "schema": {
                "type": "object",
                "properties": {
                  "invoice_number": {
                    "type": "string",
                    "description": "Invoice number"
                  },
                  "total": {
                    "type": "string",
                    "description": "Total amount due"
                  }
                }
              },
              "extraction_complexity": "medium"
            }
            """;

        const string mockResponse = """
            {
              "detail": "Extract job created.",
              "extract_job": {
                "job_id": "7c4e2b1a-9d8f-4a6e-b5c3-2d1e0f9a8b7c",
                "job_type": "extract",
                "input_job_id": "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
                "processing_status": "pending",
                "extraction_schema": {
                  "type": "object",
                  "properties": {
                    "invoice_number": {
                      "type": "string",
                      "description": "Invoice number"
                    },
                    "total": {
                      "type": "string",
                      "description": "Total amount due"
                    }
                  }
                },
                "extraction_complexity": "medium"
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/jobs/extract-jobs/")
                    .WithHeader("Content-Type", "application/json")
                    .UsingPost()
                    .WithBodyAsJson(requestJson)
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.ExtractJobs.CreateAsync(
            new CreateExtractJobRequest
            {
                ParseJobId = "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
                Schema = new Dictionary<string, object?>()
                {
                    { "type", "object" },
                    {
                        "properties",
                        new Dictionary<object, object?>()
                        {
                            {
                                "invoice_number",
                                new Dictionary<object, object?>()
                                {
                                    { "description", "Invoice number" },
                                    { "type", "string" },
                                }
                            },
                            {
                                "total",
                                new Dictionary<object, object?>()
                                {
                                    { "description", "Total amount due" },
                                    { "type", "string" },
                                }
                            },
                        }
                    },
                },
                ExtractionComplexity = ExtractionComplexityEnum.Medium,
            }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }
}
