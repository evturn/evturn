const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CWD = process.cwd()

const configureWebpack = opts => ({
  entry: opts.entry,

  plugins: opts.plugins,

  output: Object.assign({
    path: path.resolve(CWD, 'build'),
  }, opts.output),

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: opts.babelQuery,
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: opts.cssLoaders,
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: [ 'style-loader', 'css-loader' ],
    },{
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url',
      query: {
        name: 'fonts/[hash].[ext]',
        limit: 5000,
        mimetype: 'application/font-woff'
      }
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url',
      query: {
        limit: 5000,
        mimetype: 'application/font-woff',
        name: 'fonts/[hash].[ext]'
      }
    },{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url',
      query: {
        limit: 5000,
        mimetype: 'application/octet-stream',
        name: 'fonts/[hash].[ext]'
      },
    },{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
      query: {
        name: 'fonts/[hash].[ext]'
      }
    },{
      test: /.*\.(gif|png|jpe?g)$/i,
      loaders: [
        'file-loader',
        {
          loader: 'image-webpack',
          query: {
            progressive: true,
            optimizationLevel: 6,
            interlaced: false,
            pngquant: {quality: '65-90', speed: 5}
          }
        }
      ]
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(mp4|webm)$/,
      loader: 'url-loader?limit=10000',
    }],
  },

  resolve: {
    alias: {
      containers: path.join(CWD, 'app',    'containers'),
      components: path.join(CWD, 'app',    'components'),
      api:        path.join(CWD, 'app',    'api'),
      public:     path.join(CWD, 'public'),
      config:     path.join(CWD, 'config'),
    },
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.react.js'],
    packageMains: ['jsnext:main', 'main'],
  },

  postcss: _ => [
    postcssFocus(),
    cssnext({browsers: ['last 2 versions', 'IE > 10']}),
    postcssReporter({clearMessages: true}),
  ],
  devtool: opts.devtool,
  target: 'web',
  stats: false,
  progress: true,
})

const devBuild = _ => configureWebpack({
  entry: [
    'webpack-hot-middleware/client',
    path.join(CWD, 'app/index.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  babelQuery: {
    presets: ['react-hmre'],
  },

  devtool: 'inline-source-map',

  cssLoaders: [
    `style-loader`,
    `!css-loader`,
    `?localIdentName=[local]--[path]-[hash:base64:5]`,
    `&modules&importLoaders=1`,
    `&sourceMap`,
    `!postcss-loader`,
  ].join(''),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin({log: false}),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      appMountId: 'app',
      title: 'Evan Turner | Developer',
      favicon: 'app/favicon.png',
      inject: true,
    }),
    new webpack.DefinePlugin({__DEV__: true})
  ],

})

const prodBuild = _ => configureWebpack({
  entry: {
    main: path.join(CWD, 'app/index.js'),
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'rxjs',
      'redux',
      'redux-observable',
    ],
  },

  output: {
    publicPath: 'build/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  cssLoaders: ExtractTextPlugin.extract(
    'style-loader',
    [`css-loader`, `?modules&importLoaders=1`, `!postcss-loader`].join('')
  ),

  plugins: [
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
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
})

module.exports = process.env.NODE_ENV === 'development'
  ? devBuild()
  : prodBuild()