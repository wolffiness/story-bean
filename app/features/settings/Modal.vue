<script setup lang="ts">
const props = defineProps<{
	title?: string
	modalId?: string
}>()
</script>

<template>
	<ModalSettings id="settings" modal-id="settings">
		<template #nav>
			<SettingsNav />
		</template>
		<template #content>
			<SettingsContent />
		</template>
	</ModalSettings>
</template>
