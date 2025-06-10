import { decimal, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  email: varchar({ length: 255 }).unique().notNull(),
  name: varchar({ length: 255 }).notNull()
});

export const addressTable = pgTable('addresses', {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  street: varchar({ length: 255 }).unique().notNull(),
  city: varchar({ length: 255 }).notNull(),
  state: varchar({ length: 255 }).notNull(),
  postalCode: varchar({ length: 10 }).notNull(),
  county: varchar({ length: 255 }),
  latitude: decimal(),
  longitude: decimal()
});

