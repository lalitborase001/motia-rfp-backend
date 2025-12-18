import { Step } from "motia";

const generateProposal: Step = {
  name: "generateProposal",
  type: "task",

  handler: async (ctx) => {
    if (
      !ctx.state.requirements ||
      !ctx.state.estimatedCost
    ) {
      ctx.state.status = "FAILED";
      throw new Error("Incomplete data for proposal generation");
    }

    ctx.state.proposal = `
=== Project Proposal ===

Requirements:
${ctx.state.requirements.map((r) => `- ${r}`).join("\n")}

Estimated Cost:
₹${ctx.state.estimatedCost}

Timeline:
6–8 weeks

Notes:
This proposal was generated using a stateful Motia workflow.
`;

    ctx.state.status = "COMPLETED";

    ctx.log.info("Proposal generated successfully");

    return ctx.done();
  },
};

export default generateProposal;
