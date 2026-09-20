import type { Setting } from '~/types/settings'
import type { User } from '@supabase/supabase-js'
import ModalModal from '~/components/modal/Modal.vue'
import ModalForm from '~/components/modal/Form.vue'
import { useAccount } from '#imports'

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
					component: markRaw(ModalForm),
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
						onSubmit: (submitData: SubmitEventInit) => {
							const { getUser } = useAccount()
							const user = getUser()
							console.log(submitData)
						},
					},
				},
			},
		},
	}

	return settings
}
