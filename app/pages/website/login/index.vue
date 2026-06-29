<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const logIn = async () => {
	const { error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value,
	})

	if (error) console.log(error)

	await navigateTo('/')
}
</script>

<template>
	<WebsiteHeader />

	<main id="sign-up">
		<div class="w-page d-grid fr-col gap-gutter">
			<AccountEntry
				class="set-width"
				h2="Welcome back!"
				:submitFunction="logIn"
			>
				<template v-slot:input-1>
					<div class="d-flex flex-col gap-025">
						<label for="username">E-mail / Username</label>
						<input
							v-model="email"
							type="text"
							name="username"
							placeholder="storybean@protonmail.com"
						/>
					</div>
				</template>

				<template v-slot:input-2>
					<div class="d-flex flex-col gap-025">
						<label for="email">Password</label>
						<input v-model="password" type="password" name="password" />
					</div>
				</template>

				<template v-slot:submit-btn>
					<Button type="submit" class="w-100" btnType="primary">
						Log in
					</Button>
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
