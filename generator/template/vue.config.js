module.exports = {
	lintOnSave: false,
	chainWebpack: config => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.oneOf('external')
			.resourceQuery(/external/)
			.use('file-loader')
			.loader('file-loader')
			.end()
			.end()
			.oneOf('internal')
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
			.options({
				svgo: {
					plugins: [{ removeViewBox: false }]
				}
			});
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "./src/assets/scss/_settings.scss";'
			}
		}
	}
};
