export async function extractRequirements(ctx) {
  if (!ctx.state.rawText) {
    ctx.log.error("RFP text missing");
    ctx.state.status = "FAILED";
    throw new Error("RFP parsing failed");
  }

  ctx.state.requirements = [
    "User authentication",
    "Admin dashboard",
    "Reporting system"
  ];

  ctx.log.info("Requirements extracted");
  return ctx.next();
}
