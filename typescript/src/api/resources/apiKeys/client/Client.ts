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

export declare namespace ApiKeysClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class ApiKeysClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ApiKeysClient.Options>;

    constructor(options: ApiKeysClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Create a named API key. The raw key is returned only once, in this response; store it securely.
     *
     * @param {ByteIt.CreateApiKeyRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.apiKeys.create({
     *         name: "ci-pipeline",
     *         expires_in_days: 90
     *     })
     */
    public create(
        request: ByteIt.CreateApiKeyRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.CreateApiKeyResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: ByteIt.CreateApiKeyRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.CreateApiKeyResponse>> {
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
                "v1/api-keys/create/",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(request, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as ByteIt.CreateApiKeyResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/api-keys/create/");
    }

    /**
     * Revoke and delete one of your API keys by name.
     *
     * @param {ByteIt.DeleteApiKeysRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.apiKeys.delete({
     *         name: "ci-pipeline"
     *     })
     */
    public delete(
        request: ByteIt.DeleteApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.ApiKeyResponse> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: ByteIt.DeleteApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ApiKeyResponse>> {
        const { name } = request;
        const _queryParams: Record<string, unknown> = {
            name,
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
                "v1/api-keys/delete/",
            ),
            method: "DELETE",
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
            return { data: _response.body as ByteIt.ApiKeyResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/v1/api-keys/delete/");
    }

    /**
     * List your API keys (metadata only; raw keys are never returned).
     *
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.apiKeys.list()
     */
    public list(requestOptions?: ApiKeysClient.RequestOptions): core.HttpResponsePromise<ByteIt.ReadApiKeysResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ReadApiKeysResponse>> {
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
                "v1/api-keys/list/",
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
            return { data: _response.body as ByteIt.ReadApiKeysResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/api-keys/list/");
    }
}
