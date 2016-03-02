const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3000;
const PATHS = {
  app: path.join(__dirname, 'src'),
  output: path.join(__dirname, 'dist'),
  publicPath: 'dist/'
};
const EXTENSIONS = ['', '.js', '.jsx', '.less'];
const MODULES_DIRS = ['app', 'node_modules'];

module.exports = {
    debug: true,
    cache: true,
    devtool: 'eval-source-map',
    name: 'browser',
    context: __dirname,
    contentBase: __dirname,
    entry: {
      app: ['./src/client', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true']
    },
    output: {
      path: PATHS.output,           // The output directory as absolute path
      filename: 'js/[name].js',     // The filename of the entry chunk as relative path inside the output.path directory
      publicPath: PATHS.publicPath  // The output path from the view of the Javascript
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
      port: PORT,
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
            '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, 'src', 'client', 'less'))
        }
      ]
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
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({ save: true }),
      new webpack.NoErrorsPlugin(),
      new WriteFilePlugin(),
      new ExtractTextPlugin('css/app.css'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
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