export async function estimateCost(ctx) {
  const baseCost = 5000;
  ctx.state.estimatedCost =
    ctx.state.requirements.length * baseCost;

  ctx.log.info("Cost estimated", ctx.state.estimatedCost);

  return ctx.next();
}
