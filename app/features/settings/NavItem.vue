<script setup lang="ts">
import type { SubHeading, Heading } from '~/types/settings'
import type { HeadingKeys } from '~/composables/useSettings'

const props = defineProps<{
	heading: HeadingKeys
	options: Heading
	activeHeading: HeadingKeys
	subHeadings: SubHeading
	icon: string | null
}>()

const { setActiveHeading } = useSettings()
const { logOut } = useAccount()
const btnSettings =
	props.options.isButton && props.subHeadings.Btn
		? props.subHeadings.Btn[props.heading]
		: false

const isActive = computed(() => {
	return props.heading == props.activeHeading
})
const btnClass = computed(() => {
	return `${isActive.value ? 'active' : ''} d-flex gap-05 align-center`
})
const iconClass = computed(() => {
	return `${isActive.value ? 'active' : ''} icon`
})
const isShown = computed(() => {
	return (
		isActive.value && props.options.hasSubheadings && !props.options.isButton
	)
})

const handleClick = () => {
	if (!btnSettings || btnSettings.type !== 'btn') {
		setActiveHeading(props.heading)
		return
	}

	if (btnSettings.click == 'logOut') {
		logOut()
		return
	}

	return
}
</script>

<template>
	<UiButton
		@click="handleClick"
		:btn-type="
			btnSettings && btnSettings.type == 'btn' && btnSettings.btnType
				? btnSettings.btnType
				: 'setting-category'
		"
		:btn-state="
			btnSettings && btnSettings.type == 'btn' && btnSettings.btnState
				? btnSettings.btnState
				: 'default'
		"
		:class="btnClass"
	>
		<span v-if="icon" :class="iconClass">{{ icon }}</span>
		<span>{{ heading }}</span>
	</UiButton>

	<ul v-if="isShown" class="d-flex flex-col gap-025 m-0 px-1 list-none">
		<li v-for="subHeading in Object.keys(subHeadings)" :key="subHeading">
			<a :href="`#${subHeading}`"> {{ subHeading }} </a>
		</li>
	</ul>
</template>
