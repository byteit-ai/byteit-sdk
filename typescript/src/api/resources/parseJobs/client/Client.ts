// This file was auto-generated from the ByteIt API definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { toJson } from "../../../../core/json.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as ByteIt from "../../../index.js";

export declare namespace ParseJobsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class ParseJobsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ParseJobsClient.Options>;

    constructor(options: ParseJobsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Create a parse job entry for document processing.
     *
     * @param {ByteIt.CreateParseJobRequest} request
     * @param {ParseJobsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ByteIt.BadRequestError}
     * @throws {@link ByteIt.UnauthorizedError}
     * @throws {@link ByteIt.ForbiddenError}
     * @throws {@link ByteIt.NotFoundError}
     * @throws {@link ByteIt.ConflictError}
     * @throws {@link ByteIt.GoneError}
     * @throws {@link ByteIt.ContentTooLargeError}
     * @throws {@link ByteIt.UnprocessableEntityError}
     * @throws {@link ByteIt.TooManyRequestsError}
     * @throws {@link ByteIt.InternalServerError}
     * @throws {@link errors.ByteItError}
     * @throws {@link errors.ByteItTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.parseJobs.create({
     *         nickname: "invoice-march",
     *         output_format: "md"
     *     })
     */
    public create(
        request: ByteIt.CreateParseJobRequest,
        requestOptions?: ParseJobsClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.CreateParseJobResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: ByteIt.CreateParseJobRequest,
        requestOptions?: ParseJobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.CreateParseJobResponse>> {
        const _body = await core.newFormData();
        if (request.file != null) {
            await _body.appendFile("file", request.file);
        }

        if (request.files != null) {
            for (const _file of request.files) {
                await _body.appendFile("files", _file);
            }
        }

        if (request.nickname != null) {
            _body.append("nickname", request.nickname);
        }

        if (request.output_format != null) {
            _body.append("output_format", request.output_format);
        }

        if (request.input_connector != null) {
            _body.append("input_connector", request.input_connector);
        }

        if (request.input_connection_data != null) {
            _body.append("input_connection_data", toJson(request.input_connection_data));
        }

        if (request.output_connector != null) {
            _body.append("output_connector", request.output_connector);
        }

        if (request.output_connection_data != null) {
            _body.append("output_connection_data", toJson(request.output_connection_data));
        }

        if (request.processing_options != null) {
            _body.append("processing_options", toJson(request.processing_options));
        }

        if (request.queue_for_batch != null) {
            _body.append("queue_for_batch", request.queue_for_batch?.toString());
        }

        const _maybeEncodedRequest = await _body.getRequest();
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            mergeOnlyDefinedHeaders({ ..._maybeEncodedRequest.headers }),
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                "v1/jobs/parse-jobs/",
            ),
            method: "POST",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as ByteIt.CreateParseJobResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ByteIt.BadRequestError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                case 401:
                    throw new ByteIt.UnauthorizedError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                case 403:
                    throw new ByteIt.ForbiddenError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                case 404:
                    throw new ByteIt.NotFoundError(_response.error.body as ByteIt.ErrorResponse, _response.rawResponse);
                case 409:
                    throw new ByteIt.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 410:
                    throw new ByteIt.GoneError(_response.error.body as ByteIt.ErrorResponse, _response.rawResponse);
                case 413:
                    throw new ByteIt.ContentTooLargeError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                case 422:
                    throw new ByteIt.UnprocessableEntityError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                case 429:
                    throw new ByteIt.TooManyRequestsError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                case 500:
                    throw new ByteIt.InternalServerError(
                        _response.error.body as ByteIt.ErrorResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.ByteItError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/jobs/parse-jobs/");
    }
}
