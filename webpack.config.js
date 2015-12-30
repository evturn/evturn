'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/run.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  devtool: 'eval',
  debug: true,
  cache: false,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
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
        loader: 'babel-loader',
        include: path.join(__dirname, './src/')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      containers: path.join(__dirname, './src/containers/'),
      components: path.join(__dirname, './src/components/'),
      helpers:    path.join(__dirname, './src/helpers/'),
      sources:    path.join(__dirname, './src/sources/'),
      images:     path.join(__dirname, './src/images/'),
      styles:     path.join(__dirname, './src/styles/')
    }
  },
  postcss: function() {
    return [require('autoprefixer')];
  }
};