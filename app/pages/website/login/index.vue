<script setup lang="ts">
import WebsiteHeader from '~/components/layout/WebsiteHeader.vue'
import AccountEntry from '~/components/features/AccountEntry.vue'
</script>

<template>
	<WebsiteHeader />

	<main id="sign-up">
		<div class="w-page d-grid fr-col gap-gutter">
			<AccountEntry class="set-width" h2="Welcome back!" button="Log in">
				<template v-slot:input-1>
					<div class="d-flex flex-col gap-025">
						<label for="username">E-mail / Username</label>
						<input
							type="text"
							name="username"
							placeholder="storybean@protonmail.com"
						/>
					</div>
				</template>

				<template v-slot:input-2>
					<div class="d-flex flex-col gap-025">
						<label for="email">Password</label>
						<input type="password" name="password" />
					</div>
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
