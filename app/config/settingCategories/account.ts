import type { SubHeading, Setting } from '~/types/settings'

const accountInformation = <Setting[]>[
	{
		username: {
			type: 'edit-val',
		},
		email: {
			type: 'edit-val',
		},
	},
]

const passwordSecurity = <Setting[]>[
	{
		password: {
			type: 'edit-val',
		},
	},
]

const actions = <Setting[]>[
	{
		'log-out': {
			type: 'edit-val',
		},
		'delete-account': {
			type: 'edit-val',
		},
	},
]

export const account = <SubHeading>{
	'Account Information': accountInformation,
	'Password & Security': passwordSecurity,
	Actions: actions,
}
