// This file was auto-generated from the ByteIt API definition.

export const ProcessingStatusEnum = {
    Pending: "pending",
    Processing: "processing",
    Completed: "completed",
    Failed: "failed",
    Queued: "queued",
} as const;
export type ProcessingStatusEnum = (typeof ProcessingStatusEnum)[keyof typeof ProcessingStatusEnum];
