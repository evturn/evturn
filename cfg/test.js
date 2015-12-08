'use strict';
const path = require('path');
const srcPath = path.join(__dirname, '/../src/');
const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          path.join(__dirname, '/../src')
        ]
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '/../src'),
          path.join(__dirname, '/../test')
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {
      actions:    srcPath + 'actions/',
      helpers:    path.join(__dirname, '/../test/helpers'),
      components: srcPath + 'components/',
      sources:    srcPath + 'sources/',
      stores:     srcPath + 'stores/',
      styles:     srcPath + 'assets/styles/',
      config: './config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ]
};
