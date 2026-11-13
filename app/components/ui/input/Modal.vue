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
				:is="component.parent.component"
				v-if="component"
				:modal-id="modalId"
				v-bind="component.parent.props"
			>
				<component
					:is="component.child.component"
					v-if="component.child"
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
				:command-for="modalId"
				btn-type="secondary"
			>
				<span class="icon">edit</span>
			</UiButton>

			<UiButton
				v-else
				command="show-modal"
				:command-for="modalId"
				btn-type="secondary"
			>
				Edit
			</UiButton>
		</div>
	</div>
</template>
