const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const values = require('postcss-modules-values')

module.exports = require('./webpack.base.babel.js')({
  debug: true,
  cache: true,
  devtool: 'inline-source-map',
  contentBase: path.join(process.cwd()),

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
    values,
    postcssFocus(),
    cssnext({ browsers: [ 'last 2 versions', 'IE > 10' ] }),
    postcssReporter({ clearMessages: true })
  ])
})
