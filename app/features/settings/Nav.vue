<script setup lang="ts">
import headings from '~/config/settings'
import type { Headings } from '~/composables/useSettings'

const entries = Object.entries(headings) as [
	Headings,
	(typeof headings)[Headings],
][]

const { activeHeading } = useSettings()
</script>

<template>
	<div
		v-for="[heading, subHeadings] in entries"
		:key="heading"
		class="d-flex flex-col gap-025"
	>
		<SettingsNavItem
			:heading="heading"
			:activeHeading="activeHeading"
			:subHeadings="subHeadings"
		/>
	</div>
</template>
