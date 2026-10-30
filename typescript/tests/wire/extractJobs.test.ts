// This file was auto-generated from the ByteIt API definition.

import * as ByteIt from "../../src/api/index";
import { ByteItClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ExtractJobsClient", () => {
    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            parse_job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            schema: {
                type: "object",
                properties: {
                    invoice_number: { type: "string", description: "Invoice number" },
                    total: { type: "string", description: "Total amount due" },
                },
            },
            extraction_complexity: "medium",
        };
        const rawResponseBody = {
            detail: "Extract job created.",
            extract_job: {
                job_id: "7c4e2b1a-9d8f-4a6e-b5c3-2d1e0f9a8b7c",
                job_type: "extract",
                input_job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
                processing_status: "pending",
                extraction_schema: {
                    type: "object",
                    properties: {
                        invoice_number: { type: "string", description: "Invoice number" },
                        total: { type: "string", description: "Total amount due" },
                    },
                },
                extraction_complexity: "medium",
            },
        };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.extractJobs.create({
            parse_job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            schema: {
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
            extraction_complexity: "medium",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("create (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("create (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("create (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("create (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("create (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("create (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("create (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("create (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("create (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { parse_job_id: "x", schema: { schema: { key: "value" } } };
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .post("/v1/jobs/extract-jobs/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.extractJobs.create({
                parse_job_id: "x",
                schema: {
                    schema: {
                        key: "value",
                    },
                },
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });
});
