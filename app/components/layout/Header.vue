<script setup lang="ts">
import Button from '../ui/Button.vue'
</script>

<template>
	<header class="sidebar d-flex">
		<nav class="w-100 d-flex">
			<ul class="w-100 d-flex flex-col gap-2 justify-between p-0 m-0">
				<div class="p-card d-flex flex-col gap-1">
					<div class="d-flex gap-1 justify-between">
						<li>
							<NuxtLink to="/"><span class="icon">home</span></NuxtLink>
						</li>
						<li><span class="icon">dock_to_right</span></li>
					</div>
				</div>
				<div class="profile p-05 d-flex gap-05 center">
					<li class="h-100 flex-grow b-rad">
						<NuxtLink
							class="h-100 d-flex gap-025 align-center"
							:to="{ name: 'profile-id', params: { id: 1 } }"
						>
							<img src="@img/placeholder_pfp.png" />
							<span>You</span>
						</NuxtLink>
					</li>
					<div class="d-flex gap-025 center">
						<Button type="icon"><span class="icon">settings</span></Button>
					</div>
				</div>
			</ul>
		</nav>
	</header>
</template>
