import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TestWrapper from './components/TestWrapper.svelte';

describe('/+page.svelte', () => {
	it('should render page without throwing', async () => {
		// Basic smoke test - page should render without throwing errors
		// API calls will fail in test environment but component should still mount
		expect(() => render(TestWrapper)).not.toThrow();
	});
});

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=page.svelte.test.ts
