<script setup lang="ts">
const props = defineProps<{
	title?: string
	modalId?: string
}>()

console.log('mounted', props.modalId)
</script>

<template>
	<Teleport to="#modals">
		<dialog :id="props.modalId" closedby="any">
			<div class="w-100 d-flex center gap-1">
				<h3 class="flex-grow">
					{{ title }}
				</h3>
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
	</Teleport>
</template>
