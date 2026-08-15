<script setup lang="ts">
let isCollapsed = ref(false)

function toggleCollapse() {
	isCollapsed.value = isCollapsed.value ? false : true
}
</script>

<template>
	<header :class="`sidebar d-flex ${isCollapsed ? 'collapsed' : ''}`">
		<nav class="w-100 d-flex">
			<ul class="w-100 d-flex flex-col gap-2 justify-between p-0 m-0">
				<div class="p-card d-flex flex-col gap-1">
					<div class="controls d-flex gap-1">
						<li>
							<NuxtLink to="/"><span class="icon">home</span></NuxtLink>
						</li>
						<li>
							<UiButton @click="toggleCollapse">
								<span class="icon">dock_to_right</span>
							</UiButton>
						</li>
					</div>
				</div>

				<div class="profile p-05 d-flex gap-05 center">
					<li class="p-05 flex-grow b-rad">
						<NuxtLink
							class="h-100 d-flex gap-025 align-center"
							:to="{ name: 'profile-id', params: { id: 1 } }"
						>
							<img src="@img/placeholder_pfp.png" />
							<span>You</span>
						</NuxtLink>
					</li>

					<div class="d-flex gap-025 center">
						<UiButton btnType="icon" command="show-modal" commandFor="settings">
							<span class="icon">settings</span>
						</UiButton>
					</div>
				</div>
			</ul>
		</nav>
	</header>
	<div id="modals">
		<SettingsModal />
	</div>
</template>
