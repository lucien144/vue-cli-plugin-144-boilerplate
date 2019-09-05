const fs = require('fs');
const { log, error } = require('@vue/cli-shared-utils');

module.exports = (api, options = {}) => {
	api.extendPackage({
		dependencies: {
			bootstrap: '^4.3.1',
			'vue-svg-loader': '^0.12.0'
		},
		devDependencies: {
			xo: '^0.24.0'
		}
	});

	api.render('./template', {});

	api.onCreateComplete(() => {

		fs.unlink('./src/components/HelloWorld.vue', err => {
			if (error) {
				error(err);
			} else {
				log('✔ Successfully removed "HelloWorld" component.');
			}
		});
		fs.unlink('./src/assets/logo.png', err => {
			if (error) {
				error(err);
			} else {
				log('✔ Successfully removed "logo.png" image.');
			}
		});
	});

}