import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Trigger from './tooltip-trigger.svelte';
import Content from './tooltip-content.svelte';

const Root = TooltipPrimitive.Root;
const Provider = TooltipPrimitive.Provider;
const Portal = TooltipPrimitive.Portal;

export {
	Root,
	Trigger,
	Content,
	Provider,
	Portal,
	//
	Root as Tooltip,
	Content as TooltipContent,
	Trigger as TooltipTrigger,
	Provider as TooltipProvider,
	Portal as TooltipPortal
};

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.ts
