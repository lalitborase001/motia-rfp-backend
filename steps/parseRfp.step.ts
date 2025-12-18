import { Step } from "motia";

const parseRfp: Step = {
  name: "parseRfp",
  type: "task",

  handler: async (ctx) => {
    ctx.state.rawText = ctx.state.rawText.trim();
    ctx.log.info("RFP parsed");

    return ctx.next();
  },
};

export default parseRfp;
