'use strict';
const path = require('path');
const webpack = require('webpack');

const publicPath = 'dist/';
const port = 8000;

module.exports = {
  port: port,
  debug: true,
  entry: [
    './src/run.jsx'
  ],
  vendors: ['react'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  devtool: 'source-map',
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'react.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: path.resolve(__dirname, 'node_modules'),
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
        exclude: path.resolve(__dirname, 'node_modules'),
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