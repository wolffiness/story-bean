import headings from '~/config/settings'

export type Headings = keyof typeof headings

const activeHeading = ref<Headings>(Object.keys(headings)[0] as Headings)

export const useSettings = () => {
	const setActiveHeading = (newHeading: Headings) => {
		if (newHeading == activeHeading.value) return

		activeHeading.value = newHeading
		return
	}

	return { activeHeading, setActiveHeading }
}
