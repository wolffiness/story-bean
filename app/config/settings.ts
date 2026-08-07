import type { AllHeadings } from '~/types/settings'
import { account } from '~/config/settingCategories/account'
import { dataPrivacy } from '~/config/settingCategories/dataPrivacy'
import { appearance } from '~/config/settingCategories/appearance'
import { languageTime } from '~/config/settingCategories/languageTime'
import { aboutUs } from '~/config/settingCategories/aboutUs'
import { logOut } from '~/config/settingCategories/logOut'

export default {
	Account: { subheadings: account, icon: 'account_box' },
	'Data & Privacy': { subheadings: dataPrivacy, icon: 'encrypted' },
	Appearance: { subheadings: appearance, icon: 'palette' },
	'Language & Time': { subheadings: languageTime, icon: 'language' },
	'About Us': { subheadings: aboutUs, icon: 'info' },
	'Log Out': { subheadings: logOut, icon: 'logout' },
} satisfies AllHeadings
