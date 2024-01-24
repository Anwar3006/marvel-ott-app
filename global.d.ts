import { PrismaClient } from "@prisma/client";
import { Redis } from "ioredis";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
    var redis: Redis;
  }
}
