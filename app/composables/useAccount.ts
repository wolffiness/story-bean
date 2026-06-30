export const useAccount = () => {
	const supabase = useSupabaseClient()

	const signUp = async (email: string, password: string) => {
		const { error } = await supabase.auth.signUp({
			email: email,
			password: password,
			options: {
				emailRedirectTo: `/confirm`,
			},
		})

		if (error) console.log(error.message)
	}

	const logIn = async (email: string, password: string) => {
		const { error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		})

		if (error) {
			console.log(error)
			return
		}

		await navigateTo('/')
	}

	const logOut = async () => {
		const { error } = await supabase.auth.signOut()

		if (error) console.log(error)

		location.reload()
	}

	return {
		signUp,
		logIn,
		logOut,
	}
}
