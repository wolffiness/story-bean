<script setup lang="ts">
const { setSettings } = useSettings()
const { getUser } = useAccount()

const user = await getUser()

onMounted(() => {
	setSettings(user)
})
</script>

<template>
	<div class="page w-100 d-flex flex-col align-center my-2">
		<div class="w-page m-page d-grid fr-col gap-gutter">
			<LayoutHeader />
			<main>
				<slot></slot>
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
