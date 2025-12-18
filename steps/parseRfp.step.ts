export async function parseRfp(ctx) {
  const cleanedText = ctx.state.rawText.trim();

  ctx.state.rawText = cleanedText;
  ctx.log.info("RFP parsed successfully");

  return ctx.next();
}
