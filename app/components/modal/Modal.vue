<script setup lang="ts">
const props = defineProps<{
	title?: string
	description?: string
	modalId?: string
}>()
</script>

<template>
	<dialog :id="props.modalId" closedby="any">
		<div class="w-100 d-flex center gap-1">
			<div class="flex-grow d-flex flex-col gap-05">
				<h4>
					{{ title }}
				</h4>
				<p class="sm-text">{{ description }}</p>
			</div>
			<form method="dialog">
				<UiButton class="btn-header">
					<span :commandFor="props.modalId" command="close" class="icon">
						close
					</span>
				</UiButton>
			</form>
		</div>

		<div class="w-100">
			<slot></slot>
		</div>
	</dialog>
</template>
