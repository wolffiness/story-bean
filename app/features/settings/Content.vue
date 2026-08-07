<script setup lang="ts">
import headings from '~/config/settings'

const { activeHeading } = useSettings()
const entries = computed(() => {
	return Object.entries(headings[activeHeading.value].subheadings)
})
</script>

<template>
	<h2>{{ activeHeading }}</h2>
	<section
		v-for="[subHeading, settings] in entries"
		:key="subHeading"
		class="w-100 d-flex flex-col gap-1"
	>
		<h3>{{ subHeading }}</h3>
		<UiInputSetting
			v-if="settings"
			v-for="[label, options] in Object.entries(settings)"
			:label="label"
			value="story_bean"
		/>
	</section>
</template>
