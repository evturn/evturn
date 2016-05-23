import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const PATHS = {
  app: path.join(__dirname, '..', '..', 'src'),
  output: path.join(__dirname, '..', '..', 'dist'),
  publicPath: 'dist/',
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
    include: PATHS.app
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
    loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader!',
  },{
    test: /\.css$/,
    include: /node_modules/,
    loaders: ['style-loader', 'css-loader'],
  },{
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
    loader: 'url-loader?limit=10000',
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader!less-loader'
    ),
    include: /global/
  },{
    test: /\.less$/,
    loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
      '&sourceMap!less?sourceMap&outputStyle=expanded' +
      '&includePaths[]=' + encodeURIComponent(PATHS.less),
    exclude: /global/
  },{
    test: /\.json$/,
    loader: 'json-loader'
  }
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
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'css-loader?modules&importLoaders=1!postcss-loader'
    )
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
    include: /global/
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'css-loader?modules&importLoaders=1!postcss-loader!less-loader'
    ),
    exclude: /global/
  }
]

const extensions = ['', '.js', '.jsx', '.less'];
const modulesDirectories = ['app', 'node_modules'];

const alias = {
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

const plugin = {
  html: {
    template: '../../index.html',
    title: 'Evan Turner | Developer',
    appMountId: 'app',
    inject: false,
    favicon: '../assets/img/site/favicon.jpg'
  }
}

export {
  PATHS,
  devLoaders,
  prodLoaders,
  extensions,
  modulesDirectories,
  alias,
  plugin
}
