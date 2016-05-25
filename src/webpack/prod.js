const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')

const base = require('./base')
const prodLoaders = base.prodLoaders
const resolve = base.resolve

module.exports = {
  name: 'browser',
  target: 'web',
  context: path.join(process.cwd(), 'src/app'),

  entry: [
    path.join(process.cwd(), 'src/app'),
  ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  module: {
    loaders: prodLoaders
  },

  resolve,

  postcss:  _ => ([
    postcssFocus(),
    cssnext({
      browsers: [ 'last 2 versions', 'IE > 10' ],
    }),
    postcssReporter({ clearMessages: true })
  ]),

  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.join(process.cwd())
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Evan Turner | Developer',
      filename: '../index.html',
      appMountId: 'app',
      inject: true,
      favicon: '../assets/img/site/favicon.jpg'
    }),

    new ExtractTextPlugin('[name].[contenthash].css'),

    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })
  ]
}
