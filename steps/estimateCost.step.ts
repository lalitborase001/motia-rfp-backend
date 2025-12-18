export const config = {
  name: "estimateCost",
  type: "task",
};

export default async function estimateCost(ctx: any) {
  ctx.state.estimatedCost =
    ctx.state.requirements.length * 5000;

  ctx.log.info("Cost estimated");
  return ctx.next();
}
