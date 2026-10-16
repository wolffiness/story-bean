<script setup lang="ts">
const route = useRoute()
const { getProfile } = useProfile()

const profileId = Array.isArray(route.params.id)
	? route.params.id[0]
	: route.params.id

const profile = await getProfile(profileId)
</script>

<template>
	<CardMember class="w-100">
		<div class="w-100 d-flex flex-col center">
			<div class="temp-img"></div>
			<h1>{{ profile?.display_name }}</h1>
			<p class="sm-text">{{ profile?.username }} • {{ profile?.pronouns }}</p>
		</div>

		<p class="w-100">{{ profile?.bio }}</p>

		<div class="w-100 d-flex flex-col center">
			<p class="sm-text bold">Member since</p>
			<p>
				{{
					new Date(profile?.created_at).toLocaleDateString('en-US', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})
				}}
			</p>
		</div>
	</CardMember>
</template>

<style lang="scss">
.temp-img {
	width: 4em;
	aspect-ratio: 1 / 1;
	border-radius: var(--border-circle);
	background-color: var(--accent);
}
</style>
