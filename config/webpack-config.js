"use strict";

let webpack = require('webpack'),
    path = require('path');

module.exports = {
  cache: true,
  entry: './public/build/js/tmp/app.js',
  output: {
      path: './public/dist/js',
      filename: 'bundle.js'
  },
  resolve: {
    root: './public/build/js',
    modulesDirectories: [
      'vendor',
      'tmp',
    ],
    alias: {
      router: 'router',
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