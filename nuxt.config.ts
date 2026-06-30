// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/supabase', '@vueuse/nuxt'],

	alias: {
		assets: import.meta.dirname + '/',
		'@img': import.meta.dirname + '/assets/img',
	},

	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: [import.meta.dirname + '/assets/styles/global.scss'],

	components: [
		{
			path: '~/components',
			pathPrefix: false,
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
})
