<script setup lang="ts">
import type { FormFieldProps } from '~/types/form'

const { feedback, updateFeedback, passwordFeedback, handleValidatePassword } =
	useFormValidation()

const props = defineProps<FormFieldProps>()

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
			:id="id"
			v-model="model"
			:type="type"
			:name="id"
			:placeholder="placeholder"
			:required="required"
			:class="{ 'user-invalid': !!feedback[feedbackKey]?.msg }"
			:data-password-eval="
				type == 'password' && excludePasswordEval ? false : true
			"
			@blur="updateFeedback"
			@input="handleChange"
		>

		<!-- Form validation -->
		<section>
			<p
				v-if="feedback[feedbackKey] && feedback[feedbackKey]?.msg"
				class="form-feedback"
			>
				<span class="icon">error</span>
				<span v-html="feedback[feedbackKey]?.msg"/>
			</p>

			<p
				v-if="
					passwordFeedback[feedbackKey] && passwordFeedback[feedbackKey]?.msg
				"
				class="form-feedback password-feedback"
			>
				<span v-html="passwordFeedback[feedbackKey]?.msg"/>
			</p>
		</section>
	</fieldset>
</template>
