import type { Setting } from '~/types/settings'

export const actions: Setting = {
	'Log out': {
		type: 'btn',
		btnType: 'secondary',
		btnState: 'error',
		val: 'Log out',
	},
	'Delete account': {
		type: 'btn',
		btnType: 'primary',
		btnState: 'error',
		val: 'Delete account',
	},
}
