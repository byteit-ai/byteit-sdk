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

export declare namespace SchemasClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Save and reuse extraction schemas.
 */
export class SchemasClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SchemasClient.Options>;

    constructor(options: SchemasClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Return all saved schemas owned by the authenticated user.
     *
     * @param {SchemasClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.schemas.list()
     */
    public list(
        requestOptions?: SchemasClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.ReadSavedSchemasListResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: SchemasClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ReadSavedSchemasListResponse>> {
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
                "v1/schemas/",
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
            return { data: _response.body as ByteIt.ReadSavedSchemasListResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/schemas/");
    }

    /**
     * Persist a validated schema for the authenticated user.
     *
     * @param {ByteIt.CreateSavedSchemaRequest} request
     * @param {SchemasClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.schemas.create({
     *         name: "invoice",
     *         schema_json: {
     *             "type": "object",
     *             "properties": {
     *                 "invoice_number": {
     *                     "type": "string",
     *                     "description": "Invoice number"
     *                 },
     *                 "total": {
     *                     "type": "string",
     *                     "description": "Total amount due"
     *                 }
     *             }
     *         }
     *     })
     */
    public create(
        request: ByteIt.CreateSavedSchemaRequest,
        requestOptions?: SchemasClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.ReadSavedSchemaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: ByteIt.CreateSavedSchemaRequest,
        requestOptions?: SchemasClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ReadSavedSchemaResponse>> {
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
                "v1/schemas/",
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
            return { data: _response.body as ByteIt.ReadSavedSchemaResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/schemas/");
    }

    /**
     * Return a saved schema owned by the authenticated user.
     *
     * @param {ByteIt.GetSchemasRequest} request
     * @param {SchemasClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.schemas.get({
     *         name: "invoice"
     *     })
     */
    public get(
        request: ByteIt.GetSchemasRequest,
        requestOptions?: SchemasClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.ReadSavedSchemaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: ByteIt.GetSchemasRequest,
        requestOptions?: SchemasClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.ReadSavedSchemaResponse>> {
        const { name } = request;
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
                `v1/schemas/${core.url.encodePathParam(name)}/`,
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
            return { data: _response.body as ByteIt.ReadSavedSchemaResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/schemas/{name}/");
    }

    /**
     * Delete a saved schema owned by the authenticated user.
     *
     * @param {ByteIt.DeleteSchemasRequest} request
     * @param {SchemasClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.schemas.delete({
     *         name: "invoice"
     *     })
     */
    public delete(
        request: ByteIt.DeleteSchemasRequest,
        requestOptions?: SchemasClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: ByteIt.DeleteSchemasRequest,
        requestOptions?: SchemasClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { name } = request;
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
                `v1/schemas/${core.url.encodePathParam(name)}/`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/v1/schemas/{name}/");
    }
}
