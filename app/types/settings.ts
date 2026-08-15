import type { Component } from 'vue'
import type { btnType, btnState } from '~/types/btn'
import type { iconName } from '~/types/icon'

export type SettingOptions = {
	type?: 'edit-val' | 'btn' | 'edit' | 'modal'
	btnType?: btnType
	btnState?: btnState
	click?: 'logOut'
	val?: string
	component?: {
		component: Component
		props?: {
			[key in string]?: string | boolean
		}
	}
}

export type Setting = {
	[key in string]?: SettingOptions
}

export type SubHeading = { [key in string]?: Setting }

export type Heading = {
	hasSubheadings: boolean
	subheadings: SubHeading
	isButton?: boolean
	icon?: iconName
	hasPreview?: boolean
}

export type AllHeadings = {
	[key in string]?: Heading
}
