<script setup lang="ts">
import type { FormFieldProps } from '~/types/form'

const props = defineProps<{ inputs: [FormFieldProps, ...FormFieldProps[]] }>()
</script>

<template>
	<UiInputForm
		v-for="input in props.inputs"
		:type="input.type"
		:id="input.id"
		:placeholder="input.placeholder"
		:required="input.required"
		:label="input.label"
		:feedbackKey="input.feedbackKey"
		:excludePasswordEval="input.excludePasswordEval"
	/>
</template>
