export const useFormValidation = () => {
	type FeedbackKeys = 'email' | 'password' | 'main'

	type Feedback = {
		[key in FeedbackKeys]?: {
			hasError: boolean
			msg: string
		}
	}
	let feedback = useState<Feedback>('feedback', () => ({}))

	const supaLogTranslation = (log: string) => {
		feedback.value = {}

		switch (true) {
			case log.includes('Anonymous sign-ins are disabled'):
				feedback.value.email = {
					hasError: true,
					msg: 'Please provide your e-mail.',
				}
				break
			case log.includes('Email address'):
				feedback.value.email = {
					hasError: true,
					msg: 'Please provide a valid e-mail address.',
				}
				break
			case log.includes('email rate limit exceeded'):
				feedback.value.email = {
					hasError: true,
					msg: 'Too many emails have been send lately, rate limit will reset the next hour.',
				}
				break
			case log.includes('Signup requires a valid password'):
				feedback.value.password = {
					hasError: true,
					msg: 'Please provide a password.',
				}
				break
			case log.includes('Password should contain'):
				feedback.value.password = {
					hasError: true,
					msg: 'Make sure your password meets the minimum requirements: 8 characters long, 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 symbol.',
				}
				break

			default:
				feedback.value.main = {
					hasError: true,
					msg: `Unknown error: ${log}`,
				}
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
		submitMsgs,
	}
}
