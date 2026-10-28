import type { PageLoad } from './$types';
import { validateApiKey } from '$lib/utils';

export const load: PageLoad = async ({ fetch }) => {
	await validateApiKey(fetch);
};

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=+page.ts
