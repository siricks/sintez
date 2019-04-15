module.exports = () => {
	return {
		module: {
			rules: [
				{
					test: /\.(png|jpg|gif|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'img/[name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(ico)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(ttf)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'fonts/[name].[ext]',
								publicPath: function(url) {
									return url.replace(/fonts/, '../fonts');
								}
							}
						}
					]
				}
			]
		}
	}
}