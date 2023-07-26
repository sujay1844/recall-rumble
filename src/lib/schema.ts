import { decimal, index, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import type { InferModel } from "drizzle-orm";

export const entries = mysqlTable('memory_game_leaderboard_entries', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255}),
	time: decimal('time', { precision: 6, scale: 3}),
	gridSize: decimal('grid_size', { precision: 2, scale: 0}),
}, (entry) => ({
	timeIndex:  index('time_idx').on(entry.time)
}))

export type Entry = InferModel<typeof entries>;
export type NewEntry = InferModel<typeof entries, 'insert'>;
