export function uuid(): string {
	return globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).substring(2);
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=uuid.ts
