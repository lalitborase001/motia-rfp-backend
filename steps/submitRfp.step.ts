import { Step } from "motia";

const submitRfp: Step = {
  name: "submitRfp",
  type: "api",

  handler: async (ctx) => {
    const { text } = ctx.input;

    ctx.state = {
      rfpId: crypto.randomUUID(),
      rawText: text,
      status: "IN_PROGRESS",
    };

    ctx.log.info("RFP submitted");

    return ctx.next();
  },
};

export default submitRfp;
