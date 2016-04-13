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
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: PATHS.src
      },{
        test: /\.css$/,
        loaders: ['style', 'css']
      },{
        test: /\.json$/,
        loader: 'json-loader'
      },{
        test: /\.(eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },{
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          `file?hash=sha512&digest=hex&name=${PATHS.static.img}`,
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
        exclude: /less/
      },{
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
        include: /global/
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?module&localIdentName=[local]__[hash:base64:5]' +
          '!less?includePaths[]=' + encodeURIComponent(PATHS.less)),
        exclude: /global/
      }
    ]
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