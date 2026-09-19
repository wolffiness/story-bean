<script setup lang="ts">
const { settings, activeHeading } = useSettings()
const currentHeading = computed(() => {
	if (!activeHeading.value) return null

	return settings.value?.[activeHeading.value]
})
const hasSubheadings = computed(() => {
	if (!currentHeading.value) return null
	return currentHeading.value.hasSubheadings
})
const hasPreview = computed(() => {
	if (!currentHeading.value) return null
	return 'hasPreview' in currentHeading.value && currentHeading.value.hasPreview
})
const entries = computed(() => {
	if (!currentHeading.value) return null
	return Object.entries(currentHeading.value.subheadings)
})
</script>

<template>
	<h2>{{ activeHeading }}</h2>
	<CanvasAppearance v-if="hasPreview" />

	<section
		v-for="[subHeading, settings] in entries"
		:key="subHeading"
		class="w-100 d-flex flex-col gap-1"
	>
		<h3 v-if="hasSubheadings" :id="subHeading">
			{{ subHeading }}
		</h3>
		<SettingsSetting
			v-if="settings"
			v-for="[label, options] in Object.entries(settings)"
			:key="label"
			:label="label"
			:options="options"
		/>
	</section>
</template>
