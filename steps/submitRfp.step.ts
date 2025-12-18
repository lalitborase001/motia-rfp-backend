export async function submitRfp(ctx) {
  const { text } = ctx.input;

  ctx.state = {
    rfpId: crypto.randomUUID(),
    rawText: text,
    status: "IN_PROGRESS",
  };

  return ctx.next();
}
