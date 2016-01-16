const path = require('path');
const port = 3000;
const publicPath = '/dist/';
const webpack = require('webpack');
const assetsPath = path.join(__dirname, 'src', 'assets');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
console.log(TARGET);
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

const common = {
  port: port,
  debug: true,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loaders: ['babel'],
        include: PATHS.src
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader!'
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!!less-loader'
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
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    modulesDirectories: [
      'src', 'node_modules'
    ],
    alias: {
      actions:    path.join(__dirname, './src/actions/'),
      containers: path.join(__dirname, './src/containers/'),
      components: path.join(__dirname, './src/components/'),
      helpers:    path.join(__dirname, './src/helpers/'),
      sources:    path.join(__dirname, './src/sources/'),
      images:     path.join(__dirname, './src/assets/images/'),
      stores:     path.join(__dirname, './src/stores/'),
      styles:     path.join(__dirname, './src/assets/styles/')
    }
  }
};


if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    entry: [
      `webpack-dev-server/client?http://127.0.0.1:${port}`,
      'webpack/hot/only-dev-server',
      PATHS.src
    ],
    debug: true,
    cache: true,
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin()
    ]
  });
}

if (TARGET === 'build:webpack' || !TARGET) {
  module.exports = merge(common, {
    entry: PATHS.src,
    preLoaders: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      loaders: ['eslint']
    }],
    plugins: [
      new ExtractTextPlugin('styles/main.css')
    ]
  });
}