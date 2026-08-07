<script setup lang="ts">
import headings from '~/config/settings'

const props = defineProps<{
	title?: string
	modalId?: string
}>()

const { logOut } = useAccount()
</script>

<template>
	<ModalSettings id="settings" modalId="settings">
		<div
			v-for="[heading, subHeadings] in Object.entries(headings)"
			class="d-flex flex-col gap-025"
		>
			<UiButton
				btn-type="setting-category"
				class="active d-flex gap-05 align-center"
			>
				<span class="icon">account_box</span>
				<span>{{ heading }}</span>
			</UiButton>
			<ul class="d-flex flex-col gap-025 m-0 px-1 list-none">
				<li v-for="subHeading in Object.keys(subHeadings)">
					{{ subHeading }}
				</li>
			</ul>
		</div>
		<div class="d-flex flex-col gap-025">
			<button
				@click="logOut"
				class="btn-setting-category d-flex gap-05 align-center"
			>
				<span class="icon">account_box</span>
				<span>Log out</span>
			</button>
		</div>
	</ModalSettings>
</template>
