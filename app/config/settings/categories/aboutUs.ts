import type { SubHeading, Setting } from '~/types/settings'

const content: Setting = {
	intro: {
		type: 'edit-val',
	},
	socials: {
		type: 'edit-val',
	},
}

export const aboutUs = <SubHeading>{
	Empty: content,
}
