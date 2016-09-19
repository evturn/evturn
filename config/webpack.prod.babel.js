const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const createWebpackConfig = require('./webpack.base.babel.js')
const cwd = process.cwd()

module.exports = createWebpackConfig({
  entry: [ path.join(cwd, 'app') ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: 'build/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  loaders: [{
      test: /\.js$|\.jsx$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(cwd, 'app'),
    },{
      test: /\.css$/,
      exclude: [ /node_modules/, /assets/ ],
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&importLoaders=1!postcss-loader'
      )
  }],

  plugins: [
    new CleanWebpackPlugin(['build'], { root: cwd }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Evan Turner | Developer',
      filename: '../index.html',
      appMountId: 'app',
      inject: true
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.DefinePlugin({ __DEV__: false }),
  ],
})
