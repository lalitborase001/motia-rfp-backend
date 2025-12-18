export const config = {
  name: "submitRfp",
  type: "api",
};

export default async function submitRfp(ctx: any) {
  const { text } = ctx.input;

  ctx.state = {
    rfpId: crypto.randomUUID(),
    rawText: text,
    status: "IN_PROGRESS",
  };

  ctx.log.info("RFP submitted");

  return ctx.next();
}
