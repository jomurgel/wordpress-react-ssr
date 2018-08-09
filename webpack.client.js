const path       = require( 'path' );
const merge      = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

	// Tell webpack the where the root server file is — entry point.
	entry: './src/client/app.js',

	// Tell webpack where to put the file.
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'public' ),
	}
};

module.exports = merge( baseConfig, config );
