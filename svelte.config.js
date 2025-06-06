import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `
			  @use "bulma/sass/base";
			  @use "bulma/sass/themes";
			  `
			}
		}),
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx']
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx']
};

export default config;
