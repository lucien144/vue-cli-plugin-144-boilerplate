module.exports = {
	root: true,
	env: { node: true },
	plugins: [
		'unicorn', 'promise', 'import',
	],
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:unicorn/recommended',
		'plugin:promise/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:import/typescript',
	],
	parserOptions: { ecmaVersion: 2020 },
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'max-len': [
			'warn', {
				code: 150, tabWidth: 4, ignoreStrings: true,
			},
		],
		'indent': ['error', 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': ['warn', 'always'],
		'object-curly-newline': ['warn', { 'multiline': true, 'minProperties': 3 }],
		'array-bracket-newline': ['warn', { 'multiline': true, 'minItems': 3 }],
		'arrow-parens': ['warn', 'as-needed'],
		'linebreak-style': ['warn', 'unix'],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': [2, { singleline: 4 }],
		'import/extensions': [
			'error', 'never', { vue: 'ignorePackages', svg: 'always' },
		],
		'import/no-unresolved': [2, { ignore: ['vue$', 'svg$'] }],
		'unicorn/filename-case': 0,
	},
};
