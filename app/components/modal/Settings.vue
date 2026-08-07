<script setup lang="ts">
const headings = ref<string[]>([])

const props = defineProps<{
	title?: string
	modalId?: string
}>()

const { logOut } = useAccount()
</script>

<template>
	<dialog closedby="any" popover>
		<section class="d-flex flex-col gap-05">
			<div class="d-flex flex-col gap-025">
				<button class="setting-category active d-flex gap-05 align-center">
					<span class="icon">account_box</span>
					<span>Account</span>
				</button>
				<ul class="d-flex flex-col gap-025 m-0 px-1 list-none">
					<li v-for="heading in headings">{{ heading }}</li>
				</ul>
			</div>
			<div class="d-flex flex-col gap-025">
				<button
					@click="logOut"
					class="setting-category d-flex gap-05 align-center"
				>
					<span class="icon">account_box</span>
					<span>Log out</span>
				</button>
			</div>
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
