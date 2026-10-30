using ByteIt;
using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.DocumentClasses;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class UpdateTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string requestJson = """
            {}
            """;

        const string mockResponse = """
            {
              "id": "id",
              "label": "label",
              "description": "description",
              "scope": "default",
              "create_time": "2024-01-15T09:30:00.000Z"
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/document-classes/id/")
                    .WithHeader("Content-Type", "application/json")
                    .UsingPut()
                    .WithBodyAsJson(requestJson)
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.DocumentClasses.UpdateAsync(
            new UpdateDocumentClassRequest
            {
                Id = "id",
                Label = null,
                Description = null,
            }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string requestJson = """
            {
              "description": "A bill or invoice requesting payment"
            }
            """;

        const string mockResponse = """
            {
              "id": "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
              "label": "invoice",
              "description": "A bill or invoice requesting payment",
              "scope": "custom"
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/document-classes/2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e/")
                    .WithHeader("Content-Type", "application/json")
                    .UsingPut()
                    .WithBodyAsJson(requestJson)
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.DocumentClasses.UpdateAsync(
            new UpdateDocumentClassRequest
            {
                Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
                Description = "A bill or invoice requesting payment",
            }
        );
        JsonAssert.AreEqual(response, mockResponse);
    }
}
