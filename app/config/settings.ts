import type { AllHeadings } from '~/types/settings'
import { account } from '~/config/settingCategories/account'
import { dataPrivacy } from '~/config/settingCategories/dataPrivacy'
import { appearance } from '~/config/settingCategories/appearance'
import { languageTime } from '~/config/settingCategories/languageTime'
import { aboutUs } from '~/config/settingCategories/aboutUs'
import { logOut } from '~/config/settingCategories/logOut'

export default {
	Account: {
		hasSubheadings: true,
		subheadings: account,
		icon: 'account_box',
	},
	'Data & Privacy': {
		hasSubheadings: true,
		subheadings: dataPrivacy,
		icon: 'encrypted',
	},
	Appearance: {
		hasSubheadings: true,
		subheadings: appearance,
		icon: 'palette',
	},
	'Language & Time': {
		hasSubheadings: true,
		subheadings: languageTime,
		icon: 'language',
	},
	'About Us': {
		hasSubheadings: false,
		subheadings: aboutUs,
		icon: 'info',
	},
	'Log Out': {
		hasSubheadings: false,
		subheadings: logOut,
		isButton: true,
		icon: 'logout',
	},
} satisfies AllHeadings
