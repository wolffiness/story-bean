<script setup lang="ts">
import headings from '~/config/settings'

const props = defineProps<{
	title?: string
	modalId?: string
}>()
</script>

<template>
	<ModalSettings id="settings" modalId="settings">
		<template #nav>
			<SettingsNav />
		</template>
		<template #content>
			<SettingsContent />
		</template>
	</ModalSettings>
</template>
