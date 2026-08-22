<script setup lang="ts">
const { verificationEmail, signUp } = useAccount()
</script>

<template>
	<p v-if="verificationEmail">
		Almost there! We've sent a verification email to
		<strong>{{ verificationEmail }}</strong
		>. If you don't see it, you may need to
		<strong>check your spam</strong> folder.
	</p>

	<AuthForm
		class="set-width"
		h2="Come on in!"
		submitBtn="Create account"
		:submit-function="
			(email: string, password: string, token: string) =>
				signUp(email, password, token)
		"
	/>
</template>
