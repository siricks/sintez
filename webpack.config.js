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
			mode: 'production',
			entry: [
				PATHS.src + '/pages/index/index.js',
				PATHS.src + '/pages/solutions/index.js',
				PATHS.src + '/pages/for-marketing/index.js',
				PATHS.src + '/pages/about/index.js',
				PATHS.src + '/pages/rent/index.js',
				PATHS.src + '/pages/portfolio/index.js',
				PATHS.src + '/pages/blog/index.js',
				PATHS.src + '/pages/contact/index.js',
				PATHS.src + '/pages/services/index.js',
				PATHS.src + '/pages/development/index.js',
				PATHS.src + '/pages/industrial/index.js',
				PATHS.src + '/pages/ar/index.js'
			],
			output: {
				publicPath: '',
				path: PATHS.build,
				filename: 'js/bundle.js'
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
					template: PATHS.src + '/pages/index/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'solutions.html',
					template: PATHS.src + '/pages/solutions/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'for-marketing.html',
					template: PATHS.src + '/pages/for-marketing/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'about.html',
					template: PATHS.src + '/pages/about/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'rent.html',
					template: PATHS.src + '/pages/rent/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'portfolio.html',
					template: PATHS.src + '/pages/portfolio/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'blog.html',
					template: PATHS.src + '/pages/blog/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'contact.html',
					template: PATHS.src + '/pages/contact/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'services.html',
					template: PATHS.src + '/pages/services/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'development.html',
					template: PATHS.src + '/pages/development/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'industrial.html',
					template: PATHS.src + '/pages/industrial/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'ar.html',
					template: PATHS.src + '/pages/ar/index.pug'
				})
			]
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