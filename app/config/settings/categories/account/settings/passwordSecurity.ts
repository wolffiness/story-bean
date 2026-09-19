import type { Setting } from '~/types/settings'
import ModalModal from '~/components/modal/Modal.vue'
import ModalChangeAccInfo from '~/components/modal/ChangeAccInfo.vue'

export const passwordSecurity = () => {
	const result: Setting = {
		// Password: {
		// 	type: 'modal',
		// 	modalId: 'password-security-password',
		// 	component: {
		// 		parent: {
		// 			component: ModalModal,
		// 			props: {
		// 				title: 'Change your password',
		// 				description: 'Enter your existing password and a new password.',
		// 			},
		// 		},
		// 		child: {
		// 			component: ModalChangeAccInfo,
		// 			props: {
		// 				inputs: [
		// 					{
		// 						type: 'password',
		// 						id: 'password-current',
		// 						label: 'Current password',
		// 						feedbackKey: 'password-current',
		// 						required: true,
		// 						excludePasswordEval: true,
		// 					},
		// 					{
		// 						type: 'password',
		// 						id: 'password-new',
		// 						label: 'New password',
		// 						feedbackKey: 'password-new',
		// 						required: true,
		// 					},
		// 					{
		// 						type: 'submit',
		// 						label: 'Change password',
		// 					},
		// 				],
		// 			},
		// 		},
		// 	},
		// },
	}

	return result
}
