// This file was auto-generated from the ByteIt API definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as ByteIt from "../../../index.js";

export declare namespace JobsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Get, list, rename and download the results of any job, and follow its progress.
 */
export class JobsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<JobsClient.Options>;

    constructor(options: JobsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * List your jobs of every type, newest first. Filter with `job_type` and page backwards with `before`.
     *
     * @param {ByteIt.ListJobsRequest} request
     * @param {JobsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.jobs.list({
     *         job_type: "parse",
     *         limit: 20
     *     })
     */
    public list(
        request: ByteIt.ListJobsRequest = {},
        requestOptions?: JobsClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.ReadJobsListResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: ByteIt.ListJobsRequest = {},
        requestOptions?: JobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ReadJobsListResponse>> {
        const { before, job_type: jobType, limit } = request;
        const _queryParams: Record<string, unknown> = {
            before: before !== undefined ? before : undefined,
            job_type: jobType != null ? jobType : undefined,
            limit,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                "v1/jobs/",
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as ByteIt.ReadJobsListResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/jobs/");
    }

    /**
     * Retrieve any of your jobs by its ID. The response shape depends on `job_type`.
     *
     * @param {ByteIt.GetJobsRequest} request
     * @param {JobsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.jobs.get({
     *         id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
     *     })
     */
    public get(
        request: ByteIt.GetJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.Job> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: ByteIt.GetJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.Job>> {
        const { id } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                `v1/jobs/${core.url.encodePathParam(id)}/`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as ByteIt.Job, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/jobs/{id}/");
    }

    /**
     * Set or clear the display name of any of your jobs.
     *
     * @param {ByteIt.PatchedUpdateJobNicknameRequest} request
     * @param {JobsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.jobs.updateNickname({
     *         id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b",
     *         nickname: "invoice-march-final"
     *     })
     */
    public updateNickname(
        request: ByteIt.PatchedUpdateJobNicknameRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.Job> {
        return core.HttpResponsePromise.fromPromise(this.__updateNickname(request, requestOptions));
    }

    private async __updateNickname(
        request: ByteIt.PatchedUpdateJobNicknameRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.Job>> {
        const { id, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                `v1/jobs/${core.url.encodePathParam(id)}/`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(_body, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as ByteIt.Job, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "PATCH", "/v1/jobs/{id}/");
    }

    /**
     * Download the original input file of a job by its public ID.
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
     */
    public downloadInputFile(
        request: ByteIt.DownloadInputFileJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): core.HttpResponsePromise<core.BinaryResponse> {
        return core.HttpResponsePromise.fromPromise(this.__downloadInputFile(request, requestOptions));
    }

    private async __downloadInputFile(
        request: ByteIt.DownloadInputFileJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<core.BinaryResponse>> {
        const { id } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher<core.BinaryResponse>({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                `v1/jobs/${core.url.encodePathParam(id)}/input-file/`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            responseType: "binary-response",
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/jobs/{id}/input-file/");
    }

    /**
     * Download the result of a completed job; what you get depends on its `job_type`:
     *
     * - `parse`: the parsed document (in `output_format` when given);
     * - `extract`: JSON shaped by your extraction schema;
     * - `classification`: JSON with the `document_class` and the classified `pages`;
     * - `custom`: the custom job's result, or with `include_extras` one ZIP with the result and its extra files under `extras/`.
     *
     * Responds with 409 while the job is still processing.
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
     */
    public downloadResult(
        request: ByteIt.DownloadResultJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): core.HttpResponsePromise<core.BinaryResponse> {
        return core.HttpResponsePromise.fromPromise(this.__downloadResult(request, requestOptions));
    }

    private async __downloadResult(
        request: ByteIt.DownloadResultJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<core.BinaryResponse>> {
        const { id, include_extras: includeExtras, output_format: outputFormat } = request;
        const _queryParams: Record<string, unknown> = {
            include_extras: includeExtras,
            output_format: outputFormat != null ? outputFormat : undefined,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher<core.BinaryResponse>({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                `v1/jobs/${core.url.encodePathParam(id)}/result/`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            responseType: "binary-response",
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/jobs/{id}/result/");
    }

    /**
     * Return job processing status with estimated progress.
     *
     * @param {ByteIt.GetStatusJobsRequest} request
     * @param {JobsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.jobs.getStatus({
     *         id: "3f9a1c2e-5b7d-4e8f-9a0b-1c2d3e4f5a6b"
     *     })
     */
    public getStatus(
        request: ByteIt.GetStatusJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.ReadJobStatusResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getStatus(request, requestOptions));
    }

    private async __getStatus(
        request: ByteIt.GetStatusJobsRequest,
        requestOptions?: JobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ReadJobStatusResponse>> {
        const { id } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ByteItEnvironment.Default,
                `v1/jobs/${core.url.encodePathParam(id)}/status/`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as ByteIt.ReadJobStatusResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/jobs/{id}/status/");
    }
}
