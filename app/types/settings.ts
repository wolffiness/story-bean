export type Setting = {
	[key in string]?: {
		type: 'edit-val'
	}
}

export type SubHeading = { [key in string]?: Setting }

export type Heading = { [key in string]: SubHeading }
