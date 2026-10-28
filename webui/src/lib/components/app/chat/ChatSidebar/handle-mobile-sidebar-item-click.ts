import { useSidebar } from '$lib/components/ui/sidebar';

const sidebar = useSidebar();

export function handleMobileSidebarItemClick() {
	if (sidebar.isMobile) {
		sidebar.toggle();
	}
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=handle-mobile-sidebar-item-click.ts
