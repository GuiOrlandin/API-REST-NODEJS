import fastify from "fastify";
import cookie from "@fastify/cookie";
import { env } from "./env";
import { transactionRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookie);

app.addHook("preHandler", async (request) => {
  console.log(`[${request.method}] ${request.url}`);
});

app.register(transactionRoutes, {
  prefix: "transactions",
});
