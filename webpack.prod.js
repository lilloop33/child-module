'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
							loader: 'autoprefixer-loader'
						},
						{
							loader: 'sass-loader'
						},
					],
					fallback: 'style-loader'
				})
			}
		]
	},

});
