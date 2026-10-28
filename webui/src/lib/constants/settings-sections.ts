/**
 * Settings section titles constants for ChatSettings component.
 *
 * These titles define the navigation sections in the settings dialog.
 * Used for both sidebar navigation and mobile horizontal scroll menu.
 */
export const SETTINGS_SECTION_TITLES = {
	GENERAL: 'General',
	DISPLAY: 'Display',
	SAMPLING: 'Sampling',
	PENALTIES: 'Penalties',
	IMPORT_EXPORT: 'Import/Export',
	MCP: 'MCP',
	DEVELOPER: 'Developer'
} as const;

/** Type for settings section titles */
export type SettingsSectionTitle =
	(typeof SETTINGS_SECTION_TITLES)[keyof typeof SETTINGS_SECTION_TITLES];

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=settings-sections.ts
