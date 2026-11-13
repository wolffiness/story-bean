const escapeHtml = (str: string) =>
	String(str ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')

export const cleanHtml = (str: string) =>
	escapeHtml(str)
		.replace(/&lt;(\/?)(b|strong|i|em|u)&gt;/gi, '<$1$2>')
		.replace(/&lt;br\s*\/?&gt;/gi, '<br>')
