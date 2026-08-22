import type { SubHeading, Setting } from '~/types/settings'

const content: Setting = {
	'Log Out': {
		type: 'btn',
		btnType: 'setting-category',
		btnState: 'error',
		click: 'logOut',
	},
}

export const logOut = <SubHeading>{
	Btn: content,
}
