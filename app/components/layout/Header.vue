<script setup lang="ts">
let isCollapsed = ref(false)

const props = defineProps<{
	profileId?: string
}>()

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
							:to="{ name: 'profile-id', params: { id: props.profileId } }"
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

<style lang="scss">
.sidebar {
	--col-span: 3;
	--1-col-width: calc(var(--max-width) / var(--col) - var(--gutter));
	position: fixed;
	grid-column: 1 / span calc(var(--col) / 4);
	width: calc(
		var(--1-col-width) * var(--col-span) + var(--gutter) * (var(--col-span) - 1)
	);
	background-color: var(--bg);
	border: var(--border-size) solid light-dark(var(--bg-dark), var(--bg-light));
	border-radius: var(--border-sketch);
	height: calc(100vh - 4em);
	transition: ease-in-out 300ms;

	&.collapsed {
		--col-span: 1;

		.controls {
			justify-content: center;

			li:first-of-type {
				display: none;
			}
		}

		.profile {
			display: none;
		}
	}

	ul {
		list-style-type: none;

		.controls {
			justify-content: space-between;

			li:last-of-type button {
				padding: 0;
				background-color: transparent;

				&:hover {
					cursor: pointer;
				}
			}
		}

		.profile {
			background-color: light-dark(var(--bg-dark), var(--bg-light));

			li {
				transition: var(--transition);
				overflow: hidden;
				text-wrap: nowrap;
				text-overflow: ellipsis;

				&:hover {
					background-color: light-dark(var(--bg), var(--bg-lightest));
				}

				a {
					img {
						width: 2em;
						aspect-ratio: 1 / 1;
						border-radius: 50%;
					}

					span {
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
}
</style>
