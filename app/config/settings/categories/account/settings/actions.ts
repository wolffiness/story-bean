import type { Setting } from '~/types/settings'

export const actions = () => {
	const settings: Setting = {
		'Log out': {
			type: 'btn',
			btnType: 'secondary',
			btnState: 'error',
			val: 'Log out',
			click: 'logOut',
		},
		'Delete account': {
			type: 'btn',
			btnType: 'primary',
			btnState: 'error',
			val: 'Delete account',
			click: 'deleteAccount',
		},
	}

	return settings
}
