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
						safelist: {
							standard: ['logo', 'brand'],
							deep: [
								/^nav$/,
								/^ul$/,
								/^li$/,
								/^button$/,
								/^span$/,
								/^strong$/,
								/^section$/,
								/^h1$/,
								/^a$/
							]
						},
						defaultExtractor: content =>
							content.match(/[\w-/:.]+(?<!:)/g) || [],
						options: {
							debug: true
						}
					}),
					cssnano({ preset: 'default' })
			  ]
			: [])
	]
};
