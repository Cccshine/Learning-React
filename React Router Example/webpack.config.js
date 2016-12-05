const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
	template:`${_dirname}/src/index.html`,
	filename:'index.html',
	inject:'body',
});

module.exports = {
	entry:[exclude:/bundle\.js$/
		'./src/index.js',
	],
	output:{
		path:`${_dirname}/dist`,
		filename:'index_bundle.js',
	},
	module:{
		preLoaders:[
			{
				test:/\.jsx|\.js$/,
				loader:'eslint-loader',
				include:`${_dirname}/src`,
				exclude:/bundle\.js$/
			}
		],
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react'],
				},
			}
		],
	},

	devServer:{
		inline:true,
		port:8008,
	},
	plugins:[HtmlWebPackPluginConfig],
};