// This file was auto-generated from the ByteIt API definition.

import * as ByteIt from "../../src/api/index";
import { ByteItClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("DocumentClassesClient", () => {
    test("list (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            detail: "Retrieved 1 document classes.",
            count: 1,
            classes: [
                {
                    id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
                    label: "invoice",
                    description: "A bill requesting payment",
                    scope: "custom",
                },
            ],
        };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentClasses.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("list (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("list (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("list (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("list (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("list (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("list (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("list (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("list (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("list (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("list (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.list();
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "invoice", description: "A bill requesting payment" };
        const rawResponseBody = {
            id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            label: "invoice",
            description: "A bill requesting payment",
            scope: "custom",
        };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentClasses.create({
            label: "invoice",
            description: "A bill requesting payment",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("create (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("create (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("create (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("create (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("create (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("create (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("create (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("create (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("create (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { label: "x", description: "x" };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/document-classes/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.create({
                label: "x",
                description: "x",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("get (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            label: "invoice",
            description: "A bill requesting payment",
            scope: "custom",
        };

        server
            .mockEndpoint()
            .get("/v1/document-classes/2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e/")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentClasses.get({
            id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("get (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("get (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("get (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("get (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("get (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("get (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("get (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("get (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("get (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/document-classes/id/")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("update (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { description: "A bill or invoice requesting payment" };
        const rawResponseBody = {
            id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            label: "invoice",
            description: "A bill or invoice requesting payment",
            scope: "custom",
        };

        server
            .mockEndpoint()
            .put("/v1/document-classes/2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentClasses.update({
            id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
            description: "A bill or invoice requesting payment",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("update (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("update (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("update (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("update (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("update (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("update (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("update (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("update (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("update (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("update (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .put("/v1/document-classes/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.update({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("delete (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/v1/document-classes/2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e/")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.documentClasses.delete({
            id: "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
        });
        expect(response).toEqual(undefined);
    });

    test("delete (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("delete (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("delete (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("delete (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("delete (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("delete (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("delete (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("delete (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("delete (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("delete (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/document-classes/id/")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.documentClasses.delete({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });
});
