<script setup lang="ts">
definePageMeta({
	layout: 'website',
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
