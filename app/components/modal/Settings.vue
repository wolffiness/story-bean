<script setup lang="ts">
const headings = ref<string[]>([])

const props = defineProps<{
	title?: string
	modalId?: string
}>()

const { logOut } = useAccount()
</script>

<template>
	<dialog closedby="any" open popover>
		<section class="d-flex flex-col gap-05">
			<slot></slot>
		</section>

		<section class="d-flex flex-col gap-1 align-center">
			<form class="align-self-right" method="dialog">
				<button class="btn-header">
					<span :commandFor="props.modalId" command="close" class="icon">
						close
					</span>
				</button>
			</form>

			<form class="w-100 d-flex flex-col gap-2 align-center">
				<SettingsCategoriesAccount v-model:headings="headings" />
			</form>
		</section>
	</dialog>
</template>
