<script setup lang="ts">
import type { btnType, btnState } from '~/types/btn'

const props = defineProps<{
	btnType?: btnType
	btnState?: btnState
}>()

const btnType = props.btnType !== undefined ? `btn-${props.btnType}` : ''
const btnState = props.btnState !== undefined ? `state-${props.btnState}` : ''

const classes = `${btnType} ${btnState}`
</script>

<template>
	<button :class="classes">
		<slot></slot>
	</button>
</template>
