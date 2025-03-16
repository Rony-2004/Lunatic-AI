import { PrismaClient } from "@prisma/client";

export const db=globalThis.prisma || new PrismaClient();
if (process.env.Node_ENV !=="production"){
    globalThis.prisma = db;
    
}
