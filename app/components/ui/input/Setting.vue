<script setup lang="ts">
import type { SettingOptions } from '~/types/settings'

const props = defineProps<{
	label?: string
	options?: SettingOptions
}>()

let isEditing = ref(false)

function toggleEdit() {
	isEditing.value = isEditing.value ? false : true
}
</script>

<template>
	<fieldset class="setting-field d-flex flex-col gap-1">
		<!-- View -->
		<div v-if="!isEditing" class="d-flex justify-between align-center gap-1">
			<p class="label">{{ label }}</p>

			<div v-if="options?.type == 'edit-val'" class="d-flex justify-between align-center gap-05">
				<UiButton class="input d-flex align-center gap-1" @click="toggleEdit">{{ options.val }}</UiButton>
			</div>

			<div v-if="options?.type == 'edit'" class="d-flex justify-between align-center gap-05">
				<UiButton btn-type="secondary" @click="toggleEdit">Edit</UiButton>
			</div>

			<div v-if="options?.type == 'btn'" class="d-flex justify-between align-center gap-05">
				<UiButton :btn-type="options?.btnType" :btn-state="options?.btnState">{{ options?.val }}</UiButton>
			</div>
		</div>

		<!-- Edit -->
		<div v-if="isEditing" class="d-flex justify-between align-center gap-1">
			<label v-if="label">{{ label }}</label>

			<div v-if="options?.type == 'edit-val'" class="d-flex justify-between align-center gap-05">
				<input class="d-flex align-center gap-1" :placeholder="props.options?.val"></input>
				<UiButton class="d-flex align-center gap-1" @click="toggleEdit">			
					<span class="icon">cancel</span>
				</UiButton>
			</div>

			<div v-if="options?.type == 'edit'" class="d-flex justify-between align-center gap-05">
				<UiButton @click="toggleEdit">{{ options }}</UiButton>
			</div>
		</div>
	</fieldset>
</template>
