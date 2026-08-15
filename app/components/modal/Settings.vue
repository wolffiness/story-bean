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

			<form class="w-100 d-flex flex-col gap-2 align-center">
				<slot name="content"></slot>
			</form>
		</section>
	</dialog>
</template>
