import settings from '~/config/settings'

export type HeadingKeys = keyof typeof settings

const activeHeading = ref<HeadingKeys>(Object.keys(settings)[0] as HeadingKeys)

export const useSettings = () => {
	const setActiveHeading = (newHeading: HeadingKeys) => {
		if (newHeading == activeHeading.value) return

		activeHeading.value = newHeading
		return
	}

	return { activeHeading, setActiveHeading }
}
