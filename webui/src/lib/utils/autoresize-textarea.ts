/**
 * Automatically resizes a textarea element to fit its content
 * @param textareaElement - The textarea element to resize
 */
export default function autoResizeTextarea(textareaElement: HTMLTextAreaElement | null): void {
	if (textareaElement) {
		textareaElement.style.height = '1rem';
		textareaElement.style.height = textareaElement.scrollHeight + 'px';
	}
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=autoresize-textarea.ts
