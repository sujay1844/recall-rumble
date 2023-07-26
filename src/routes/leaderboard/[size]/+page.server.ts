import { db } from "$lib/db";
import { entries, type Entry } from "$lib/schema";
import { eq } from "drizzle-orm";

export async function load({params}) {

	const currentEntries: Entry[] = await db
		.select()
		.from(entries)
		.where(eq(entries.gridSize, params.size))
		.orderBy(entries.time)
		.limit(10);

	return {
		entries: currentEntries,
		size: params.size,
	};
}