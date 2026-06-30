<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const { signUp } = useAccount()
const email = ref('')
const password = ref('')
const defaultError = {
	email: {
		hasError: false,
		msg: '',
	},
	password: {
		hasError: false,
		msg: '',
	},
	btn: {
		hasError: false,
		msg: '',
	},
}
const errorMsg = ref(defaultError)
</script>

<template>
	<WebsiteHeader />

	<main id="sign-up">
		<div class="w-page d-grid fr-col gap-gutter">
			<AccountEntry
				class="set-width"
				h2="Come on in!"
				:submit-function="() => signUp(email, password)"
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
						<p v-if="errorMsg.email.hasError">{{ errorMsg.email.msg }}</p>
					</div>
				</template>

				<template v-slot:input-3>
					<div class="d-flex flex-col gap-025">
						<label for="password">Password</label>
						<input v-model="password" type="password" name="password" />
						<p v-if="errorMsg.password.hasError">{{ errorMsg.password.msg }}</p>
					</div>
				</template>

				<template v-slot:submit-btn>
					<Button type="submit" class="w-100" btnType="primary">
						Create account
					</Button>
					<p v-if="errorMsg.btn.hasError">{{ errorMsg.btn.msg }}</p>
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
