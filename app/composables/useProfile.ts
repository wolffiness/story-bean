import type { Database } from '~/types/database.types'
import type { User } from '@supabase/supabase-js'

type Profile = Database['public']['Tables']['profiles']

export const useProfile = () => {
	const supabase = useSupabaseClient()

	const ownProfile = useState<Profile['Row'] | null>('ownProfile', () => null)
	const profile = useState<Profile['Row'] | null>('profile', () => null)

	const getOwnProfile = async (userId: User['id'] | undefined) => {
		if (!ownProfile.value && userId) {
			const { data } = await supabase
				.from('profiles')
				.select()
				.eq('user_id', userId)
				.limit(1)

			ownProfile.value = data?.[0] ?? null
		}

		return ownProfile.value
	}

	const getProfile = async (
		profileId: Profile['Row']['profile_id'] | undefined,
	) => {
		if (!profile.value && profileId) {
			const { data } = await supabase
				.from('profiles')
				.select()
				.eq('profile_id', profileId)
				.limit(1)

			profile.value = data?.[0] ?? null
		}

		return profile.value
	}

	return {
		getOwnProfile,
		getProfile,
	}
}
