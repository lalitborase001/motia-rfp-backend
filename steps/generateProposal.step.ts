export const config = {
  name: "generateProposal",
  type: "task",
};

export default async function generateProposal(ctx: any) {
  ctx.state.proposal = `
Requirements: ${ctx.state.requirements.join(", ")}
Estimated Cost: ₹${ctx.state.estimatedCost}
`;

  ctx.state.status = "COMPLETED";
  ctx.log.info("Proposal generated");
  return ctx.done();
}
