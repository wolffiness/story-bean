<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
</script>

<template>
	<div class="page w-100 d-flex flex-col align-center my-2">
		<div class="w-page m-page d-grid fr-col gap-gutter">
			<Header />
			<main>
				<slot></slot>
			</main>
		</div>
	</div>
</template>
