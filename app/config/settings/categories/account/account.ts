import type { SubHeading } from '~/types/settings'
import { accountInformation } from './settings/accountInformation'
import { passwordSecurity } from './settings/passwordSecurity'
import { actions } from './settings/actions'
import type { User } from '@supabase/supabase-js'

export const account = (user: User | null) => {
	const result: SubHeading = {
		'Account Information': accountInformation(user),
		'Password & Security': passwordSecurity(),
		// Actions: actions,
	}

	return result
}
