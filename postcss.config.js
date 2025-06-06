import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import purgecssModule from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';

const purgecss = purgecssModule.default;
const isProd = process.env.NODE_ENV === 'production';

export default {
	plugins: [
		postcssNested,
		autoprefixer,
		...(isProd
			? [
					purgecss({
						content: [
							'./src/**/*.svelte',
							'./src/**/*.html',
							'./src/**/*.ts',
							'./src/**/*.js'
						],
						safelist: ["open"],
						defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || []
					}),
					cssnano({ preset: 'default' })
			  ]
			: [])
	]
};
