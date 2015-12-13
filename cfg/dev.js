'use strict';
const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = require('./base');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const config = _.merge({
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8000',
    'webpack/hot/only-dev-server',
    './src/js/components/run'
  ],
  cache: true,
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
