using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.Schemas;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class ListTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string mockResponse = """
            {
              "detail": "detail",
              "count": 1,
              "schemas": [
                {
                  "name": "name",
                  "schema_json": {
                    "schema_json": {
                      "key": "value"
                    }
                  },
                  "create_time": "2024-01-15T09:30:00.000Z"
                },
                {
                  "name": "name",
                  "schema_json": {
                    "schema_json": {
                      "key": "value"
                    }
                  },
                  "create_time": "2024-01-15T09:30:00.000Z"
                }
              ]
            }
            """;

        Server
            .Given(WireMock.RequestBuilders.Request.Create().WithPath("/v1/schemas/").UsingGet())
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Schemas.ListAsync();
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string mockResponse = """
            {
              "detail": "Retrieved 1 saved schemas.",
              "count": 1,
              "schemas": [
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
              ]
            }
            """;

        Server
            .Given(WireMock.RequestBuilders.Request.Create().WithPath("/v1/schemas/").UsingGet())
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Schemas.ListAsync();
        JsonAssert.AreEqual(response, mockResponse);
    }
}
