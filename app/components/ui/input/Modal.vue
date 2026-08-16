<script setup lang="ts">
import type { ModalTypeOptions } from '~/types/settings'

const props = defineProps<
	ModalTypeOptions & {
		label?: string
	}
>()
</script>

<template>
	<div class="d-flex justify-between align-center gap-1">
		<p class="label">{{ label }}</p>

		<div class="d-flex justify-between align-center gap-05">
			<component
				v-if="component"
				:is="component.parent.component"
				:modalId="modalId"
				v-bind="component.parent.props"
			>
				<component
					v-if="component.child"
					:is="component.child.component"
					:inputs="component.child.props?.inputs"
					v-bind="component.child.props"
				/>
			</component>

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
