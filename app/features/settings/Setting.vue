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
			v-if="options?.type == 'modal'"
			:type="options.type"
			:component="options.component"
			:modalId="options.modalId"
			:label="label"
			:val="options.val"
		/>

		<UiInputButton
			v-if="options?.type == 'btn'"
			:label="label"
			:type="options.type"
			:btnType="options.btnType"
			:btnState="options?.btnState"
			:click="options?.click"
		/>
	</fieldset>
</template>
