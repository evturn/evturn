'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

const devServer = {
  contentBase: path.resolve(__dirname, './dist'),
  historyApiFallback: true,
  quiet: false,
  host: '127.0.0.1',
  port: 8000,
  hot: true,
  publicPath: '/static/',
  noInfo: false,
  stats: { colors: true }
};

const alias = {
  components: path.join(__dirname, './src/components/'),
  helpers: path.join(__dirname, './src/helpers/'),
  sources: path.join(__dirname, './src/sources/'),
  images: path.join(__dirname, './src/images/'),
  styles: path.join(__dirname, './src/styles/')
};

module.exports = {
  devtool: 'source-map',
  debug: true,
  devServer: devServer,
  context: path.resolve(__dirname, './src'),
  inline: true,
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
    'webpack/hot/only-dev-server',
    './run.jsx'
  ],
  output: {
    path: path.resolve(__dirname, './dist/static'),
    filename: '[name].js',
    publicPath: devServer.publicPath
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({ React: 'react' })

  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },{
        test: /\.(jpg|svg|png|jpg|gif|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },{
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      },{
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        include: path.join(__dirname, 'src')
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: alias
  },
  postcss: function() {
      return [require('autoprefixer')];
  }
};
