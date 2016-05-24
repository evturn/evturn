import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import {
  PATHS, prodLoaders, alias, plugin,
  extensions, modulesDirectories } from './base'

export default webpack({
  name: 'browser',
  target: 'web',
  context: PATHS.root,

  entry: [
    path.join(process.cwd(), 'src/app'),
  ],

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  module: { loaders: prodLoaders },
  resolve: { extensions, modulesDirectories, alias },
  postcss: _ => [precss, autoprefixer],
  plugins: [
    new CleanWebpackPlugin(['dist', 'build'], {
      root: path.join(__dirname, '..', '..')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '..', 'assets', 'img', 'site/title-white.svg'),
        to: 'img/title-white.svg'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: false
    }),
    new HtmlWebpackPlugin(plugin.html)
  ]
}, (err, stats) => {
  if (err) {
    const jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
      console.log(json.errors);
    }
  }

  console.log(stats.toString({ colors: true }))
})