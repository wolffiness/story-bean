import type { SubHeading, Setting } from '~/types/settings'

const accountInformation: Setting = {
	Username: {
		type: 'edit-val',
		val: 'story_bean',
	},
	'E-mail': {
		type: 'edit-val',
		val: 'story_bean@protonmail.com',
	},
}

const passwordSecurity: Setting = {
	Password: {
		type: 'edit',
	},
}

const actions: Setting = {
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

export const account = <SubHeading>{
	'Account Information': accountInformation,
	'Password & Security': passwordSecurity,
	Actions: actions,
}
