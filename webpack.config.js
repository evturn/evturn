'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src/run.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  debug: true,
  devtool: 'source-map',
  cache: true,
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },{
        test: /\.pre$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less')
      },{
        test: /\.(jpg|svg|png|jpg|gif|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },{
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      },{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      containers: path.join(__dirname, './src/containers/'),
      components: path.join(__dirname, './src/components/'),
      helpers: path.join(__dirname, './src/helpers/'),
      sources: path.join(__dirname, './src/sources/'),
      images: path.join(__dirname, './src/images/'),
      styles: path.join(__dirname, './src/styles/')
    }
  },
  postcss: function() {
      return [require('autoprefixer')];
  }
};