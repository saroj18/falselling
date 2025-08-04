import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient;
}

export let prisma =
  globalThis.client ??
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.client = prisma;
}
