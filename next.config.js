const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// to add environment variables to the JS bundle, add the 'env' config
module.exports = phase => {
	// check which phase of development we are in
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'next-blog',
				mongodb_password: 'euGcIa6KjnfxUAus',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'my-site-dev'
			}
		};
	}

	return {
		env: {
			mongodb_username: 'next-blog',
			mongodb_password: 'euGcIa6KjnfxUAus',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'my-site'
		}
	};
};
