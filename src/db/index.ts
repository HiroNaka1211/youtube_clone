import {drizzle} from "drizzle-orm/neon-http";


//If do not use "!" when the DATABASE_URL is set, the exist of DATABASE_URL need to be checked like the code below
// if(!process.env.DATABASE_URL){
//     throw new Error("DATABASE_URL is not set");
// }

export const db = drizzle(process.env.DATABASE_URL!);