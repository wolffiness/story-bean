<script setup lang="ts">
const { logIn } = useAccount()
</script>

<template>
	<AuthForm
		class="set-width"
		h2="Welcome back!"
		submit-btn="Log in"
		:submit-function="
			(email: string, password: string, token: string) =>
				logIn(email, password, token)
		"
		:exclude-password-eval="true"
	/>
</template>
