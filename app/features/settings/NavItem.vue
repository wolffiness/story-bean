<script setup lang="ts">
import type { SubHeading } from '~/types/settings'
import type { HeadingKeys } from '~/composables/useSettings'

const props = defineProps<{
	heading: HeadingKeys
	activeHeading: HeadingKeys
	subHeadings: SubHeading
	icon: string | null
}>()

const { setActiveHeading } = useSettings()
const { logOut } = useAccount()

const isActive = computed(() => {
	return props.heading == props.activeHeading
})
const btnClass = computed(() => {
	return `${isActive.value ? 'active' : ''} d-flex gap-05 align-center`
})
</script>

<template>
	<UiButton
		@click="setActiveHeading(props.heading)"
		btn-type="setting-category"
		:class="btnClass"
	>
		<span v-if="icon" class="icon">{{ icon }}</span>
		<span>{{ heading }}</span>
	</UiButton>
	<ul v-if="isActive" class="d-flex flex-col gap-025 m-0 px-1 list-none">
		<li v-for="subHeading in Object.keys(subHeadings)">
			{{ subHeading }}
		</li>
	</ul>
	<!-- <button
		@click="logOut"
		class="btn-setting-category d-flex gap-05 align-center"
	>
		<span class="icon">account_box</span>
		<span>Log out</span>
	</button> -->
</template>
