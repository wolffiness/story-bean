<script setup lang="ts">
import type { FormFieldProps } from '~/types/form'

const props = defineProps<{ inputs: [FormFieldProps, ...FormFieldProps[]] }>()
const submitDisabled = computed(() => true)
</script>

<template>
	<section class="d-flex flex-col gap-05">
		<template v-for="input in props.inputs">
			<UiInputForm
				v-if="input.type !== 'submit'"
				:type="input.type"
				:id="input.id"
				:placeholder="input.placeholder"
				:required="input.required"
				:label="input.label"
				:feedbackKey="input.feedbackKey"
				:excludePasswordEval="input.excludePasswordEval"
			/>

			<UiButton
				v-else
				type="submit"
				class="w-100 mt-1"
				btnType="primary"
				:disabled="submitDisabled"
			>
				{{ input.label ? input.label : 'Submit' }}
			</UiButton>
		</template>
	</section>
</template>
