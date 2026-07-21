<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const { logIn } = useAccount()
const email = ref('')
const password = ref('')
</script>

<template>
	<WebsiteHeader />

	<main id="sign-up">
		<div class="w-page d-grid fr-col gap-gutter">
			<AccountEntry
				class="set-width"
				h2="Welcome back!"
				:submit-function="() => logIn(email, password)"
			>
				<template v-slot:input-1>
					<fieldset class="d-flex flex-col gap-025">
						<label for="username">E-mail / Username</label>
						<input
							v-model="email"
							type="text"
							name="username"
							placeholder="storybean@protonmail.com"
						/>
					</fieldset>
				</template>

				<template v-slot:input-2>
					<fieldset class="d-flex flex-col gap-025">
						<label for="email">Password</label>
						<input v-model="password" type="password" name="password" />
					</fieldset>
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
