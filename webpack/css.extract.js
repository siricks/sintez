const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (paths) => {
	return {
		module: {
			rules: [
				{
					test: /\.sass$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: "style-loader",
						use: ["css-loader", 'sass-loader'],
					})
				},
				{
					test: /\.css$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [
							{ loader: 'css-loader', options: { minimize: true } }
						]
					})
				}
			]
		},
		plugins: [
			new ExtractTextPlugin("css/bundle.css"),
		]
	}
}