import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { PATHS, alias, plugin, extensions, modulesDirectories } from './base';

module.exports = {
  debug: true,
  cache: true,
  devtool: 'eval-source-map',
  name: 'browser',
  context: PATHS.root,
  entry: {
    app: [
      './src/app',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ]
  },
  output: {
    path: PATHS.dest,
    filename: PATHS.static.js,
    publicPath: PATHS.publicPath
  },
  contentBase: PATHS.root,
  devServer: {
    outputPath: PATHS.dest,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*', },
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
        include: PATHS.src
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
        include: /global/
      },{
        test: /\.less$/,
        loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
          '&sourceMap!less?sourceMap&outputStyle=expanded' +
          '&includePaths[]=' + encodeURIComponent(PATHS.less),
        exclude: /global/
      }
    ]
  },
  resolve: { extensions, modulesDirectories, alias },
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