var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src",
	entry: "./index",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		root: __dirname + "/src",
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel-loader']
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		publicPath: "/public/",
		port: 8887,
		hot: true,
		colors: true,
		historyApiFallback: true,
		inline: true
	}
};
