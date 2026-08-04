import client from "prom-client";

const register = new client.Registry();

client.collectDefaultMetrics({ register });

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", register.contentType);
  return register.metrics();
});
