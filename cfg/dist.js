'use strict';
const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const baseConfig = require('./base');

const config = _.merge({
  entry: path.join(__dirname, '../src/js/components/run'),
  cache: false,
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({ React: 'react' })
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
