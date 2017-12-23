'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackCommonConfig = require('./webpack.common');


module.exports = webpackMerge(webpackCommonConfig, {

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					fallback: 'style-loader'
				})
			}
		]
	},

	devtool: 'inline-source-map',

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9099
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
	]

});
