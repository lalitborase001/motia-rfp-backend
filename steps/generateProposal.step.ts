export async function generateProposal(ctx) {
  ctx.state.proposal = `
Proposal Summary:
Requirements: ${ctx.state.requirements.join(", ")}
Estimated Cost: ₹${ctx.state.estimatedCost}
`;

  ctx.state.status = "COMPLETED";
  ctx.log.info("Proposal generated");

  return ctx.done();
}
