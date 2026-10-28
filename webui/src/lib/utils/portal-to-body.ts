export function portalToBody(node: HTMLElement) {
	if (typeof document === 'undefined') {
		return;
	}

	const target = document.body;
	if (!target) {
		return;
	}

	target.appendChild(node);

	return {
		destroy() {
			if (node.parentNode === target) {
				target.removeChild(node);
			}
		}
	};
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=portal-to-body.ts
