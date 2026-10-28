import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && http-server ../public -p 8181',
		port: 8181,
		timeout: 120000,
		reuseExistingServer: false
	},
	testDir: 'tests/e2e'
});

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=playwright.config.ts
