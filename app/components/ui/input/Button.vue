<script setup lang="ts">
import type { BtnTypeOptions } from '~/types/settings'

const props = defineProps<
	BtnTypeOptions & {
		label?: string
	}
>()

const { logOut, deleteAccount } = useAccount()

const handleClick = () => {
	if (props.click == 'logOut') {
		logOut()
		return
	}

	if (props.click == 'deleteAccount') {
		deleteAccount()
		return
	}

	return
}
</script>

<template>
	<div class="d-flex justify-between align-center gap-1">
		<p class="label">{{ label }}</p>

		<div class="d-flex justify-between align-center gap-05">
			<UiButton
				@click="handleClick"
				:btnType="props.btnType"
				:btnState="props.btnState"
			>
				{{ label }}
			</UiButton>
		</div>
	</div>
</template>
