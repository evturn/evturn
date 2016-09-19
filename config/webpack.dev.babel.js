const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.base.babel.js')({
  debug: true,
  cache: true,
  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'app')
  ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  loaders: [
    {
      test: /\.js$|\.jsx$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(process.cwd(), 'app'),
      query: { presets: ['react-hmre'] }
    },{
      test: /\.css$/,
      exclude: [ /node_modules/, /assets/ ],
      loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
    }
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin({ log: false }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      filename: '../index.html'
    }),
    new webpack.DefinePlugin({ __DEV__: true })
  ],
})
