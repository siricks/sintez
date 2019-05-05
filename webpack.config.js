const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	merge = require('webpack-merge'),
	PATHS = {
		src: path.resolve(__dirname, 'source/'),
		build: path.resolve(__dirname, 'www/'),
	},
	pug = require('./webpack/pug'),
	devserver = require('./webpack/devserer'),
	sass = require('./webpack/sass'),
	css = require('./webpack/css'),
	extractCss = require('./webpack/css.extract'),
	fileLoader = require('./webpack/file-loader'),
	common = merge([
		{
			mode: 'development',
			entry: {
				'index': PATHS.src + '/pages/index/index.js',
				'solutions': PATHS.src + '/pages/solutions/index.js',
				'for-marketing': PATHS.src + '/pages/for-marketing/index.js'
			},
			output: {
				publicPath: '',
				path: PATHS.build,
				filename: 'js/[name].js'
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						query: {
							presets: ["@babel/preset-env"],
							plugins: ["@babel/transform-async-to-generator"]
						}
					}
				]
			},
			plugins: [
				new HtmlWebpackPlugin({
					filename: 'index.html',
					chunks: ['vendors', 'commons', 'index'],
					template: PATHS.src + '/pages/index/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'solutions.html',
					chunks: ['vendors', 'commons', 'solutions'],
					template: PATHS.src + '/pages/solutions/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'for-marketing.html',
					chunks: ['vendors', 'commons', 'for-marketing'],
					template: PATHS.src + '/pages/for-marketing/index.pug'
				})
			],
			optimization: {
				splitChunks: {
					cacheGroups: {
						vendors: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendors',
							chunks: 'all'
						},
						commons: {
							name: 'commons',
							chunks: 'initial',
							minChunks: 3
						}
					}
				}
			},
		},
		pug(),
		fileLoader()
	])

module.exports = (env) => {
	if (env === 'production') {
		return merge([
			common,
			extractCss()
		])
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
}