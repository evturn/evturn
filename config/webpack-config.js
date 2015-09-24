"use strict";

let webpack = require('webpack'),
    path = require('path');

module.exports = {
  cache: true,
  entry: './public/build/js/tmp/router.js',
  output: {
      path: './public/dist/tmp',
      filename: 'bundle.js'
  },
  resolve: {
    root: './public/build/js',
    modulesDirectories: [
      'vendor',
      'tmp',
    ],
    alias: {
      jquery: 'jquery',
      underscore: 'underscore',
      backbone: 'backbone'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
};