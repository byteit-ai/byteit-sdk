// This file was auto-generated from the ByteIt API definition.

import * as ByteIt from "../../src/api/index";
import { ByteItClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("JobsClient", () => {
    test("list (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            detail: "Retrieved 1 jobs.",
            count: 1,
            jobs: [
                {
                    job_type: "parse",
                    job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
                    nickname: "invoice-march",
                    processing_status: "completed",
                    file_name: "invoice.pdf",
                    page_count: 2,
                    input_connector: "localfile",
                    output_connector: "localfile",
                },
            ],
        };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.jobs.list({
            job_type: "parse",
            limit: 20,
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(400).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("list (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("list (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("list (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("list (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(409).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("list (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(410).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("list (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(413).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("list (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(422).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("list (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(429).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("list (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.list();
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("get (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = {
            job_type: "parse",
            job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            nickname: "invoice-march",
            processing_status: "completed",
            file_name: "invoice.pdf",
            page_count: 2,
            input_connector: "localfile",
            output_connector: "localfile",
        };

        server
            .mockEndpoint()
            .get("/v1/jobs/3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b/")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.jobs.get({
            id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(400).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("get (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("get (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("get (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("get (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(409).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("get (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(410).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("get (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(413).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("get (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(422).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("get (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(429).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("get (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server.mockEndpoint().get("/v1/jobs/id/").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.jobs.get({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("updateNickname (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { nickname: "invoice-march-final" };
        const rawResponseBody = {
            job_type: "parse",
            job_id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            nickname: "invoice-march-final",
            processing_status: "completed",
            file_name: "invoice.pdf",
            page_count: 2,
            input_connector: "localfile",
            output_connector: "localfile",
        };

        server
            .mockEndpoint()
            .patch("/v1/jobs/3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.jobs.updateNickname({
            id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
            nickname: "invoice-march-final",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("updateNickname (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("updateNickname (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("updateNickname (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("updateNickname (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("updateNickname (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("updateNickname (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("updateNickname (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("updateNickname (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("updateNickname (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("updateNickname (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .patch("/v1/jobs/id/")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.updateNickname({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });

    test("getStatus (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { processing_status: "processing", progress: 60, message: null };

        server
            .mockEndpoint()
            .get("/v1/jobs/3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b/status/")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.jobs.getStatus({
            id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getStatus (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.BadRequestError);
    });

    test("getStatus (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnauthorizedError);
    });

    test("getStatus (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ForbiddenError);
    });

    test("getStatus (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.NotFoundError);
    });

    test("getStatus (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ConflictError);
    });

    test("getStatus (7)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(410)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.GoneError);
    });

    test("getStatus (8)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(413)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.ContentTooLargeError);
    });

    test("getStatus (9)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(422)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.UnprocessableEntityError);
    });

    test("getStatus (10)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.TooManyRequestsError);
    });

    test("getStatus (11)", async () => {
        const server = mockServerPool.createServer();
        const client = new ByteItClient({ maxRetries: 0, apiKey: "test", environment: server.baseUrl });

        const rawResponseBody = { code: "ARCHIVE_EMPTY", message: "message", request_id: "request_id" };

        server
            .mockEndpoint()
            .get("/v1/jobs/id/status/")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.jobs.getStatus({
                id: "id",
            });
        }).rejects.toThrow(ByteIt.InternalServerError);
    });
});
