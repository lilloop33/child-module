'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = {

	entry: {
		app: './src/app/app.module.js'
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ng-annotate-loader'
					},
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader',
				options: {
					outputPath: './assets/fonts',
					useRelativePath: true,
					name: '[name].[ext]'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'raw-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['./dist']),
		new ExtractTextWebpackPlugin('app.bundle.css'),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			io: 'socket.io-client'
		}),
		// new WebpackOnBuildPlugin((stats) => {
		// 	let injectText = `
		// 		import * as vendorBundleJS from './vendor.bundle.js';
		// 		import * as appBundleJS from './app.bundle.js';
		// 		import * as appBundleCSS from './app.bundle.css';
		// 	`.replace(/\	/g, '');
		// 	fs.writeFileSync('./dist/inject.bundles.js', injectText);
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: (module, count) => {
				let appDir = path.resolve(__dirname, './src');
				return module.resource && module.resource.indexOf(appDir) === -1;
			}
		})
	]

};
