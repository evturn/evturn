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
    test: /\.json$/,
    loader: 'json-loader'
  },{
    test: /\.(gif|png|jpe?g|svg|eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader'
  },{
    test: /\.(eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },{
    test: /\.woff2(\?\S*)?$/,
    loader: 'url-loader?limit=100000'
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
    include: /global/
  },{
    test: /\.less$/,
    loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
      '&sourceMap!less?sourceMap&outputStyle=expanded' +
      '&includePaths[]=' + encodeURIComponent(PATHS.less),
    exclude: /global/
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
    test: /\.(eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader'
  },{
    test: /\.(eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },{
    test: /\.woff2(\?\S*)?$/,
    loader: 'url-loader?limit=100000'
  },{
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      `file?hash=sha512&digest=hex&name=${PATHS.static.img}`,
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
    ],
    exclude: /less/
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
    include: /global/
  },{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'css-loader?module&localIdentName=[local]__[hash:base64:5]&importLoaders=1!postcss-loader' +
      '!less?includePaths[]=' + encodeURIComponent(PATHS.less)),
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
