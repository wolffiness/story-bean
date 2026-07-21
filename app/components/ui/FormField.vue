<script setup lang="ts">
import type { HTMLInputTypeAttribute } from '~/types/form'
import type { FeedbackKeys } from '~/types/form'

const { feedback, updateFeedback } = useFormValidation()

const props = defineProps<{
	type: HTMLInputTypeAttribute
	id: string
	placeholder?: string
	required?: boolean
	label?: string
	feedbackKey: FeedbackKeys
}>()

const model = defineModel<string>()
</script>

<template>
	<fieldset class="w-100 d-flex flex-col gap-025">
		<label v-if="label" :for="id">{{ label }}</label>
		<input
			v-model="model"
			:type="type"
			:id="id"
			:name="id"
			:placeholder="placeholder"
			@blur="updateFeedback"
			:required="required"
			:class="{ 'user-invalid': !!feedback[feedbackKey]?.msg }"
		/>

		<p
			v-if="feedback[feedbackKey] && feedback[feedbackKey]?.msg"
			class="form-feedback"
		>
			<span class="icon">error</span>
			<span v-html="feedback[feedbackKey]?.msg"></span>
		</p>
	</fieldset>
</template>
