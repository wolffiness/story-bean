<script setup lang="ts">
import type { HTMLInputTypeAttribute } from '~/types/form'
import type { FeedbackKeys } from '~/types/form'

const { feedback, updateFeedback, passwordFeedback, handleValidatePassword } =
	useFormValidation()

const props = defineProps<{
	type: HTMLInputTypeAttribute
	id: string
	placeholder?: string
	required?: boolean
	label?: string
	feedbackKey: FeedbackKeys
	excludePasswordEval?: boolean
}>()

const model = defineModel<string>()

const handleChange = (e: Event) => {
	if (props.type == 'password' && !props.excludePasswordEval) {
		handleValidatePassword(e)
	}
}
</script>

<template>
	<fieldset class="w-100 d-flex flex-col gap-05">
		<label v-if="label" :for="id">{{ label }}</label>
		<input
			v-model="model"
			:type="type"
			:id="id"
			:name="id"
			:placeholder="placeholder"
			@blur="updateFeedback"
			@input="handleChange"
			:required="required"
			:class="{ 'user-invalid': !!feedback[feedbackKey]?.msg }"
			:data-password-eval="
				type == 'password' && excludePasswordEval ? false : true
			"
		/>

		<!-- Form validation -->
		<section>
			<p
				v-if="feedback[feedbackKey] && feedback[feedbackKey]?.msg"
				class="form-feedback"
			>
				<span class="icon">error</span>
				<span v-html="feedback[feedbackKey]?.msg"></span>
			</p>

			<p
				v-if="
					passwordFeedback[feedbackKey] && passwordFeedback[feedbackKey]?.msg
				"
				class="form-feedback password-feedback"
			>
				<span v-html="passwordFeedback[feedbackKey]?.msg"></span>
			</p>
		</section>
	</fieldset>
</template>
