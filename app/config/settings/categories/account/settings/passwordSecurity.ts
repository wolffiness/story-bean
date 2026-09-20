import type { Setting } from '~/types/settings'
import ModalModal from '~/components/modal/Modal.vue'
import ModalForm from '~/components/modal/Form.vue'

export const passwordSecurity = () => {
	const result: Setting = {
		Password: {
			type: 'modal',
			modalId: 'password-security-password',
			component: {
				parent: {
					component: markRaw(ModalModal),
					props: {
						title: 'Change your password',
						description: 'Enter your existing password and a new password.',
					},
				},
				child: {
					component: markRaw(ModalForm),
					props: {
						inputs: [
							{
								type: 'password',
								id: 'password-current',
								label: 'Current password',
								feedbackKey: 'password-current',
								required: true,
								excludePasswordEval: true,
							},
							{
								type: 'password',
								id: 'password-new',
								label: 'New password',
								feedbackKey: 'password-new',
								required: true,
							},
							{
								type: 'submit',
								label: 'Change password',
							},
						],
					},
				},
			},
		},
	}

	return result
}
