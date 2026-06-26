<script setup lang="ts">
const props = defineProps<{
	linkPage?: string
	text?: string
	type?: 'primary' | 'secondary' | 'tertiary'
}>()

const classes = props.type !== undefined ? `btn-${props.type}` : ''
</script>

<template>
	<button :class="classes">
		<template v-if="linkPage">
			<NuxtLink :to="linkPage">
				{{ text }}
			</NuxtLink>
		</template>
		<template v-else>{{ text }}</template>
	</button>
</template>
