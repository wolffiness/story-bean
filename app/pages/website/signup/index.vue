<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const { signUp } = useAccount()
const { feedback } = useFormValidation()
const email = ref('')
const password = ref('')
const submitDisabled = computed(() =>
	!email.value || !password.value ? true : false,
)
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
						<p v-if="feedback.email && feedback.email.hasError">
							{{ feedback.email.msg }}
						</p>
					</div>
				</template>

				<template v-slot:input-3>
					<div class="d-flex flex-col gap-025">
						<label for="password">Password</label>
						<input v-model="password" type="password" name="password" />
						<p v-if="feedback.password && feedback.password.hasError">
							{{ feedback.password.msg }}
						</p>
					</div>
				</template>

				<template v-slot:submit-btn>
					<Button
						type="submit"
						class="w-100"
						btnType="primary"
						:disabled="submitDisabled"
					>
						Create account
					</Button>
					<p v-if="feedback.main && feedback.main.hasError">
						{{ feedback.main.msg }}
					</p>
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
