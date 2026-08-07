import type { SubHeading, Setting } from '~/types/settings'

const data: Setting = {
	'import-data': {
		type: 'edit-val',
	},
	'export-data': {
		type: 'edit-val',
	},
	'delete-data': {
		type: 'edit-val',
	},
}

export const dataPrivacy = <SubHeading>{
	Data: data,
}
