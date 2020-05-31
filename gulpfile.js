/*
 * Dependencies.
 */
const gulp          = require( 'gulp' );
const webpackStream = require( 'webpack-stream' );
const VueLoader     = require( 'vue-loader/lib/plugin' );

/*
 * Webpack config paths.
 */
const config = {
	entry: './src/js/app.js',
	output: {
		filename: 'vue-splide.js',
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
					'vue-style-loader',
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
	],
	mode: 'production',
};

/*
 * Build a script file.
 */
gulp.task( 'build:js', () => {
	return webpackStream( { config } )
		.pipe( gulp.dest( './dist/js' ) );
} );