<script setup lang="ts">
import type { FormFieldProps } from '~/types/form'

const props = defineProps<{ inputs: [FormFieldProps, ...FormFieldProps[]] }>()
const inputVals = ref<Record<string, string>>({})

const updateRef = (e: Event) => {
	if (!e.target) return

	const name = (e.target as HTMLInputElement).name
	const val = (e.target as HTMLInputElement).value

	inputVals.value[name] = val
}

const submitDisabled = computed(() => {
	let incomplete = false
	props.inputs.forEach((input) => {
		if (input.type !== 'submit') {
			if (!inputVals.value[input.id]) incomplete = true
		}
	})

	return incomplete
})
</script>

<template>
	<section class="d-flex flex-col gap-05">
		<template v-for="input in props.inputs">
			<UiInputForm
				v-if="input.type !== 'submit'"
				@input="updateRef"
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
