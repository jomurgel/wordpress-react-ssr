module.exports = {

	// Tell webpack to run babel on all the things.
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						[ 'env', { targets: { browsers: [ 'last 2 versions' ] } } ],
					]
				}
			}
		]
	}
}