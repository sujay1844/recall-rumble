import { fail, type Actions } from '@sveltejs/kit';
import { db } from "$lib/db";
import { entries, type NewEntry } from "$lib/schema";

export const actions: Actions = {
    default: async({ request }) => {
        const formdata = await request.formData();
        
        try {

            const data = Object.fromEntries(formdata.entries()) as NewEntry;
            const result = await db.insert(entries).values(data);
            console.log(result);

        } catch (error) {
            console.error(error);
            return fail(400, {
                error: true,
            });
        }

        return { success: true };
    }
}