<template>
	<main id="website">
		<section
			id="hero"
			class="w-100 d-flex flex-col align-center shadow-md bg-accent"
		>
			<div class="w-max d-flex flex-col align-center">
				<img src="@img/logo.svg" />

				<div class="d-flex flex-col align-center gap-2">
					<div class="d-flex flex-col gap-05">
						<h1>Story Bean</h1>
						<p>A virtual café to come together and write your stories.</p>
					</div>

					<div class="d-flex gap-1">
						<Button btnType="primary">
							<NuxtLink to="/website/signup">Sign up</NuxtLink>
						</Button>

						<Button btnType="secondary">
							<NuxtLink to="/website/login">Log in</NuxtLink>
						</Button>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
