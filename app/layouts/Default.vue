<script setup lang="ts">
const { setSettings } = useSettings()
const { getUser } = useAccount()
const { getOwnProfile } = useProfile()

const user = await getUser()
const profile = await getOwnProfile(user?.id)

onMounted(() => {
	setSettings(user)
})
</script>

<template>
	<div class="page w-100 d-flex flex-col align-center my-2">
		<div class="w-page m-page d-grid fr-col gap-gutter">
			<LayoutHeader :profile-id="profile?.profile_id" />
			<main>
				<slot/>
			</main>
		</div>
	</div>
</template>

<style lang="scss">
.page main {
	grid-column: calc(var(--col) / 4 + 1) / span
		calc(var(--col) - (var(--col) / 4));
}
</style>
