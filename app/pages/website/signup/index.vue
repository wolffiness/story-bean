<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

useHead({
	title: 'Story Bean | Sign up',
})
</script>

<template>
	<body>
		<LayoutWebsiteHeader />

		<main id="sign-up">
			<div class="w-page d-grid fr-col gap-gutter">
				<AuthSignUp />
			</div>
		</main>
	</body>
</template>
