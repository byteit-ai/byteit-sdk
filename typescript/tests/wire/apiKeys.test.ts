// This file was auto-generated from the ByteIt API definition.

import * as ByteIt from "../../src/api/index";
import { ByteItClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ApiKeysClient", () => {
    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "ci-pipeline", expires_in_days: 90 };
        const rawResponseBody = {
            name: "ci-pipeline",
            detail: "API key created.",
            api_key_id: "4d5e6f7a-8b9c-4d0e-a1f2-b3c4d5e6f7a8",
            key_name: "ci-pipeline",
            active: true,
            expires_at: "2027-01-25T00:00:00Z",
            raw_key: "4d5e6f7a-8b9c-4d0e-a1f2-b3c4d5e6f7a8.SECRET_SHOWN_ONLY_ONCE",
        };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.apiKeys.create({
            name: "ci-pipeline",
            expires_in_days: 90,
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("create (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("create (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("create (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("create (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("create (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("create (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("create (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("create (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("create (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/api-keys/create/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.create({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("delete (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { name: "ci-pipeline", detail: "API key deleted." };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.apiKeys.delete({
            name: "ci-pipeline",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("delete (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("delete (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("delete (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("delete (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("delete (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("delete (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("delete (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("delete (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("delete (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/api-keys/delete/")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.apiKeys.delete({
                name: "x",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("list (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            name: "",
            detail: "Retrieved 1 API keys.",
            count: 1,
            keys: [{ id: "4d5e6f7a-8b9c-4d0e-a1f2-b3c4d5e6f7a8", name: "ci-pipeline", active: true }],
        };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.apiKeys.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("list (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(400).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("list (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("list (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("list (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("list (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(409).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("list (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(410).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("list (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(413).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("list (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(422).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("list (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(429).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("list (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/api-keys/list/").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.apiKeys.list();
        }).rejects.toThrow(ByteIt.InternalServerError);
    });
});
