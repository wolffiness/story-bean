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
						onSubmit: async (submitData: SubmitEvent) => {
							const supabase = useSupabaseClient()

							const form = submitData.target as HTMLFormElement
							const formData = new FormData(form)

							const { getUser } = useAccount()
							const user = await getUser()

							if (formData.get('email-current') !== user?.email) {
								return
							}

							const { data } = await supabase.auth.updateUser({
								email: formData.get('email-new') as string,
							})
						},
					},
				},
			},
		},
	}

	return settings
}
