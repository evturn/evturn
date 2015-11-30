"use strict";
const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './public/js/router.js',

    ],
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
      },{
        test: /\.hbs$/,
        loader:'handlebars-loader'
      }
    ]
  },
  resolve: {
    root: [
      'web_modules',
      'node_modules',
      'views',
      'templates',
      'models',
      'lib'
    ],
    moduleDirectories: [
      'web_modules',
      'node_modules',
      'views',
      'templates',
      'models',
      'lib'
    ],
    extension: [
      '.js'
    ],
    alias: {
      router: 'router',
      jquery: 'jquery',
      underscore: 'underscore',
      Backbone: 'backbone'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new BrowserSyncPlugin({
      server: {
        baseDir: './',
        logConnections: true,
        open: false
      },
      get: 'ev-dev'
    }),
    new webpack.ProvidePlugin({
      _: 'underscore',
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],
  devtool: 'source-map'
};