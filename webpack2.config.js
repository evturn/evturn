const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CWD = process.cwd()
const ENV = process.env.NODE_ENV

const entry = {
  development: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(CWD, 'app/index.js'),
  ],
  production: {
    main: path.join(CWD, 'app/index.js'),
    vendor: ['react', 'react-dom', 'react-router'],
  }
}

const output = {
  development: {
    path: path.resolve(CWD, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  production: {
    path: path.resolve(CWD, 'build'),
    publicPath: 'build/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  }
}

const devtool = {
  development: 'inline-source-map'
}

const jsLoaders = {
  development: {
    loader: 'babel-loader',
    options: {
      presets: ['react-hmre']
    }
  },
  production: {
    loader: 'babel-loader',
  }
}

const cssLoaders = {
  development: {
    use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[local]--[path]-[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true,
        }
      }, {
        loader: 'postcss-loader'
    }]
  },
  production: {
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [{
          loader: 'css-loader',
          query: {
            modules: true,
            importLoaders: 1,
          }
        }, {
          loader: 'postcss-loader'
      }]
    })
  }
}

const plugins = {
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin({log: false}),
    new ExtractTextPlugin({filename: '[name].[contenthash].css'}),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      appMountId: 'app',
      title: 'Evan Turner | Developer',
      favicon: 'app/favicon.png',
      inject: true,
    }),
    new webpack.DefinePlugin({__DEV__: true}),
  ],
  production: [
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      appMountId: 'app',
      favicon: 'app/favicon.png',
      inject: true,
      title: 'Evan Turner | Developer',
      filename: '../index.html',
    }),
    new ExtractTextPlugin({filename: '[name].[contenthash].css'}),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
}

module.exports = {
  entry: entry[ENV],

  plugins: plugins[ENV],

  output: output[ENV],

  resolve: {
    alias: {
      containers: path.resolve(CWD, 'app',    'containers'),
      components: path.resolve(CWD, 'app',    'components'),
      public:     path.resolve(CWD, 'public'),
    },
    mainFields: ['browser', 'module', 'main'],
  },

  module: {
    rules: [
      Object.assign({
        test: /\.js$/,
        exclude: /node_modules/,
      }, jsLoaders[ENV]),
      Object.assign({
        test: /\.css$/,
        exclude: /node_modules/,
      }, cssLoaders[ENV]), {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        include: /node_modules/,
      },{
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },{
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          mimetype: 'application/font-woff',
          name: 'fonts/[hash].[ext]'
        }
      },{
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          mimetype: 'application/octet-stream',
          name: 'fonts/[hash].[ext]'
        },
      },{
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {name: 'fonts/[hash].[ext]'}
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
        }, {
          loader: 'image-webpack-loader',
          options: {
            progressive: true,
            optimizationLevel: 6,
            interlaced: false,
            pngquant: {quality: '65-90', speed: 5}
          }
        }]
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        options: {limit: 10000}
    }],
  },

  devtool: devtool[ENV],
  target: 'web',
  stats: false,
  progress: true,

  postcss: _ => [
    postcssFocus(),
    cssnext({browsers: ['last 2 versions', 'IE > 10']}),
    postcssReporter({clearMessages: true}),
  ]
}