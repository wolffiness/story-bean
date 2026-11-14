<script setup lang="ts">
const props = defineProps<{
	alt: string
	src: string
}>()
</script>

<template>
	<img :alt="props.alt" :src="props.src" />
</template>
