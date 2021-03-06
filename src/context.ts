import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

import { decodeAuthHeader } from "./utils/auth";   
import { Request } from "express"; 

export interface Context {    // 1
    prisma: PrismaClient;
    userId?: number;
}

// export const context: Context = {   // 2
//     prisma,
// };

export const context = ({ req }: { req: Request }): Context => {   // 2
    const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null;

    return {  
        prisma,
        userId: token?.userId, 
    };
};