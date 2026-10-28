/**
 * Returns a shortened preview of the provided content capped at the given length.
 * Appends an ellipsis when the content exceeds the maximum.
 */
export function getPreviewText(content: string, max = 150): string {
	return content.length > max ? content.slice(0, max) + '...' : content;
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=text.ts
