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
					<p v-if="feedback.main && feedback.main.msg" class="form-feedback">
						<span class="icon">error</span>
						<span v-html="feedback.main.msg"></span>
					</p>
				</template>

				<template v-slot:input-1>
					<FormField
						type="email"
						id="email"
						placeholder="storybean@protonmail.com"
						v-model="email"
						:required="true"
						label="E-mail"
						feedbackKey="email"
					/>
				</template>

				<template v-slot:input-2>
					<FormField
						type="password"
						id="password"
						v-model="password"
						:required="true"
						label="Password"
						feedbackKey="password"
					/>
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
