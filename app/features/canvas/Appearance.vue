<script setup lang="ts">
const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
	if (canvas.value == null) return

	const ctx = canvas.value.getContext('2d')
	if (ctx == null) return

	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
})
</script>

<template>
	<canvas id="appearance" ref="canvas" class="w-100" />
</template>
