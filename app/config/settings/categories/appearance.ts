import type { SubHeading, Setting } from '~/types/settings'

const color: Setting = {
	'light-dark-mode': {
		type: 'edit-val',
	},
	primary: {
		type: 'edit-val',
	},
	secondary: {
		type: 'edit-val',
	},
	accent: {
		type: 'edit-val',
	},
	background: {
		type: 'edit-val',
	},
	text: {
		type: 'edit-val',
	},
}

const fontFamily: Setting = {
	heading: {
		type: 'edit-val',
	},
	text: {
		type: 'edit-val',
	},
}

const fontSize: Setting = {
	typescale: {
		type: 'edit-val',
	},
	text: {
		type: 'edit-val',
	},
	'Heading 1': {
		type: 'edit-val',
	},
	'Heading 2': {
		type: 'edit-val',
	},
	'Heading 3': {
		type: 'edit-val',
	},
	'Heading 4': {
		type: 'edit-val',
	},
}

export const appearance = <SubHeading>{
	Color: color,
	'Font Family': fontFamily,
	'Font Size': fontSize,
}
