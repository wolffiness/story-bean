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

<style lang="scss">
.btn-primary {
	background-color: var(--primary);
	border-color: var(--primary-dark);
	color: var(--bg);
	@supports (color: contrast-color(var(--primary))) {
		color: contrast-color(var(--primary));
	}
	font-weight: bold;

	&:hover {
		background-color: var(--primary-dark);
		box-shadow: var(--shadow-md);
	}

	&:disabled {
		background-color: var(--primary-disabled);

		color: var(--bg-disabled);
		@supports (color: contrast-color(var(--primary-disabled))) {
			color: contrast-color(var(--primary-disabled));
		}

		&:hover {
			cursor: default;
			box-shadow: none;
		}
	}

	&.state-error {
		background-color: var(--error-dark);
		border-color: var(--error-light);
		color: light-dark(var(--bg), var(--text));
		@supports (color: contrast-color(var(--error-dark))) {
			color: contrast-color(var(--error-dark));
		}

		&:hover {
			background-color: var(--error-light);
		}

		&:disabled {
			background-color: var(--error-disabled);

			color: light-dark(var(--bg-disabled), var(--text-disabled));
			@supports (color: contrast-color(var(--error-disabled))) {
				color: contrast-color(var(--error-disabled));
			}
		}
	}
}

.btn-secondary {
	background-color: var(--secondary-30);
	border-color: var(--secondary);
	color: var(--text);
	@supports (color: contrast-color(var(--secondary-30))) {
		color: contrast-color(var(--secondary-30));
	}

	&:hover {
		background-color: var(--secondary);
		box-shadow: var(--shadow-sm);
	}

	&:disabled {
		background-color: var(--secondary-disabled);

		color: var(--text-disabled);
		@supports (color: contrast-color(var(--secondary-disabled))) {
			color: contrast-color(var(--secondary-disabled));
		}

		&:hover {
			cursor: default;
			box-shadow: none;
		}
	}

	&.state-error {
		background-color: var(--error-30);
		border-color: var(--error-light);
		color: light-dark(var(--bg), var(--text));
		@supports (color: contrast-color(var(--error-30))) {
			color: contrast-color(var(--error-30));
		}

		&:hover {
			background-color: var(--error);
		}
	}
}

.btn-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.125em;
	width: calc(var(--size-text) + 4px + 1em);
	aspect-ratio: 1 / 1;
	border: var(--border-size) solid transparent;
	border-radius: 50%;
	background-color: transparent;

	span {
		font-size: calc(var(--size-text) + 4px);
	}

	&:hover {
		background-color: var(--primary-30);
		border-color: var(--primary);
		box-shadow: var(--shadow-md);
	}
}

.btn-setting-category {
	padding: 0.5em 1em;
	border: none;
	border-radius: var(--border-circle);
	transition: var(--transition);
	background-color: transparent;

	&.active,
	&:hover {
		background-color: var(--bg);
		box-shadow: var(--shadow-md);
		font-weight: bold;
	}
}

.state-error {
	color: var(--error-lightest);
}
</style>
