import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()


// nextjs hotreload can create multiple instances of prisma client
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;