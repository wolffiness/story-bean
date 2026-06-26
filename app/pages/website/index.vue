<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
</script>

<template>
	<main id="website">
		<section id="hero">
			<div>
				<img src="@img/logo.svg" />
				<div>
					<div>
						<h1>Story Bean</h1>
						<p>A virtual café to come together and write your stories.</p>
					</div>
					<div>
						<Button linkPage="/website/signup" text="Sign up" type="primary" />
						<Button linkPage="/website/login" text="Log in" type="secondary" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
