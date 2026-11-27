// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'vue/html-self-closing': ['error', { html: { void: 'always' } }],
		'vue/no-multiple-template-root': 'off',
	},
})
