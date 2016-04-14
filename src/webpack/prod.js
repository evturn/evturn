require('babel-register')({
  only: /webpack/
});
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./base');
const PATHS = config.PATHS;
const loaders = config.loaders;
const alias = config.alias;
const plugin = config.plugin;
const extensions = config.extensions;
const modulesDirectories = config.modulesDirectories;

module.exports = {
  name: 'browser',
  devtool: 'source-map',
  context: PATHS.root,
  entry: {
    app: './src/app'
  },
  output: {
    path: PATHS.dest,
    filename: PATHS.static.js,
    publicPath: PATHS.publicPath
  },
  module: {
    loaders: loaders.concat([
      {
        test: /\.(eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          `file?hash=sha512&digest=hex&name=${PATHS.static.img}`,
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
        exclude: /less/
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?module&localIdentName=[local]__[hash:base64:5]' +
          '!less?includePaths[]=' + encodeURIComponent(PATHS.less)),
        exclude: /global/
      }
    ])
  },
  resolve: { extensions, modulesDirectories, alias },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.join(__dirname, '..', '..') }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(PATHS.static.css),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      __DEV__: false
    }),
    new HtmlWebpackPlugin(plugin.html),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '..', 'assets', 'img', 'site/title-white.svg'),
        to: 'img/title-white.svg'
      }
    ])
  ]
};