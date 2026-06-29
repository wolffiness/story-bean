<script setup lang="ts">
const props = defineProps<{
	h2?: string
	submitFunction?: () => void
}>()
</script>

<template>
	<MemberCard class="aspect">
		<form
			@submit.prevent="submitFunction"
			class="w-100 h-100 d-flex flex-col center gap-2"
		>
			<section class="flex-grow d-grid fr-2 gap-1">
				<section class="d-flex flex-col center gap-1">
					<img src="@img/logo.svg" height="64" />
					<h2>{{ h2 }}</h2>
				</section>

				<section class="grid-col-2 d-flex flex-col center gap-05">
					<slot name="input-1"></slot>
					<slot name="input-2"></slot>
					<slot name="input-3"></slot>
				</section>
			</section>

			<slot name="submit-btn"></slot>
		</form>
	</MemberCard>
</template>
