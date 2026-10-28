import { DEFAULT_MOBILE_BREAKPOINT } from '$lib/constants';
import { MediaQuery } from 'svelte/reactivity';

export class IsMobile extends MediaQuery {
	constructor(breakpoint: number = DEFAULT_MOBILE_BREAKPOINT) {
		super(`max-width: ${breakpoint - 1}px`);
	}
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=is-mobile.svelte.ts
