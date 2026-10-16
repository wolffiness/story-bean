<template>
	<div class="member-card d-flex p-1 b-rad shadow-md">
		<div class="p-1 d-flex flex-col center gap-2 b-rad w-100">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss">
.member-card {
	position: relative;
	background-color: var(--secondary-lightest);
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: -80%;
		left: -25%;
		width: 200%;
		height: 100%;
		background-color: var(--primary-30);
		transform: rotate(-25deg);
	}

	// &.aspect {
	// 	aspect-ratio: 2 / 1;
	// }

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
