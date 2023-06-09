import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { session, supabase } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const { data: testTable } = await supabase.from('ad_user').select('*');
	return {
		testTable,
		user: session.user
	};
}) satisfies PageLoad;
