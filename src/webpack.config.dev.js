const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('../wp').PATHS;
const extensions = require('../wp').extensions;
const modulesDirectories = require('../wp').modulesDirectories;
const alias = require('../wp').alias;
const plugin = require('../wp').plugin;

module.exports = {
    debug: true,
    cache: true,
    devtool: 'eval-source-map',
    name: 'browser',
    context: PATHS.root,
    contentBase: PATHS.root,
    entry: {
      app: ['./src/client', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true']
    },
    output: {
      path: PATHS.output,              // The output directory as absolute path
      filename: PATHS.static.js,       // The filename of the entry chunk as relative path inside the output.path directory
      publicPath: PATHS.publicPath.dev // The output path from the view of the Javascript
    },
    devServer: {
      outputPath: PATHS.output,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      port: 3000,
      host: 'localhost'
    },
    module: {
      loaders: [
        {
          test: /\.js$|\.jsx$/,
          loader: 'babel',
          exclude: /node_modules/,
          include: PATHS.app
        },{
          test: /\.css$/,
          loaders: ['style', 'css']
        },{
          test: /\.json$/,
          loader: 'json-loader'
        },{
          test: /\.(gif|png|jpe?g|svg|eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader'
        },{
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },{
          test: /\.woff2(\?\S*)?$/,
          loader: 'url-loader?limit=100000'
        },{
          test: /\.less$/,
          loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
            '&sourceMap!less?sourceMap&outputStyle=expanded' +
            '&includePaths[]=' + encodeURIComponent(PATHS.less)
        }
      ]
    },
    resolve: {
      extensions: extensions,
      modulesDirectories: modulesDirectories,
      alias: alias
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new WriteFilePlugin(),
      new ExtractTextPlugin(PATHS.static.css),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        'window.__DEV__': true
      }),
      new HtmlWebpackPlugin(plugin.html)
    ]
};