import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

import cssnext from 'postcss-cssnext'
import postcssFocus from 'postcss-focus'
import postcssReporter from 'postcss-reporter'

import {
  PATHS, prodLoaders, alias, plugin,
  extensions, modulesDirectories } from './base'

export default webpack({
  name: 'browser',
  target: 'web',
  context: PATHS.root,

  entry: [
    path.join(process.cwd(), 'src/app'),
  ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  module: { loaders: prodLoaders },
  resolve: { extensions, modulesDirectories, alias },
  postcss:  _ => ([
    postcssFocus(),
    cssnext({
      browsers: [ 'last 2 versions', 'IE > 10' ],
    }),
    postcssReporter({ clearMessages: true })
  ]),
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.join(__dirname, '..', '..')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: false
    }),
    new HtmlWebpackPlugin(plugin.html)
  ]
}, (err, stats) => {
  if (err) {
    const jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
      console.log(json.errors);
    }
  }

  console.log(stats.toString({ colors: true }))
})