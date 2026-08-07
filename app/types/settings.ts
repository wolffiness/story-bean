export type Setting = {
	[key in string]?: {
		type: 'edit-val'
	}
}

export type SubHeading = { [key in string]?: Setting }

export type Heading = {
	[key in string]: any
} & {
	subheadings: SubHeading
	icon?: string
}

export type AllHeadings = {
	[key in string]?: Heading
}
