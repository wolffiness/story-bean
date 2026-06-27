<script setup lang="ts">
const props = defineProps<{
	title?: string
	modalId?: string
}>()
</script>

<template>
	<dialog closedby="any" popover>
		<section class="d-flex flex-col gap-05">
			<div>Account</div>
		</section>

		<section class="d-flex flex-col gap-1 align-center">
			<form class="align-self-right" method="dialog">
				<button class="btn-header">
					<span :commandFor="props.modalId" command="close" class="icon">
						close
					</span>
				</button>
			</form>

			<div>
				<h2>Account</h2>
			</div>
		</section>
	</dialog>
</template>
