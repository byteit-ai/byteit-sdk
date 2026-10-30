// This file was auto-generated from the ByteIt API definition.

import { ApiKeysClient } from "./api/resources/apiKeys/client/Client.js";
import { ClassificationJobsClient } from "./api/resources/classificationJobs/client/Client.js";
import { CustomJobsClient } from "./api/resources/customJobs/client/Client.js";
import { DocumentClassesClient } from "./api/resources/documentClasses/client/Client.js";
import { ExtractJobsClient } from "./api/resources/extractJobs/client/Client.js";
import { JobsClient } from "./api/resources/jobs/client/Client.js";
import { ParseJobsClient } from "./api/resources/parseJobs/client/Client.js";
import { SchemasClient } from "./api/resources/schemas/client/Client.js";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "./BaseClient.js";
import * as core from "./core/index.js";

export declare namespace ByteItClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class ByteItClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ByteItClient.Options>;
    protected _parseJobs: ParseJobsClient | undefined;
    protected _extractJobs: ExtractJobsClient | undefined;
    protected _classificationJobs: ClassificationJobsClient | undefined;
    protected _customJobs: CustomJobsClient | undefined;
    protected _jobs: JobsClient | undefined;
    protected _schemas: SchemasClient | undefined;
    protected _documentClasses: DocumentClassesClient | undefined;
    protected _apiKeys: ApiKeysClient | undefined;

    constructor(options: ByteItClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get parseJobs(): ParseJobsClient {
        return (this._parseJobs ??= new ParseJobsClient(this._options));
    }

    public get extractJobs(): ExtractJobsClient {
        return (this._extractJobs ??= new ExtractJobsClient(this._options));
    }

    public get classificationJobs(): ClassificationJobsClient {
        return (this._classificationJobs ??= new ClassificationJobsClient(this._options));
    }

    public get customJobs(): CustomJobsClient {
        return (this._customJobs ??= new CustomJobsClient(this._options));
    }

    public get jobs(): JobsClient {
        return (this._jobs ??= new JobsClient(this._options));
    }

    public get schemas(): SchemasClient {
        return (this._schemas ??= new SchemasClient(this._options));
    }

    public get documentClasses(): DocumentClassesClient {
        return (this._documentClasses ??= new DocumentClassesClient(this._options));
    }

    public get apiKeys(): ApiKeysClient {
        return (this._apiKeys ??= new ApiKeysClient(this._options));
    }

    /**
     * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
     * This is useful for making requests to endpoints not yet supported in the SDK.
     * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
     *
     * @param {Request | string | URL} input - The URL, path, or Request object.
     * @param {RequestInit} init - Standard fetch RequestInit options.
     * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
     * @returns {Promise<Response>} A standard Response object.
     */
    public async fetch(
        input: Request | string | URL,
        init?: RequestInit,
        requestOptions?: core.PassthroughRequest.RequestOptions,
    ): Promise<Response> {
        return core.makePassthroughRequest(
            input,
            init,
            {
                baseUrl: this._options.baseUrl ?? this._options.environment,
                headers: this._options.headers,
                timeoutInSeconds: this._options.timeoutInSeconds,
                maxRetries: this._options.maxRetries,
                fetch: this._options.fetch,
                logging: this._options.logging,
                getAuthHeaders: async () => (await this._options.authProvider.getAuthRequest()).headers,
            },
            requestOptions,
        );
    }
}
