<script setup lang="ts">
import logoImg from '@img/logo.svg'
</script>

<template>
	<header class="w-100 d-flex flex-col align-center py-1 mb-2">
		<nav class="w-page">
			<NuxtLink class="d-flex flex-center" to="/website">
				<UiImg alt="Logo" :src="logoImg" height="32" />
			</NuxtLink>
		</nav>
	</header>
</template>
