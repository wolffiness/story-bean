<script setup lang="ts">
import settings from '~/config/settings'
import type { Heading } from '~/types/settings'
import type { HeadingKeys } from '~/composables/useSettings'

const entries = Object.entries(settings) as [HeadingKeys, Heading][]

const { activeHeading } = useSettings()
</script>

<template>
	<div
		v-for="[heading, options] in entries"
		:key="heading"
		class="d-flex flex-col gap-025"
	>
		<SettingsNavItem
			:heading="heading"
			:options="options"
			:activeHeading="activeHeading"
			:subHeadings="options.subheadings"
			:icon="options.icon || null"
		/>
	</div>
</template>
