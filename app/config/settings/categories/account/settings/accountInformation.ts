import type { Setting } from '~/types/settings'
import ModalModal from '~/components/modal/Modal.vue'
import ModalChangeAccInfo from '~/components/modal/ChangeAccInfo.vue'
import type { User } from '@supabase/supabase-js'

export const accountInformation = (user: User | null) => {
	const settings: Setting = {
		// Username: {
		// 	type: 'edit-val',
		// 	val: 'story_bean',
		// },
		'E-mail': {
			type: 'modal',
			modalId: 'account-information-email',
			val: user?.email,
			component: {
				parent: {
					component: markRaw(ModalModal),
					props: {
						title: 'Change your e-mail address',
						description:
							'Enter a new e-mail address and verify your existing e-mail.',
					},
				},
				child: {
					component: markRaw(ModalChangeAccInfo),
					props: {
						inputs: [
							{
								type: 'email',
								id: 'email-current',
								label: 'Current e-mail',
								feedbackKey: 'email-current',
								required: true,
							},
							{
								type: 'email',
								id: 'email-new',
								label: 'New e-mail',
								feedbackKey: 'email-new',
								required: true,
							},
							{
								type: 'submit',
								label: 'Change e-mail',
							},
						],
					},
				},
			},
		},
	}

	return settings
}
