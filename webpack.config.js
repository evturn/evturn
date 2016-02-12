const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const TARGET = process.env.npm_lifecycle_event;
const PORT = 3000;
const HOST = 'localhost';
const PATHS = {
  src: path.join(__dirname, 'src/client'),
  dist: path.join(__dirname, 'dist'),
  output: path.join(__dirname, 'dist'),
  publicPath: '/'
};

const common = {
  port: PORT,
  debug: true,
  output: {
    path: PATHS.output,
    filename: 'js/[name].js',
    publicPath: PATHS.publicPath
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      shared:     path.join(__dirname, './src/shared/'),
      actions:    path.join(__dirname, './src/shared/actions/'),
      containers: path.join(__dirname, './src/shared/containers/'),
      components: path.join(__dirname, './src/shared/components/'),
      reducers:   path.join(__dirname, './src/shared/reducers/'),
      images:     path.join(__dirname, './src/client/assets/images/'),
      css:        path.join(__dirname, './src/client/assets/css/'),
      less:       path.join(__dirname, './src/client/assets/less/'),
      data:       path.join(__dirname, './src/server/data/'),
      db:         path.join(__dirname, './src/server/db/')
    }
  }
};

const LOADERS = [
  {
    test: /\.css$/,
    loaders: ['style', 'css']
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


if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    debug: true,
    cache: true,
    devtool: 'eval-source-map',
    entry: {
      app: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
        'webpack/hot/only-dev-server',
        PATHS.src
      ]
    },
    context: PATHS.src,
    devServer: {
      outputPath: PATHS.output,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
      stats: { colors: true },
      progress: true,
      port: PORT,
      host: HOST
    },
    module: {
      loaders: LOADERS.concat([
        {
          test: /\.js$|\.jsx$/,
          loaders: ['react-hot', 'babel'],
          exclude: /node_modules/,
          include: __dirname
        },{
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]' +
            '&sourceMap!autoprefixer-loader!less?sourceMap&outputStyle=expanded' +
            '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, '..', 'src', 'less')))
        }
      ])
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new WriteFilePlugin(),
      new ExtractTextPlugin('css/[name].css'),
      new WebpackNotifierPlugin()
    ]
  });
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {
    entry: {
      app: PATHS.src
    },
    module: {
      loaders: LOADERS.concat([
        {
          test: /\.js$|\.jsx$/,
          loader: 'babel',
          exclude: /node_modules/,
          include: __dirname
        },{
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader!less?includePaths[]='
            + encodeURIComponent(path.resolve(__dirname, '..', 'src', 'less')))
        }
      ])
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new ExtractTextPlugin('css/[name].css'),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
  });
}