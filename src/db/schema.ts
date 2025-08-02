import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

//Create Table
//If write SQL like below
/*CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
  updated_at TIMESTAMP NOT NULL DEFAULT now()
);*/

export const users = pgTable("users", {
id: uuid("id").primaryKey().defaultRandom(),
clerkId: text("clerk_id").unique().notNull(),
name: text("name").notNull(),
imageUrl: text("image_url").notNull(),
createdAt: timestamp("created_at").defaultNow().notNull(),
updatedAt: timestamp("updated_at").defaultNow().notNull(),
},(t) => [uniqueIndex("Clerk_id_idx").on(t.clerkId)])
//Index is creatd in the final line;