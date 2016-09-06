const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	plugins: [
		new ExtractTextPlugin('./build/test-css.css')
	],
	entry: './src/test-app.js',
	output: {
		filename: './build/test-app.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /.js$/,
				query: {
					presets: [
						'es2015'
					]
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]')
			}
		]
	}
};
