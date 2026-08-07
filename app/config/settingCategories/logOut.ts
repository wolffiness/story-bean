import type { SubHeading, Setting } from '~/types/settings'

const content = <Setting[]>[
	{
		'log-out': {
			type: 'edit-val',
		},
	},
]

export const logOut = <SubHeading>{
	Empty: content,
}
