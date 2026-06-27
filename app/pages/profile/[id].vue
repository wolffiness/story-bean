<script setup lang="ts">
import Page from '~/components/layout/Page.vue'
</script>

<template>
	<Page>
		<h1>Profile: {{ $route.params.id }}</h1>
	</Page>
</template>
