const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, '..', '..', 'src'),
  output: path.join(__dirname, '..', '..', 'dist'),
  publicPath: '/',
  less: path.resolve(__dirname, '..', 'assets', 'less'),
  static: {
    js: 'js/[name].js',
    css: 'css/app.css',
    img: 'img/[name].[ext]'
  },
  root: __dirname
}

const devLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel',
    exclude: /node_modules/,
    include: PATHS.app,
    query: { presets: ['react-hmre'] }
  },{
    test: /\.json$/,
    loader: 'json-loader'
  },{
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
    loader: 'url-loader?limit=10000',
  },{
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
  },{
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
  },{
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream',
  },{
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]',
  },{
    test: /\.css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
  },{
    test: /\.css$/,
    include: /node_modules/,
    loaders: ['style-loader', 'css-loader']
  },{
    test: /\.less$/,
    loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
      '&sourceMap!less?sourceMap&outputStyle=expanded' +
      '&includePaths[]=' + encodeURIComponent(PATHS.less)
  },
]

const prodLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel',
    exclude: /node_modules/,
    include: PATHS.app
  },{
    test: /\.json$/,
    loader: 'json-loader'
  },{
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
    loader: 'url-loader?limit=10000',
  },{
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
  },{
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
  },{
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream',
  },{
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]',
  },{
    test: /\.css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
  },{
    test: /\.css$/,
    include: /node_modules/,
    loaders: ['style-loader', 'css-loader']
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'css-loader?modules&importLoaders=1!postcss-loader!less-loader'
    )
  }
]

const resolve = {
  modules: [
    'app',
    'node_modules'
  ],
  extensions: [
    '',
    '.js',
    '.jsx',
    '.less',
  ],
  packageMains: [
    'jsnext:main',
    'main',
  ],
  alias: {
    actions:       path.join(__dirname, '..', 'app',       'actions/'),
    containers:    path.join(__dirname, '..', 'app',       'containers/'),
    components:    path.join(__dirname, '..', 'app',       'components/'),
    reducers:      path.join(__dirname, '..', 'app',       'reducers/'),
    store:         path.join(__dirname, '..', 'app',       'store/'),
    data:          path.join(__dirname, '..', 'internals', 'data/'),
    routes:        path.join(__dirname, '..', 'app',       'routes'),
    images:        path.join(__dirname, '..', 'assets',    'img/'),
    css:           path.join(__dirname, '..', 'assets',    'css/'),
    less:          path.join(__dirname, '..', 'assets',    'less/'),
    'work-images': path.join(__dirname, '..', 'assets',    'img', 'work/'),
    'site-images': path.join(__dirname, '..', 'assets',    'img', 'site/')
  }
}

const plugin = {
  html: {
    template: '../../index.html',
    title: 'Evan Turner | Developer',
    appMountId: 'app',
    inject: true,
    favicon: '../assets/img/site/favicon.jpg'
  }
}

module.exports = {
  PATHS,
  devLoaders,
  prodLoaders,
  resolve,
  plugin
}
