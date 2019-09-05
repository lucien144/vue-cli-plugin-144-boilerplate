const { done, info, log, warn, error } = require('@vue/cli-shared-utils');

module.exports = (api, options = {}) => {
	api.extendPackage({
		dependencies: {
			bootstrap: '^4.3.1',
			'vue-svg-loader': '^0.12.0'
		},
		devDependencies: {
			xo: '^0.24.0',
			'eslint-config-xo-vue': '^2.0.2',
			'eslint-plugin-vue': '^5.2.3',
			'prettier-package-json': '^2.1.0',
		},
		scripts: {
			lint: 'prettier-package-json --write --use-tabs --tab-width 4 && xo --fix',
		},
		prettier: {
			'useTabs': true,
			'singleQuote': true,
			'tabWidth': 4,
			'bracketSpacing': true
		},
		xo: {
			'extends': [
				'xo-vue',
				'plugin:vue/recommended',
				'prettier/unicorn'
			],
			'prettier': true,
			'extensions': [
				'js',
				'vue'
			],
			'settings': {
				'import/core-modules': [
					'vuex'
				]
			},
			'rules': {
				'vue/html-indent': [
					'error',
					'tab'
				],
				'vue/max-attributes-per-line': [
					2,
					{
						'singleline': 4
					}
				],
				'import/extensions': [
					'error',
					'never',
					{
						'vue': 'ignorePackages',
						'svg': 'always'
					}
				],
				'import/no-unresolved': [
					2,
					{
						'ignore': [
							'vue$',
							'svg$',
							'^@'
						]
					}
				],
				'unicorn/filename-case': 0,
				'no-unused-vars': [
					'error',
					{
						'argsIgnorePattern': '^_'
					}
				],
				'vue/component-name-in-template-casing': [
					'error',
					'PascalCase',
					{
						'registeredComponentsOnly': false,
						'ignores': [
							'transition'
						]
					}
				],
				'//new-cap': 'This allows for Vuex mutations like `this.SET_VALUE`',
				'new-cap': [
					'error',
					{
						'properties': false
					}
				],
				'//unicorn/catch-error-name': 'Pass _error in try catch',
				'unicorn/catch-error-name': [
					'error',
					{
						'caughtErrorsIgnorePattern': '^_'
					}
				],
				'object-curly-spacing': [
					'error',
					'always'
				]
			}
		}
	});

	api.render('./template', {});

	api.onCreateComplete(() => {
		const fs = require('fs');
		const unlink = path => {
			fs.unlink(path, error => {
				if (error) {
					warn(`There was a problem deleting "${path}"`);
				} else {
					done(`Successfully deleted "${path}"`);
				}
			});
		};

		unlink('./public/favicon.ico');
		unlink('./public/favicon.ico');
		unlink('./src/components/HelloWorld.vue');
		unlink('./src/assets/logo.png');
	});

}