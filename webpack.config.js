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
  entry: [
    path.resolve(__dirname, 'src/run.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.pre$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less')
      },
      {
        test: /\.(jpg|svg|png|jpg|gif|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },{
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      },{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      }
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
