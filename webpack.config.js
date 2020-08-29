const path              = require( 'path' );
const VueLoader         = require( 'vue-loader/lib/plugin' );
const htmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './examples/src/js/app.js',
	output: {
		path    : path.join( __dirname, 'examples/dist' ),
		filename: 'examples.js',
	},
	module: {
		rules: [
			{
				test   : /.js$/,
				loader : 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test   : /.vue$/,
				loader : 'vue-loader',
				options: {
					loaders: {
						css: {
							loader: 'css-loader',
						},
						scss: {
							loader: 'sass-loader',
						},
					},
				},
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: [ '.js', '.vue' ],
	},
	plugins: [
		new VueLoader(),
		new htmlWebpackPlugin( {
			template: './examples/src/html/index.html',
			filename: './index.html',
		} ),
	],
	mode: 'production',
};