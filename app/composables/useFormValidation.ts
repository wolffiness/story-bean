import feedbackConfig from '~/config/form.json'
import type { FeedbackKeys } from '~/types/form'

export const useFormValidation = () => {
	const feedbackKeys = ['email', 'password', 'main']

	type Feedback = {
		[key in FeedbackKeys]?: {
			msg: string | null
		}
	}
	type msgInput = {
		[key in FeedbackKeys]?: string
	}
	let feedback = useState<Feedback>('feedback', () => ({}))
	let passwordFeedback = useState<Feedback>('passwordFeedback', () => ({}))

	const updateFeedback = (e: Event) => {
		const input = e.target as HTMLInputElement

		if (passwordFeedback.value.password?.msg !== null) {
			passwordFeedback.value.password = {
				msg: null,
			}
		}

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
					msg: `${feedbackConfig['invalid-password'].split('<ul>')[0]}${validatePassword(val)}`,
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

	const handleValidatePassword = (e: Event) => {
		const input = e.target as HTMLInputElement
		if (input.type !== 'password') return
		const val = input.value

		feedback.value[input.id as FeedbackKeys] = {
			msg: null,
		}

		passwordFeedback.value.password = {
			msg: validatePassword(val),
		}
	}

	const validatePassword = (val: string) => {
		const textSplit = feedbackConfig['invalid-password'].split('<ul>')
		const criteria = textSplit[1]?.split('<li>')
		const validation: Array<string> = []

		criteria?.forEach((rule: string) => {
			switch (true) {
				case rule.includes('8 characters long'):
					validation.push(
						`${checkCriteria(val, /[A-Za-z\d@$!%*?&]{8,}/g)}${rule}`,
					)

					break
				case rule.includes('1 lowercase letter'):
					validation.push(`${checkCriteria(val, /[a-z]/g)}${rule}`)
					break
				case rule.includes('1 uppercase letter'):
					validation.push(`${checkCriteria(val, /[A-Z]/g)}${rule}`)
					break
				case rule.includes('1 digit'):
					validation.push(`${checkCriteria(val, /[1-9]/g)}${rule}`)
					break
				case rule.includes('1 symbol'):
					validation.push(`${checkCriteria(val, /[@$!%*?&]/g)}${rule}`)
					break
			}
		})

		return `<ul>${validation.join('')}`
	}

	const checkCriteria = (val: string, match: RegExp) => {
		if (val.match(match)) {
			return "<li class='rule-valid'>"
		}

		return "<li class='rule-invalid'>"
	}

	const supaLogTranslation = (log: string, input: msgInput | undefined) => {
		feedback.value = {}

		switch (true) {
			case log.includes('Anonymous sign-ins are disabled'):
				feedback.value.email = { msg: feedbackConfig['no-email'] }
				break
			case log.includes('Email address'):
				feedback.value.email = { msg: feedbackConfig['invalid-email'] }
				break
			case log.includes('Email not confirmed'):
				feedback.value.email = { msg: feedbackConfig['unverified-email'] }
				break
			case log.includes('email rate limit exceeded'):
				feedback.value.main = { msg: feedbackConfig['limit-rate'] }
				break

			case log.includes('Signup requires a valid password'):
				feedback.value.password = { msg: feedbackConfig['no-password'] }
				break
			case log.includes('Password should contain'):
				if (input?.password) {
					feedback.value.password = {
						msg: `${feedbackConfig['invalid-password'].split('<ul>')[0]}${validatePassword(input?.password)}`,
					}
				} else {
					feedback.value.password = { msg: feedbackConfig['invalid-password'] }
				}
				break

			case log.includes('Invalid login credentials'):
				feedback.value.main = { msg: feedbackConfig['invalid-credentials'] }
				break
			default:
				feedback.value.main = { msg: `Unknown error: ${log}` }
				break
		}
	}

	const submitMsgs = (logs: Array<string>, input?: msgInput) => {
		logs.forEach((log) => {
			console.error(log)
			supaLogTranslation(log, input)
		})
	}

	return {
		feedback,
		updateFeedback,
		passwordFeedback,
		handleValidatePassword,
		submitMsgs,
	}
}
