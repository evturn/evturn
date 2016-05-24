const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')

const base = require('./base')
const PATHS = base.PATHS
const devLoaders = base.devLoaders
const plugin = base.plugin
const resolve = base.resolve

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/app')
  ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  devServer: {
    outputPath: path.resolve(process.cwd(), 'build'),
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*', },
    hot: true,
    inline: true,
    stats: false,
    progress: true,
    port: 3000,
    host: 'localhost'
  },

  module: { loaders: devLoaders },

  resolve,

  postcss:  _ => ([
    postcssFocus(),
    cssnext({
      browsers: [ 'last 2 versions', 'IE > 10' ],
    }),
    postcssReporter({ clearMessages: true })
  ]),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin({ log: false }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin(plugin.html),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: true
    })
  ],

  debug: true,
  cache: true,
  devtool: 'inline-source-map',
  name: 'browser',
  target: 'web',
  context: PATHS.root,
  contentBase: PATHS.root
}
