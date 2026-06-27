<script setup lang="ts">
const props = defineProps<{
	type?: 'primary' | 'secondary' | 'tertiary' | 'icon'
	formSubmit?: boolean
}>()

const classes = props.type !== undefined ? `btn-${props.type}` : ''
</script>

<template>
	<button :class="classes" :type="formSubmit ? 'submit' : 'button'">
		<slot></slot>
	</button>
</template>
