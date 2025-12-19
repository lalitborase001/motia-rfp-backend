export const config = {
  name: "parseRfp",
  type: "step",
};

export default async function parseRfp(ctx: any) {
  ctx.log.info("Parsing RFP text");

  ctx.state.rawText = ctx.state.rawText.trim();

  return ctx.next();
}
