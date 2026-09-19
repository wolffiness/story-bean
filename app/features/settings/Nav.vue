<script setup lang="ts">
import type { Heading } from '~/types/settings'
import type { HeadingKeys } from '~/composables/useSettings'
const { settings, activeHeading } = useSettings()

const entries = computed(() => {
	return Object.entries(settings.value ?? {}) as [HeadingKeys, Heading][]
})
</script>

<template>
	<div
		v-if="settings"
		v-for="[heading, options] in entries"
		:key="heading"
		class="d-flex flex-col gap-025"
	>
		<SettingsNavItem
			:heading="heading"
			:options="options"
			:activeHeading="activeHeading"
			:subHeadings="options.subheadings || null"
			:icon="options.icon || null"
		/>
	</div>
</template>
