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
				'for-marketing': PATHS.src + '/pages/for-marketing/index.js',
				'about': PATHS.src + '/pages/about/index.js',
				'rent': PATHS.src + '/pages/rent/index.js',
				'portfolio': PATHS.src + '/pages/portfolio/index.js',
				'blog': PATHS.src + '/pages/blog/index.js',
				'contact': PATHS.src + '/pages/contact/index.js',
				'services': PATHS.src + '/pages/services/index.js',
				'development': PATHS.src + '/pages/development/index.js',
				'industrial': PATHS.src + '/pages/industrial/index.js',
				'ar': PATHS.src + '/pages/ar/index.js'
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
				}),
				new HtmlWebpackPlugin({
					filename: 'about.html',
					chunks: ['vendors', 'commons', 'about'],
					template: PATHS.src + '/pages/about/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'rent.html',
					chunks: ['vendors', 'commons', 'rent'],
					template: PATHS.src + '/pages/rent/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'portfolio.html',
					chunks: ['vendors', 'commons', 'portfolio'],
					template: PATHS.src + '/pages/portfolio/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'blog.html',
					chunks: ['vendors', 'commons', 'blog'],
					template: PATHS.src + '/pages/blog/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'contact.html',
					chunks: ['vendors', 'commons', 'contact'],
					template: PATHS.src + '/pages/contact/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'services.html',
					chunks: ['vendors', 'commons', 'services'],
					template: PATHS.src + '/pages/services/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'development.html',
					chunks: ['vendors', 'commons', 'development'],
					template: PATHS.src + '/pages/development/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'industrial.html',
					chunks: ['vendors', 'commons', 'industrial'],
					template: PATHS.src + '/pages/industrial/index.pug'
				}),
				new HtmlWebpackPlugin({
					filename: 'ar.html',
					chunks: ['vendors', 'commons', 'ar'],
					template: PATHS.src + '/pages/ar/index.pug'
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
							minChunks: 13
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