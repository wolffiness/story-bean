<script setup lang="ts">
const props = defineProps<{
	linkPage?: string
	text?: string
	type?: 'primary' | 'secondary' | 'tertiary'
	formSubmit?: boolean
}>()

const classes = props.type !== undefined ? `btn-${props.type}` : ''
</script>

<template>
	<button :class="classes" :type="formSubmit ? 'submit' : 'button'">
		<template v-if="linkPage">
			<NuxtLink :to="linkPage">
				{{ text }}
			</NuxtLink>
		</template>
		<template v-else>{{ text }}</template>
	</button>
</template>
