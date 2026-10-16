<script setup lang="ts">
const props = defineProps<{
	title?: string
	modalId?: string
}>()
</script>

<template>
	<dialog closedby="any" open>
		<section class="d-flex flex-col gap-05">
			<slot name="nav"></slot>
		</section>

		<section class="d-flex flex-col gap-1 align-center">
			<form class="align-self-right" method="dialog">
				<UiButton class="btn-header">
					<span :commandFor="props.modalId" command="close" class="icon">
						close
					</span>
				</UiButton>
			</form>

			<div class="w-100 d-flex flex-col gap-2 align-center">
				<slot name="content"></slot>
			</div>
		</section>
	</dialog>
</template>

<style lang="scss">
#settings {
	width: var(--max-width);
	height: calc(100vh - (4em + 4em)); // margin + padding
	margin-top: 2em;
	margin-bottom: 2em;
	grid-template-columns: calc(2em - var(--gutter)) repeat(var(--col), 1fr) calc(
			2em - var(--gutter)
		);
	gap: var(--gutter);
	align-items: unset;
	padding: 0;
	overflow: hidden;

	&[open] {
		display: grid;
	}

	> section:first-of-type {
		grid-column: 1 / span calc(var(--col) / 4 + 1);
		background-color: light-dark(var(--bg-dark), var(--bg-light));

		padding: 2em 1em 2em 2em;
	}

	> section:last-of-type {
		overflow: scroll;
		grid-column: calc(var(--col) / 4 + 2) / span
			calc(var(--col) - var(--col) / 4);

		padding: 2em 2em 2em 0;
	}
}
</style>
