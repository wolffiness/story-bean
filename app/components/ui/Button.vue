<script setup lang="ts">
const props = defineProps<{
	btnType?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'setting-category'
}>()

const classes = props.btnType !== undefined ? `btn-${props.btnType}` : ''
</script>

<template>
	<button :class="classes">
		<slot></slot>
	</button>
</template>
