import type { btnType, btnState } from '~/types/btn'

export type SettingOptions = {
	type?: 'edit-val' | 'btn' | 'edit'
	btnType?: btnType
	btnState?: btnState
	click?: 'logOut'
	val?: string
}

export type Setting = {
	[key in string]?: SettingOptions
}

export type SubHeading = { [key in string]?: Setting }

export type Heading = {
	[key in string]: any
} & {
	hasSubheadings: boolean
	subheadings: SubHeading
	isButton?: boolean
	icon?: string
}

export type AllHeadings = {
	[key in string]?: Heading
}
