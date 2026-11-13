<template>
	<div class="member-card d-flex p-1 b-rad shadow-md">
		<div class="p-1 d-flex flex-col center gap-2 b-rad w-100">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.member-card {
	position: relative;
	overflow: hidden;
	background: linear-gradient(
		-25deg,
		var(--secondary-lightest) 50%,
		color-mix(in oklch, var(--secondary-lightest), var(--primary) 30%) 50%
	);

	&.set-width {
		grid-column: 2 / span calc(var(--col) - 2);

		@media only screen and (min-width: $lg) {
			grid-column: 3 / span calc(var(--col) - 4);
		}
	}

	> div {
		border: var(--border-size) solid var(--bg);
		z-index: 2;
	}
}
</style>
