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

export declare namespace CustomJobsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class CustomJobsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CustomJobsClient.Options>;

    constructor(options: CustomJobsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Run the custom processing set up for your account. Custom jobs are solutions built on the ByteIt platform for requirements beyond the standard parse, extract and classification jobs (a specific document family, output layout or business rule). Follow and download them like any other job with `jobs`; `jobs.download_result` can include the extra files a custom job produces. To get one for your needs, contact ByteIt.
     *
     * @param {ByteIt.CreateCustomJobRequest} request
     * @param {CustomJobsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.customJobs.create({
     *         user_prompt: "Extract every line item with its VAT rate.",
     *         nickname: "supplier-invoices"
     *     })
     */
    public create(
        request: ByteIt.CreateCustomJobRequest,
        requestOptions?: CustomJobsClient.RequestOptions,
    ): core.HttpResponsePromise<ByteIt.CreateCustomJobResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: ByteIt.CreateCustomJobRequest,
        requestOptions?: CustomJobsClient.RequestOptions,
    ): Promise<core.WithRawResponse<ByteIt.CreateCustomJobResponse>> {
        const _body = await core.newFormData();
        if (request.files != null) {
            for (const _file of request.files) {
                await _body.appendFile("files", _file);
            }
        }

        if (request.schema != null) {
            _body.append("schema", toJson(request.schema));
        }

        if (request.user_prompt != null) {
            _body.append("user_prompt", request.user_prompt);
        }

        if (request.nickname != null) {
            _body.append("nickname", request.nickname);
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
                "v1/jobs/custom-jobs/",
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
            return { data: _response.body as ByteIt.CreateCustomJobResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/jobs/custom-jobs/");
    }
}
