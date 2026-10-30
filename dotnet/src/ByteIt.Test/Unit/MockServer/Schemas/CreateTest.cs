using ByteIt;
using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.Schemas;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class CreateTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string requestJson = """
            {
              "name": "x",
              "schema_json": {
                "schema_json": {
                  "key": "value"
                }
              }
            }
            """;

        const string mockResponse = """
            {
              "name": "name",
              "schema_json": {
                "schema_json": {
                  "key": "value"
                }
              },
              "create_time": "2024-01-15T09:30:00.000Z"
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/schemas/")
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

        var response = await Client.Schemas.CreateAsync(
            new CreateSavedSchemaRequest
            {
                Name = "x",
                SchemaJson = new Dictionary<string, object?>()
                {
                    {
                        "schema_json",
                        new Dictionary<object, object?>() { { "key", "value" } }
                    },
                },
            }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string requestJson = """
            {
              "name": "invoice",
              "schema_json": {
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
              }
            }
            """;

        const string mockResponse = """
            {
              "name": "invoice",
              "schema_json": {
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
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/schemas/")
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

        var response = await Client.Schemas.CreateAsync(
            new CreateSavedSchemaRequest
            {
                Name = "invoice",
                SchemaJson = new Dictionary<string, object?>()
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
            }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }
}
