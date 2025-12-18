import { Step } from "motia";

const extractRequirements: Step = {
  name: "extractRequirements",
  type: "task",

  handler: async (ctx) => {
    if (!ctx.state.rawText) {
      ctx.state.status = "FAILED";
      throw new Error("RFP text missing");
    }

    ctx.state.requirements = [
      "User authentication",
      "Admin dashboard",
      "Reporting module",
    ];

    ctx.log.info("Requirements extracted");
    return ctx.next();
  },
};

export default extractRequirements;
