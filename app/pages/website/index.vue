<script setup lang="ts">
import logoImg from '@img/logo.svg'

definePageMeta({
	layout: 'website-no-header',
})

useHead({
	title: 'Story Bean',
})
</script>

<template>
	<main id="website">
		<section
			id="hero"
			class="w-100 d-flex flex-col align-center shadow-md bg-accent"
		>
			<div class="w-max d-flex flex-col align-center">
				<UiImg alt="Logo" :src="logoImg" />

				<div class="d-flex flex-col align-center gap-2">
					<div class="d-flex flex-col gap-05">
						<h1>Story Bean</h1>
						<p>A virtual café to come together and write your stories.</p>
					</div>

					<div class="d-flex gap-1">
						<UiButton :is-link="true" href="/website/signup" btn-type="primary">
							Sign up
						</UiButton>

						<UiButton
							:is-link="true"
							href="/website/login"
							btn-type="secondary"
						>
							Log in
						</UiButton>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss">
#website {
	#hero {
		padding: 3em 0;

		> div {
			img {
				height: 5em;
			}

			h1,
			p {
				color: var(--bg);
				@supports (color: contrast-color(var(--accent))) {
					color: contrast-color(var(--accent));
				}
				text-align: center;
			}

			p {
				font-size: var(--size-h5);
			}

			> div div:last-of-type {
				.btn-secondary {
					background-color: transparent;
					border-color: transparent;
					text-decoration: underline;
					color: var(--bg);
					@supports (color: contrast-color(var(--accent))) {
						color: contrast-color(var(--accent));
					}

					&:hover {
						background-color: var(--secondary);
						border-color: var(--secondary);
						color: var(--text);
					}
				}
			}
		}
	}
}
</style>
