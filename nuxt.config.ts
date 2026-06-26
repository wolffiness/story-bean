// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
		'@': import.meta.dirname + '/',
		'@img': import.meta.dirname + '/app/assets/img',
	},
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['./app/assets/styles/global.scss'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
})
