/**
 * OpenAI-compatible tool call type.
 */
export enum ToolCallType {
	FUNCTION = 'function'
}

/**
 * Types of sections in agentic content display.
 */
export enum AgenticSectionType {
	TEXT = 'text',
	TOOL_CALL = 'tool_call',
	TOOL_CALL_PENDING = 'tool_call_pending',
	TOOL_CALL_STREAMING = 'tool_call_streaming',
	REASONING = 'reasoning',
	REASONING_PENDING = 'reasoning_pending'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=agentic.ts
