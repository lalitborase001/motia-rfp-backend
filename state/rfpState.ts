export interface RfpState {
  rfpId: string;
  rawText?: string;
  requirements?: string[];
  estimatedCost?: number;
  proposal?: string;
  status: "IN_PROGRESS" | "FAILED" | "COMPLETED";
}
