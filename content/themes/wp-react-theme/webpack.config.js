const path = require('path')
//const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// Detecting Dev Mode
const devMode = process.env.NODE_ENV !== 'production'

// Extract text from a bundle, or bundles, into a separate file
const cssPlugin = new MiniCssExtractPlugin({
	filename: '[name].css',
	chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css'
})

// // Enabled HMR while the application is running, without a full reload
// const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

// // Displayed module name when HMR is enabled
// const namedModulePlugin = new webpack.NamedModulesPlugin()

//BrowserSync in Webpack
const browserSync = new BrowserSyncPlugin(
	{
		host: 'localhost',
		port: 9000,
		proxy: 'http://wp-app.local/',
		files: ['./dist/']
	},
	{ reload: false }
)

// Keeping it clean and fresh
const cleanPlugin = new CleanWebpackPlugin(['dist'])

module.exports = {
	entry: { app: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				loader: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				loader: 'url-loader'
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [cleanPlugin, cssPlugin, browserSync]
}
