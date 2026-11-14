// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'@vueuse/nuxt',
		'@nuxtjs/turnstile',
		'@nuxt/eslint',
		'@nuxtjs/html-validator',
	],

	alias: {
		assets: import.meta.dirname + '/',
		'@styles': import.meta.dirname + '/assets/styles',
		'@img': import.meta.dirname + '/assets/img',
	},

	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: [import.meta.dirname + '/assets/styles/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@styles/root.scss" as *;',
				},
			},
		},
	},

	components: [
		{
			path: '~/components',
		},
		{
			path: '~/features',
		},
	],

	supabase: {
		url: process.env.NUXT_PUBLIC_SUPABASE_URL,
		key: process.env.NUXT_PUBLIC_SUPABASE_KEY,

		redirectOptions: {
			login: '/website',
			callback: '/confirm',
			exclude: ['/website/**'],
		},
	},

	turnstile: {
		siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
	},

	htmlValidator: {
		usePrettier: true,
		logLevel: 'verbose',
		failOnError: true,
		/** A list of routes to ignore (that is, not check validity for). */
		ignore: [/\\.(xml|rss|json)$/],
		options: {
			extends: [
				'html-validate:document',
				'html-validate:recommended',
				'html-validate:standard',
			],
			rules: {
				'svg-focusable': 'off',
				'no-unknown-elements': 'error',
				// Conflicts or not needed as we use prettier formatting
				'void-style': 'off',
				'no-trailing-whitespace': 'off',
				// Conflict with Nuxt defaults
				'require-sri': 'off',
				'attribute-boolean-style': 'off',
				'doctype-style': 'off',
				// Unreasonable rule
				'no-inline-style': 'off',
			},
		},
	},
})
