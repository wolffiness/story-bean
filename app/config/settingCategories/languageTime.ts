import type { SubHeading, Setting } from '~/types/settings'

const language = <Setting[]>[
	{
		'display-language': {
			type: 'edit-val',
		},
		'content-languages': {
			type: 'edit-val',
		},
	},
]

const time = <Setting[]>[
	{
		'time-format': {
			type: 'edit-val',
		},
		'date-format': {
			type: 'edit-val',
		},
		'first-day-of-week': {
			type: 'edit-val',
		},
	},
]

export const languageTime = <SubHeading>{
	Language: language,
	Time: time,
}
