import type { SubHeading, Setting } from '~/types/settings'
import ModalModal from '~/components/modal/Modal.vue'
import ModalChangeAccInfo from '~/components/modal/ChangeAccInfo.vue'

const accountInformation: Setting = {
	Username: {
		type: 'edit-val',
		val: 'story_bean',
	},
	'E-mail': {
		type: 'modal',
		modalId: 'account-information-email',
		val: 'story_bean@protonmail.com',
		component: {
			parent: {
				component: ModalModal,
				props: {
					title: 'Change your e-mail address',
					description: 'Enter a new e-mail address and your existing password.',
				},
			},
			child: {
				component: ModalChangeAccInfo,
				props: {
					inputs: [
						{
							type: 'email',
							id: 'email-current',
							label: 'Current e-mail',
						},
					],
				},
			},
		},
	},
}

const passwordSecurity: Setting = {
	Password: {
		type: 'modal',
		modalId: 'password-security-password',
		component: {
			parent: {
				component: ModalModal,
				props: {
					title: 'Change your password',
					description: 'Enter your existing password and a new password.',
				},
			},
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
