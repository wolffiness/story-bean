<script setup lang="ts">
import type { SettingOptions } from '~/types/settings'

const props = defineProps<{
	label?: string
	options?: SettingOptions
}>()
</script>

<template>
	<fieldset class="setting-field d-flex flex-col gap-1">
		<UiInputModal
			v-if="props.options?.type == 'modal'"
			:type="props.options.type"
			:component="props.options.component"
			:modal-id="props.options.modalId"
			:label="props.label"
			:val="props.options.val"
		/>

		<UiInputButton
			v-if="props.options?.type == 'btn'"
			:label="props.label"
			:type="props.options.type"
			:btn-type="props.options.btnType"
			:btn-state="props.options?.btnState"
			:click="props.options?.click"
		/>
	</fieldset>
</template>
