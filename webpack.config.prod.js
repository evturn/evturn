const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  output: path.join(__dirname, 'dist'),
  clean: [ path.join(__dirname, 'dist') ],
  publicPath: 'dist/'
};
const EXTENSIONS = ['', '.js', '.jsx', '.less'];
const MODULES_DIRS = ['app', 'node_modules'];
const LOADERS = [
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
    test: /\.(eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader'
  },{
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },{
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
    ],
    exclude: /less/
  },{
    test: /\.woff2(\?\S*)?$/,
    loader: 'url-loader?limit=100000'
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]!less?includePaths[]='
      + encodeURIComponent(path.resolve(__dirname, 'src', 'client', 'less')))
  }
];

module.exports = {
  name: 'browser',
  devtool: 'source-map',
  context: __dirname,
  entry: {
    app: './src/client'
  },
  output: {
    path: PATHS.output,           // The output directory as absolute path
    filename: '/js/[name].js',    // The filename of the entry chunk as relative path inside the output.path directory
    publicPath: PATHS.publicPath  // The output path from the view of the Javascript

  },
  module: {
    loaders: LOADERS
  },
  resolve: {
    extensions: EXTENSIONS,
    modulesDirectories: MODULES_DIRS,
    alias: {
        shared:     path.join(__dirname, './src/shared/'),
        actions:    path.join(__dirname, './src/shared/actions/'),
        containers: path.join(__dirname, './src/shared/containers/'),
        components: path.join(__dirname, './src/shared/components/'),
        reducers:   path.join(__dirname, './src/shared/reducers/'),
        images:     path.join(__dirname, './src/client/img/'),
        css:        path.join(__dirname, './src/client/css/'),
        less:       path.join(__dirname, './src/client/less/'),
        data:       path.join(__dirname, './src/server/data/'),
        db:         path.join(__dirname, './src/server/db/')
    }
  },
  plugins: [
    new CleanPlugin(PATHS.clean),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('/css/app.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Evan Turner | Developer',
      appMountId: 'app',
      inject: false,
      filename: 'index.html',
      favicon: 'src/client/img/site/favicon.jpg'
    })
  ]
};