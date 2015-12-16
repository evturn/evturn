'use-strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const devServer = {
  contentBase: path.resolve(__dirname, './dist'),
  colors: true,
  quiet: false,
  noInfo: true,
  publicPath: '/static/',
  historyApiFallback: false,
  host: '127.0.0.1',
  port: 8000,
  hot: true
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
  cache: true,
  context: path.resolve(__dirname, './src'),
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './run.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/static'),
    filename: '[name].js',
    publicPath: devServer.publicPath
  },
  plugins: [
    new WriteFilePlugin(),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.OldWatchingPlugin(),
    new webpack.NoErrorsPlugin()
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
        loader: 'react-hot!babel-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: alias
  }
};