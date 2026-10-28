import { config } from '$lib/stores/settings.svelte';

/**
 * Get authorization headers for API requests
 * Includes Bearer token if API key is configured
 */
export function getAuthHeaders(): Record<string, string> {
	const currentConfig = config();
	const apiKey = currentConfig.apiKey?.toString().trim();

	return apiKey ? { Authorization: `Bearer ${apiKey}` } : {};
}

/**
 * Get standard JSON headers with optional authorization
 */
export function getJsonHeaders(): Record<string, string> {
	return {
		'Content-Type': 'application/json',
		...getAuthHeaders()
	};
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=api-headers.ts
