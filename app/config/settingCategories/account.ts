import type { SubHeading, Setting } from '~/types/settings'
import ModalModal from '~/components/modal/Modal.vue'

const accountInformation: Setting = {
	Username: {
		type: 'modal',
		modalId: 'account-information-username',
		val: 'story_bean',
		component: {
			component: ModalModal,
		},
	},
	'E-mail': {
		type: 'modal',
		modalId: 'account-information-email',
		val: 'story_bean@protonmail.com',
		component: {
			component: ModalModal,
		},
	},
}

const passwordSecurity: Setting = {
	Password: {
		type: 'modal',
		modalId: 'password-security-password',
		component: {
			component: ModalModal,
		},
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
