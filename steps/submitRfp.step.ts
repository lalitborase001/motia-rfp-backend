export const config = {
  name: "submitRfp",
  type: "workflow",

  path: "/submit-rfp",
  method: "POST",

  // This tells Motia what this step triggers
  emits: ["rfpWorkflow"],
};

export default async function submitRfp(ctx: any) {
  const { text } = ctx.input;

  ctx.state = {
    rfpId: crypto.randomUUID(),
    rawText: text,
    status: "IN_PROGRESS",
  };

  ctx.log.info("RFP submitted");
  return ctx.emit("rfpWorkflow");
}
