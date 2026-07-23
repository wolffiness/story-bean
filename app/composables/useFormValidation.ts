import feedbackConfig from '~/config/form.json'
import type { FeedbackKeys } from '~/types/form'

export const useFormValidation = () => {
	const feedbackKeys = ['email', 'password', 'main']

	type Feedback = {
		[key in FeedbackKeys]?: {
			msg: string | null
		}
	}
	let feedback = useState<Feedback>('feedback', () => ({}))

	const updateFeedback = (e: Event) => {
		const input = e.target as HTMLInputElement

		if (input.validationMessage && feedbackKeys.includes(input.id)) {
			feedback.value[input.id as FeedbackKeys] = {
				msg: input.validationMessage,
			}

			return
		}

		if (input.type == 'password') {
			const val = input.value
			const passwordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g

			if (!val.match(passwordRegex)) {
				feedback.value[input.id as FeedbackKeys] = {
					msg: feedbackConfig['invalid-password'],
				}
				return
			}
		}

		if (feedbackKeys.includes(input.id)) {
			feedback.value[input.id as FeedbackKeys] = {
				msg: null,
			}
		}
	}

	const supaLogTranslation = (log: string) => {
		feedback.value = {}

		switch (true) {
			case log.includes('Anonymous sign-ins are disabled'):
				feedback.value.email = { msg: feedbackConfig['no-email'] }
				break
			case log.includes('Email address'):
				feedback.value.email = { msg: feedbackConfig['invalid-email'] }
				break
			case log.includes('email rate limit exceeded'):
				feedback.value.main = { msg: feedbackConfig['limit-rate'] }
				break
			case log.includes('Signup requires a valid password'):
				feedback.value.password = { msg: feedbackConfig['no-password'] }
				break
			case log.includes('Password should contain'):
				feedback.value.password = { msg: feedbackConfig['invalid-password'] }
				break

			default:
				feedback.value.main = { msg: `Unknown error: ${log}` }
				break
		}
	}

	const submitMsgs = (logs: Array<string>) => {
		logs.forEach((log) => {
			console.log(log)
			supaLogTranslation(log)
		})
	}

	return {
		feedback,
		updateFeedback,
		submitMsgs,
	}
}
