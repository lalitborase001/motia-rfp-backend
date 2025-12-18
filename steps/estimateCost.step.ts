import { Step } from "motia";

const estimateCost: Step = {
  name: "estimateCost",
  type: "task",

  handler: async (ctx) => {
    if (!ctx.state.requirements || ctx.state.requirements.length === 0) {
      ctx.state.status = "FAILED";
      throw new Error("No requirements available for cost estimation");
    }

    const costPerRequirement = 5000;
    const totalCost =
      ctx.state.requirements.length * costPerRequirement;

    ctx.state.estimatedCost = totalCost;

    ctx.log.info("Cost estimated", {
      requirementsCount: ctx.state.requirements.length,
      estimatedCost: totalCost,
    });

    return ctx.next();
  },
};

export default estimateCost;
