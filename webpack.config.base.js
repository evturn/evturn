'use strict';
const path = require('path');
const port = 8000;
const publicPath = '/dist/';

module.exports = {
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      containers: path.join(__dirname, './src/containers/'),
      components: path.join(__dirname, './src/components/'),
      helpers:    path.join(__dirname, './src/helpers/'),
      sources:    path.join(__dirname, './src/sources/'),
      images:     path.join(__dirname, './src/assets/images/'),
      styles:     path.join(__dirname, './src/assets/styles/')
    }
  },
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
      }
    ]
  },
  postcss: function() {
    return [require('autoprefixer')];
  }
};