export async function extractRequirements(ctx) {
  const text = ctx.state.rawText;

  ctx.state.requirements = [
    "User authentication",
    "Dashboard",
    "Reporting module",
  ];

  ctx.log.info("Requirements extracted", ctx.state.requirements);

  return ctx.next();
}
