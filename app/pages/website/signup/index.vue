<script setup lang="ts">
import MemberCard from '~/components/cards/MemberCard.vue'
import WebsiteHeader from '~/components/layout/WebsiteHeader.vue'
import Button from '~/components/ui/Button.vue'
</script>

<template>
	<WebsiteHeader />
	<main id="sign-up">
		<MemberCard>
			<form class="d-flex flex-col center gap-2">
				<section class="d-grid fr-2 gap-1">
					<section class="d-flex flex-col center gap-1">
						<img src="@img/logo.svg" height="64" />
						<h2>Come on in!</h2>
					</section>

					<section class="grid-col-2 d-flex flex-col center gap-05">
						<input type="email" />
						<input type="text" />
						<input type="password" />
					</section>
				</section>

				<Button text="Create account" type="primary" />
			</form>
		</MemberCard>
	</main>
</template>
