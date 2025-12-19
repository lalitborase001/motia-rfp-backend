export const config = {
  name: "extractRequirements",
  type: "step",
};

export default async function extractRequirements(ctx: any) {
  if (!ctx.state.rawText) {
    ctx.state.status = "FAILED";
    throw new Error("Missing RFP text");
  }

  ctx.state.requirements = [
    "User authentication",
    "Admin dashboard",
    "Reporting module",
  ];

  ctx.log.info("Requirements extracted");
  return ctx.next();
}
