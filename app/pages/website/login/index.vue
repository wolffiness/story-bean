<script setup lang="ts">
definePageMeta({
	layout: 'website',
})

useHead({
	title: 'Story Bean | Log in',
})
</script>

<template>
	<body>
		<LayoutWebsiteHeader />

		<main id="sign-up">
			<div class="w-page d-grid fr-col gap-gutter">
				<AuthLogIn />
			</div>
		</main>
	</body>
</template>
