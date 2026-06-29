<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const supabase = useSupabaseClient()
const email = ref('')
const username = ref('')
const password = ref('')

const signUp = async () => {
	const { error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		options: {
			emailRedirectTo: `/confirm`,
		},
	})

	if (error) console.log(error?.message)

	await navigateTo('/')
}
</script>

<template>
	<WebsiteHeader />

	<main id="sign-up">
		<div class="w-page d-grid fr-col gap-gutter">
			<AccountEntry
				class="set-width"
				h2="Come on in!"
				:submit-function="signUp"
			>
				<template v-slot:input-1>
					<div class="d-flex flex-col gap-025">
						<label for="email">E-mail</label>
						<input
							v-model="email"
							type="email"
							name="email"
							placeholder="storybean@protonmail.com"
						/>
					</div>
				</template>

				<template v-slot:input-2>
					<div class="d-flex flex-col gap-025">
						<label for="username">Username</label>
						<input
							v-model="username"
							type="text"
							name="username"
							placeholder="story_bean"
						/>
					</div>
				</template>

				<template v-slot:input-3>
					<div class="d-flex flex-col gap-025">
						<label for="password">Password</label>
						<input v-model="password" type="password" name="password" />
					</div>
				</template>

				<template v-slot:submit-btn>
					<Button type="submit" class="w-100" btnType="primary">
						Create account
					</Button>
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
