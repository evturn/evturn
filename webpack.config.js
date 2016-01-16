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
const LOADERS = [
  {
    test: /\.js$|\.jsx$/,
    loaders: ['babel'],
    include: PATHS.src
  },{
    test: /\.json$/,
    loader: "json-loader"
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
];

const common = {
  port: port,
  debug: true,
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: publicPath
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
    entry: {
      app: [
        `webpack-dev-server/client?http://127.0.0.1:${port}`,
        'webpack/hot/only-dev-server',
        PATHS.src
      ]
    },
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
    module: {
      loaders: LOADERS.concat([
        { test: /\.less$/,
          loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
            '&sourceMap!autoprefixer-loader!less?sourceMap&outputStyle=expanded' +
            '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, '..', 'src', 'less'))
        }
      ])
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin()
    ]
  });
}

if (TARGET === 'build:webpack' || !TARGET) {
  module.exports = merge(common, {
    entry: {
      app: PATHS.src
    },
    preLoaders: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      loaders: ['eslint']
    }],
    module: {
      loaders: LOADERS.concat([
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader!less?includePaths[]='
            + encodeURIComponent(path.resolve(__dirname, '..', 'src', 'less')))
        }
      ])
    },
    plugins: [
      new ExtractTextPlugin('styles/app.css')
    ]
  });
}