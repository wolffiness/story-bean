<script setup lang="ts">
const props = defineProps<{
	modalId: string
	label?: string
	val?: string
	component?: {
		component: Component
		props?: {
			[key in string]?: string | boolean
		}
	}
}>()
</script>

<template>
	<div class="d-flex justify-between align-center gap-1">
		<p class="label">{{ label }}</p>

		<div class="d-flex justify-between align-center gap-05">
			<component
				v-if="component"
				:is="component.component"
				:modalId="modalId"
				v-bind="component.props"
			/>

			<UiButton v-if="val" class="input d-flex align-center gap-1">
				{{ val }}
			</UiButton>
			<UiButton
				v-if="val"
				command="show-modal"
				:commandFor="modalId"
				btn-type="secondary"
			>
				<span class="icon">edit</span>
			</UiButton>

			<UiButton
				v-else="val"
				command="show-modal"
				:commandFor="modalId"
				btn-type="secondary"
			>
				Edit
			</UiButton>
		</div>
	</div>
</template>
