using ByteIt.Test.Unit.MockServer;
using ByteIt.Test.Utils;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.ApiKeys;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class ListTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public async Task MockServerTest_1()
    {
        const string mockResponse = """
            {}
            """;

        Server
            .Given(
                WireMock.RequestBuilders.Request.Create().WithPath("/v1/api-keys/list/").UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.ApiKeys.ListAsync();
        JsonAssert.AreEqual(response, mockResponse);
    }

    [NUnit.Framework.Test]
    public async Task MockServerTest_2()
    {
        const string mockResponse = """
            {}
            """;

        Server
            .Given(
                WireMock.RequestBuilders.Request.Create().WithPath("/v1/api-keys/list/").UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.ApiKeys.ListAsync();
        JsonAssert.AreEqual(response, mockResponse);
    }
}
