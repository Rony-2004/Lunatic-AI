import { PrismaClient } from "@prisma/client";

export const db=new PrismaClient();
if (process.env.Node_ENV !=="production"){
    globalThis.prisma = db;
    
}
