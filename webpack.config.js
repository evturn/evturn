"use strict";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./public/build/js/app.js'],
  output: {
      path: 'public/dist/js/',
      filename: 'bundle.js',
      publicPath: '/public/dist/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    root: [
      'web_modules',
      'node_modules',
      'views'
    ],
    moduleDirectories: [
      'web_modules',
      'node_modules',
      'shared'
    ],
    extension: [
      '.js'
    ],
    alias: {
      router: 'router',
      jquery: 'jquery',
      underscore: 'underscore',
      backbone: 'backbone'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],
  devtool: 'source-map'
};