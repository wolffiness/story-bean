import type { User } from '@supabase/supabase-js'
import { buildSettings } from '~/config/settings/settings'
import type { AllHeadings } from '~/types/settings'

export type HeadingKeys = keyof ReturnType<typeof buildSettings>

export const useSettings = () => {
	const settings = useState<AllHeadings | null>('settings', () => null)
	const activeHeading = useState<HeadingKeys | null>(
		'activeHeading',
		() => null,
	)

	const setSettings = (user: User | null) => {
		if (!settings.value) {
			settings.value = buildSettings(user)
			activeHeading.value = Object.keys(settings.value)[0] as HeadingKeys
		}

		return settings.value
	}

	const setActiveHeading = (newHeading: HeadingKeys) => {
		if (newHeading == activeHeading.value) return

		activeHeading.value = newHeading
		return
	}

	return { settings, setSettings, activeHeading, setActiveHeading }
}
