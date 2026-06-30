<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const { verificationEmail, signUp } = useAccount()
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
			<p v-if="verificationEmail">
				Almost there! We've sent a verfication email to
				<strong>{{ verificationEmail }}</strong
				>. If you don't see it, you may need to
				<strong>check your spam</strong> folder.
			</p>

			<AccountEntry
				class="set-width"
				h2="Come on in!"
				:submit-function="() => signUp(email, password)"
			>
				<template v-slot:main-feedback>
					<p
						v-if="feedback.main && feedback.main.hasError"
						class="form-feedback d-flex gap-025 align-center"
					>
						<span class="icon">error</span>
						<span> {{ feedback.main.msg }}</span>
					</p>
				</template>

				<template v-slot:input-1>
					<div class="w-100 d-flex flex-col gap-025">
						<label for="email">E-mail</label>
						<p
							v-if="feedback.email && feedback.email.hasError"
							class="form-feedback d-flex gap-025 align-center"
						>
							<span class="icon">error</span>
							<span> {{ feedback.email.msg }}</span>
						</p>
						<input
							v-model="email"
							type="email"
							id="email"
							name="email"
							placeholder="storybean@protonmail.com"
							required
						/>
					</div>
				</template>

				<template v-slot:input-3>
					<div class="w-100 d-flex flex-col gap-025">
						<label for="password">Password</label>
						<p
							v-if="feedback.password && feedback.password.hasError"
							class="form-feedback d-flex gap-025 align-center"
						>
							<span class="icon">error</span>
							<span> {{ feedback.password.msg }}</span>
						</p>

						<input
							v-model="password"
							type="password"
							id="password"
							name="password"
							required
						/>
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
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
