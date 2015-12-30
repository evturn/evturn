'use strict';
const path = require('path');
const webpack = require('webpack');

const publicPath = 'dist/';
const port = 8000;

module.exports = {
  port: port,
  debug: true,
  entry: './src/run.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  devtool: 'eval',
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false
  },
  cache: true,
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      include: path.join(__dirname, 'src'),
      loader: 'eslint-loader'
    }],
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