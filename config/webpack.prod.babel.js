const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = require('./webpack.base.babel.js')({
  entry: [ path.join(process.cwd(), 'app') ],

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
      include: path.join(process.cwd(), 'app'),
    },{
      test: /\.css$/,
      exclude: [ /node_modules/, /assets/ ],
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&importLoaders=1!postcss-loader'
      )
  }],

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
      inject: true
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })
  ],
})
