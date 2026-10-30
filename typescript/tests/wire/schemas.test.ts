// This file was auto-generated from the ByteIt API definition.

import * as ByteIt from "../../src/api/index";
import { ByteItClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("SchemasClient", () => {
    test("list (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            detail: "Retrieved 1 saved schemas.",
            count: 1,
            schemas: [
                {
                    name: "invoice",
                    schema_json: {
                        type: "object",
                        properties: {
                            invoice_number: { type: "string", description: "Invoice number" },
                            total: { type: "string", description: "Total amount due" },
                        },
                    },
                },
            ],
        };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.schemas.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("list (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(400).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("list (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("list (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("list (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("list (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(409).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("list (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(410).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("list (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(413).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("list (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(422).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("list (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(429).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("list (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.list();
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            name: "invoice",
            schema_json: {
                type: "object",
                properties: {
                    invoice_number: { type: "string", description: "Invoice number" },
                    total: { type: "string", description: "Total amount due" },
                },
            },
        };
        const rawResponseBody = {
            name: "invoice",
            schema_json: {
                type: "object",
                properties: {
                    invoice_number: { type: "string", description: "Invoice number" },
                    total: { type: "string", description: "Total amount due" },
                },
            },
        };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.schemas.create({
            name: "invoice",
            schema_json: {
                type: "object",
                properties: {
                    invoice_number: {
                        type: "string",
                        description: "Invoice number",
                    },
                    total: {
                        type: "string",
                        description: "Total amount due",
                    },
                },
            },
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("create (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("create (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("create (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("create (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("create (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("create (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("create (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("create (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("create (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "x", schema_json: { schema_json: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/schemas/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.create({
                name: "x",
                schema_json: {
                    schema_json: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("get (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            name: "invoice",
            schema_json: {
                type: "object",
                properties: {
                    invoice_number: { type: "string", description: "Invoice number" },
                    total: { type: "string", description: "Total amount due" },
                },
            },
        };

        server
            .mockEndpoint()
            .get("/v1/schemas/invoice/")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.schemas.get({
            name: "invoice",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(400).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("get (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("get (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("get (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("get (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(409).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("get (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(410).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("get (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(413).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("get (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(422).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("get (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(429).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("get (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/schemas/name/").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.schemas.get({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("delete (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/v1/schemas/invoice/").respondWith().statusCode(200).build();

        const response = await client.schemas.delete({
            name: "invoice",
        });
        expect(response).toEqual(undefined);
    });

    test("delete (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("delete (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("delete (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("delete (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("delete (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("delete (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("delete (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("delete (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("delete (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("delete (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .delete("/v1/schemas/name/")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.schemas.delete({
                name: "name",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });
});
