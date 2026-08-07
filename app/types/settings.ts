import type { btnType, btnState } from '~/types/btn'

export type Setting = {
	[key in string]?: {
		type?: 'edit-val'
		btnType?: btnType
		btnState?: btnState
		click?: 'logOut'
	}
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
