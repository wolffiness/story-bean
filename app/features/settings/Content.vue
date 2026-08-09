<script setup lang="ts">
import settings from '~/config/settings'
import type { Setting } from '~/types/settings'

const { activeHeading } = useSettings()
const hasSubheadings = computed(() => {
	return settings[activeHeading.value].hasSubheadings
})
const entries = computed(() => {
	return Object.entries(settings[activeHeading.value].subheadings)
})
</script>

<template>
	<h2>{{ activeHeading }}</h2>
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
