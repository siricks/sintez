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
				'index': PATHS.src + '/pages/index/index.js'
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
					chunks: ['index', 'common'],
					template: PATHS.src + '/pages/index/index.pug'
				})
			],
			optimization: {
				runtimeChunk: {name: 'common'},
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