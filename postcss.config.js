import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProd = process.env.NODE_ENV === 'production';

export default {
	plugins: [
		postcssNested,
		autoprefixer,
		...(isProd ? [cssnano({ preset: 'default' })] : [])
	]
};
