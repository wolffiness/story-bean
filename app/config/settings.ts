import type { Heading } from '~/types/settings'
import { account } from '~/config/settingCategories/account'
import { dataPrivacy } from '~/config/settingCategories/dataPrivacy'
import { appearance } from '~/config/settingCategories/appearance'
import { languageTime } from '~/config/settingCategories/languageTime'
import { aboutUs } from '~/config/settingCategories/aboutUs'
import { logOut } from '~/config/settingCategories/logOut'

export default {
	Account: account,
	'Data & Privacy': dataPrivacy,
	Appearance: appearance,
	'Language & Time': languageTime,
	'About Us': aboutUs,
	'Log Out': logOut,
} satisfies Heading
