<script setup lang="ts">
import settings from '~/config/settings'

const { activeHeading } = useSettings()
const currentHeading = computed(() => {
	return settings[activeHeading.value]
})
const hasSubheadings = computed(() => {
	return currentHeading.value.hasSubheadings
})
const hasPreview = computed(() => {
	return 'hasPreview' in currentHeading.value && currentHeading.value.hasPreview
})
const entries = computed(() => {
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
		<UiInputSetting
			v-if="settings"
			v-for="[label, options] in Object.entries(settings)"
			:label="label"
			:options="options"
		/>
	</section>
</template>
