using ByteIt;
using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.Schemas;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class GetTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
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
                WireMock.RequestBuilders.Request.Create().WithPath("/v1/schemas/name/").UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Schemas.GetAsync(new GetSchemasRequest { Name = "name" });
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
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
                    .WithPath("/v1/schemas/invoice/")
                    .UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Schemas.GetAsync(new GetSchemasRequest { Name = "invoice" });
        JsonAssert.AreEqual(response, mockResponse);
    }
}
