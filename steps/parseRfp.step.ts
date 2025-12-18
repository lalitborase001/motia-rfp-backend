export const config = {
  name: "parseRfp",
  type: "task",
};

export default async function parseRfp(ctx: any) {
  ctx.state.rawText = ctx.state.rawText.trim();
  ctx.log.info("RFP parsed");
  return ctx.next();
}
