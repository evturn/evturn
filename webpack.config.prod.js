'use strict';
const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const baseConfig = require('./webpack.config.base');

const config = _.merge({
  entry: path.join(__dirname, './src/run'),
  cache: false,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, './src')
});

module.exports = config;