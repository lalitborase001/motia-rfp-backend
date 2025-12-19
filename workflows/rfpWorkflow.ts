export const config = {
  name: "rfpWorkflow",
  type: "workflow",

  steps: [
    "parseRfp",
    "extractRequirements",
    "estimateCost",
    "generateProposal",
  ],
};
