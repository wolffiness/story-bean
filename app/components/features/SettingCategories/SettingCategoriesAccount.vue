<script setup lang="ts">
import { ref } from 'vue'
import SettingInput from '@/app/components/ui/SettingInput.vue'

const props = defineProps<{
	headings?: string[]
}>()

const emit = defineEmits<{
	(event: 'update:headings', value: string[]): void
}>()

const headings = ref<string[]>(props.headings ?? [])

const setHeading = (el: Element | ComponentPublicInstance | null) => {
	if (!(el instanceof HTMLElement)) return

	const text = el.innerText.trim()
	if (!text) return

	if (!headings.value.includes(text)) {
		const next = [...headings.value, text]
		headings.value = next
		emit('update:headings', next)
	}
}
</script>

<template>
	<h2>Account</h2>

	<section class="w-100 d-flex flex-col gap-1">
		<h3 :ref="setHeading">Account Information</h3>

		<SettingInput label="Username" value="story_bean" />
		<SettingInput label="E-mail" value="*********@protonmail.com" />
	</section>

	<section class="w-100 d-flex flex-col gap-1">
		<h3 :ref="setHeading">Password & Security</h3>

		<SettingInput label="Password" />
	</section>

	<section class="w-100 d-flex flex-col gap-1">
		<h3 :ref="setHeading">Actions</h3>

		<SettingInput label="Log out" />
		<SettingInput label="Delete account" />
	</section>
</template>
