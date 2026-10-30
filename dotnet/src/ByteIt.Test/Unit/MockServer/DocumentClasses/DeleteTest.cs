using ByteIt;
using ByteIt.Test.Unit.MockServer;
using NUnit.Framework;

namespace ByteIt.Test.Unit.MockServer.DocumentClasses;

[TestFixture]
[Parallelizable(ParallelScope.Self)]
public class DeleteTest : BaseMockServerTest
{
    [NUnit.Framework.Test]
    public void MockServerTest_1()
    {
        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/document-classes/id/")
                    .UsingDelete()
            )
            .RespondWith(WireMock.ResponseBuilders.Response.Create().WithStatusCode(200));

        Assert.DoesNotThrowAsync(async () =>
            await Client.DocumentClasses.DeleteAsync(new DeleteDocumentClassesRequest { Id = "id" })
        );
    }

    [NUnit.Framework.Test]
    public void MockServerTest_2()
    {
        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v1/document-classes/2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e/")
                    .UsingDelete()
            )
            .RespondWith(WireMock.ResponseBuilders.Response.Create().WithStatusCode(200));

        Assert.DoesNotThrowAsync(async () =>
            await Client.DocumentClasses.DeleteAsync(
                new DeleteDocumentClassesRequest { Id = "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e" }
            )
        );
    }
}
