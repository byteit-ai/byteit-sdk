// This file was auto-generated from the ByteIt API definition.

import type * as ByteIt from "../index.js";

export type Job = ByteIt.Job.Parse | ByteIt.Job.Extract | ByteIt.Job.Classification | ByteIt.Job.Custom;

export namespace Job {
    export interface Parse extends ByteIt.ParseJob {
        job_type: "parse";
    }

    export interface Extract extends ByteIt.ExtractJob {
        job_type: "extract";
    }

    export interface Classification extends ByteIt.ClassificationJob {
        job_type: "classification";
    }

    export interface Custom extends ByteIt.CustomJob {
        job_type: "custom";
    }
}
