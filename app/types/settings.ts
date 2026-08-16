import type { Component } from 'vue'
import type { btnType, btnState } from '~/types/btn'
import type { iconName } from '~/types/icon'

type BaseSettingOptions = {
	val?: string
}

type GenericTypeOptions = BaseSettingOptions & {
	type: 'edit-val' | 'edit'
}

export type ModalTypeOptions = BaseSettingOptions & {
	type: 'modal'
	modalId: string
	component: {
		parent: {
			component: Component
			props?: {
				[key in string]?: any
			}
		}
		child?: {
			component: Component
			props?: {
				[key in string]?: any
			}
		}
	}
}

type BtnTypeOptions = BaseSettingOptions & {
	type: 'btn'
	btnType: btnType
	btnState?: btnState
	click?: 'logOut'
}

export type SettingOptions =
	| GenericTypeOptions
	| ModalTypeOptions
	| BtnTypeOptions

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
