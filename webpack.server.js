const path                 = require( 'path' );
const merge                = require('webpack-merge');
const baseConfig           = require('./webpack.base.js');
const webpackNodeExternals = require( 'webpack-node-externals' );

const config = {

	// Build for nodeJs rather than browser.
	target: 'node',

	// Tell webpack the where the root server file is — entry point.
	entry: './src/index.js',

	// Tell webpack where to put the file.
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'build' ),
	},

	// Reduce server side bundle.
	externals: [ webpackNodeExternals() ]
};

module.exports = merge( baseConfig, config );