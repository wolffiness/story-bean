<template>
	<WebsiteHeader />

	<main id="sign-up">
		<div class="w-page d-grid fr-col gap-gutter">
			<AccountEntry class="set-width" h2="Come on in!">
				<template v-slot:input-1>
					<div class="d-flex flex-col gap-025">
						<label for="email">E-mail</label>
						<input
							type="email"
							name="email"
							placeholder="storybean@protonmail.com"
						/>
					</div>
				</template>

				<template v-slot:input-2>
					<div class="d-flex flex-col gap-025">
						<label for="username">Username</label>
						<input type="text" name="username" placeholder="story_bean" />
					</div>
				</template>

				<template v-slot:input-3>
					<div class="d-flex flex-col gap-025">
						<label for="email">Password</label>
						<input type="password" name="password" />
					</div>
				</template>

				<template v-slot:submit-btn>
					<NuxtLink class="w-100" to="/">
						<Button class="w-100" type="primary" :formSubmit="false">
							Create account
						</Button>
					</NuxtLink>
				</template>
			</AccountEntry>
		</div>
	</main>
</template>
