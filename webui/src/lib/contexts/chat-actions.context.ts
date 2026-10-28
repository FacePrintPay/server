import { getContext, setContext } from 'svelte';
import { CONTEXT_KEY_CHAT_ACTIONS } from '$lib/constants';

export interface ChatActionsContext {
	copy: (message: DatabaseMessage) => void;
	delete: (message: DatabaseMessage) => void;
	navigateToSibling: (siblingId: string) => void;
	editWithBranching: (
		message: DatabaseMessage,
		newContent: string,
		newExtras?: DatabaseMessageExtra[]
	) => void;
	editWithReplacement: (
		message: DatabaseMessage,
		newContent: string,
		shouldBranch: boolean
	) => void;
	editUserMessagePreserveResponses: (
		message: DatabaseMessage,
		newContent: string,
		newExtras?: DatabaseMessageExtra[]
	) => void;
	regenerateWithBranching: (message: DatabaseMessage, modelOverride?: string) => void;
	continueAssistantMessage: (message: DatabaseMessage) => void;
	forkConversation: (
		message: DatabaseMessage,
		options: { name: string; includeAttachments: boolean }
	) => void;
}

const CHAT_ACTIONS_KEY = Symbol.for(CONTEXT_KEY_CHAT_ACTIONS);

export function setChatActionsContext(ctx: ChatActionsContext): ChatActionsContext {
	return setContext(CHAT_ACTIONS_KEY, ctx);
}

export function getChatActionsContext(): ChatActionsContext {
	return getContext(CHAT_ACTIONS_KEY);
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=chat-actions.context.ts
