import { contactMessages, type InsertContactMessage, type ContactMessage } from "@shared/schema";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("data.db");
const db = drizzle(sqlite);

// Push schema
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    order_number TEXT,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
  )
`);

export interface IStorage {
  createContactMessage(msg: InsertContactMessage): ContactMessage;
}

export const storage: IStorage = {
  createContactMessage(msg: InsertContactMessage): ContactMessage {
    return db.insert(contactMessages).values(msg).returning().get()!;
  },
};
