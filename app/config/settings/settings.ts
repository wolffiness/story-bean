import type { AllHeadings } from '~/types/settings'
import { account } from '~/config/settings/categories/account/account'
import { dataPrivacy } from '~/config/settings/categories/dataPrivacy'
import { appearance } from '~/config/settings/categories/appearance'
import { languageTime } from '~/config/settings/categories/languageTime'
import { aboutUs } from '~/config/settings/categories/aboutUs'
import { logOut } from '~/config/settings/categories/logOut'
import type { User } from '@supabase/supabase-js'

export const buildSettings = (user: User | null) => {
	const result: AllHeadings = {
		Account: {
			hasSubheadings: true,
			subheadings: account(user),
			icon: 'account_box',
		},
		// 'Data & Privacy': {
		// 	hasSubheadings: true,
		// 	subheadings: dataPrivacy,
		// 	icon: 'encrypted',
		// },
		// Appearance: {
		// 	hasSubheadings: true,
		// 	subheadings: appearance,
		// 	icon: 'palette',
		// 	hasPreview: true,
		// },
		// 'Language & Time': {
		// 	hasSubheadings: true,
		// 	subheadings: languageTime,
		// 	icon: 'language',
		// },
		// 'About Us': {
		// 	hasSubheadings: false,
		// 	subheadings: aboutUs,
		// 	icon: 'info',
		// },
		'Log Out': {
			hasSubheadings: false,
			subheadings: logOut,
			isButton: true,
			icon: 'logout',
		},
	}

	return result
}
