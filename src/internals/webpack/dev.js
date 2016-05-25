const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')

module.exports = require('./base')({
  debug: true,
  cache: true,
  devtool: 'inline-source-map',
  contentBase: path.join(process.cwd()),

  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/app')
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
      include: path.join(process.cwd(), 'src'),
      query: { presets: ['react-hmre'] }
    },{
      test: /\.less$/,
      loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
        '&sourceMap!less?sourceMap&outputStyle=expanded' +
        '&includePaths[]=' + encodeURIComponent(path.resolve(process.cwd(), 'src', 'assets', 'less'))
    }
  ],

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
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })
  ],

  postcss:  _ => ([
    postcssFocus(),
    cssnext({
      browsers: [ 'last 2 versions', 'IE > 10' ],
    }),
    postcssReporter({ clearMessages: true })
  ])
})