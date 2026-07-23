<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const { logIn } = useAccount()
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
				h2="Welcome back!"
				submitBtn="Log in"
				:submit-function="
					(email: string, password: string) => logIn(email, password)
				"
			/>
		</div>
	</main>
</template>
