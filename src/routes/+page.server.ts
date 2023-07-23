import { fail, type Actions } from '@sveltejs/kit';
export const actions: Actions = {
    default: async({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const time = data.get('time');
        

        if(!name || !time) {
            return fail(400, { error: true });
        }

        return { success: true };
    }
}