export const useAccount = () => {
	const supabase = useSupabaseClient()
	const { submitMsgs } = useFormValidation()

	const verificationEmail = useState<string | null>(
		'verification_email',
		() => null,
	)

	const signUp = async (email: string, password: string, token: string) => {
		const input = {
			email: email,
			password: password,
			options: { emailRedirectTo: `/confirm`, captchaToken: token },
		}

		const { data, error } = await supabase.auth.signUp(input)

		if (error) return submitMsgs([error.message], input)

		if (data.user) return (verificationEmail.value = data.user.email ?? email)

		submitMsgs(['Something went wrong when signing up.'])
	}

	const logIn = async (
		email: string,
		password: string,
		token?: string | undefined,
	) => {
		const input = {
			email: email,
			password: password,
			options: { captchaToken: token },
		}

		const { error } = await supabase.auth.signInWithPassword(input)

		if (error) return submitMsgs([error.message])

		await navigateTo('/')
	}

	const logOut = async () => {
		const { error } = await supabase.auth.signOut()

		if (error) console.log(error)

		location.reload()
	}

	return {
		verificationEmail,
		signUp,
		logIn,
		logOut,
	}
}
