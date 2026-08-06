<template>
	<div class="page w-100 d-flex flex-col align-center my-2">
		<div class="w-page m-page d-grid fr-col gap-gutter">
			<LayoutHeader />
			<main>
				<slot></slot>
			</main>
		</div>
	</div>
</template>
