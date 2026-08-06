<script setup lang="ts">
const props = defineProps<{
	label?: string
	value?: string
}>()

let isEditing = ref(false)

function toggleCollapse() {
	isEditing.value = isEditing.value ? false : true
}
</script>

<template>
	<p v-if="!isEditing">{{ label }}</p>
	<label v-if="isEditing">{{ label }}</label>

	<p v-if="!isEditing">{{ value }}</p>
	<input v-if="isEditing" :placeholder="props.value" />
</template>
