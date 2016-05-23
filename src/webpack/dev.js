import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import cssnext from 'postcss-cssnext'
import postcssFocus from 'postcss-focus'
import postcssReporter from 'postcss-reporter'

import {
  PATHS,
  devLoaders,
  alias,
  plugin,
  extensions,
  modulesDirectories
} from './base'

export default {
  entry: {
    app: [
      '../app',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ]
  },

  output: {
    path: PATHS.output,
    filename: PATHS.static.js,
    publicPath: PATHS.publicPath
  },

  devServer: {
    outputPath: PATHS.output,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*', },
    hot: true,
    inline: true,
    stats: false,
    progress: true,
    port: 3000,
    host: 'localhost'
  },

  module: { loaders: devLoaders },

  resolve: { extensions, modulesDirectories, alias },

  postcssPlugins: [
    postcssFocus(),
    cssnext({
      browsers: [ 'last 2 versions', 'IE > 10' ],
    }),
    postcssReporter({ clearMessages: true })
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin({ log: false }),
    new ExtractTextPlugin(PATHS.static.css),
    new HtmlWebpackPlugin(plugin.html),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: true
    })
  ],

  debug: true,
  cache: true,
  devtool: 'inline-source-map',
  name: 'browser',
  target: 'web',
  context: PATHS.root,
  contentBase: PATHS.root
}