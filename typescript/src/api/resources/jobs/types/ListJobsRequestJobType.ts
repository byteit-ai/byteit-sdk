// This file was auto-generated from the ByteIt API definition.

export const ListJobsRequestJobType = {
    Parse: "parse",
    Extract: "extract",
    Schema: "schema",
    Classification: "classification",
    Custom: "custom",
} as const;
export type ListJobsRequestJobType = (typeof ListJobsRequestJobType)[keyof typeof ListJobsRequestJobType];
