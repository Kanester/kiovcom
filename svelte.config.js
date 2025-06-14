import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx']
		})
	],
	kit: {
		adapter: adapter({
		  path: {
		    roots: "/"
		  }
		})
	},
	extensions: ['.svelte', '.svx']
};

export default config;
