<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

const { verificationEmail, signUp } = useAccount()
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
				submitBtn="Create account"
				:submit-function="
					(email: string, password: string, token: string) =>
						signUp(email, password, token)
				"
			/>
		</div>
	</main>
</template>
