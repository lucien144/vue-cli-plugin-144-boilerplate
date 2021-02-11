const { done, info, log, warn, error } = require('@vue/cli-shared-utils');

module.exports = (api, options = {}) => {
	api.extendPackage({
		dependencies: {
			bootstrap: '^5.0.0-beta2'
		},
		devDependencies: {
			"sass": "^1.26.5",
			"sass-loader": "^8.0.2",
			"prettier-package-json": "^2.1.3",
			"eslint-plugin-eslint-comments": "^3.2.0",
			"eslint-plugin-import": "^2.22.1",
			"eslint-plugin-promise": "^4.3.1",
			"eslint-plugin-unicorn": "^28.0.0",
		},
		scripts: {
			lint: 'prettier-package-json --write --use-tabs --tab-width 4 && vue-cli-service lint',
		},
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

		const mkdir = path => {
			fs.mkdir(path, error => {
				if (error) {
					warn(`There was a problem creating "${path}"`);
				} else {
					done(`Successfully created "${path}"`);
				}
			});
		}

		// Removing unnecessary files
		unlink('./public/favicon.ico');
		unlink('./public/favicon.ico');
		unlink('./src/components/HelloWorld.vue');
		unlink('./src/assets/logo.png');

		// Creating empty folders
		mkdir('./src/assets/images/');
		mkdir('./src/assets/fonts/');
	});

}
