const path = require('path');

exports.PATHS = {
  app: path.join(__dirname, 'src'),
  output: path.join(__dirname, 'dist'),
  publicPath: {
    dev: '/build/',
    prod: 'dist/'
  },
  less: path.resolve(__dirname, 'src', 'client', 'less'),
  static: {
    js: 'js/[name].js',
    css: 'css/app.css',
    img: 'img/[hash].[ext]'
  },
  clean: ['dist'],
  root: __dirname
};

exports.alias = {
  actions:    path.join(__dirname, './src/app/actions/'),
  containers: path.join(__dirname, './src/app/containers/'),
  components: path.join(__dirname, './src/app/components/'),
  reducers:   path.join(__dirname, './src/app/reducers/'),
  store:      path.join(__dirname, './src/app/store/'),
  routes:     path.join(__dirname, './src/app/routes'),
  images:     path.join(__dirname, './src/client/img/'),
  css:        path.join(__dirname, './src/client/css/'),
  less:       path.join(__dirname, './src/client/less/'),
  db:         path.join(__dirname, './src/server/db/')
};

exports.plugin = {
  html: {
    template: 'node_modules/html-webpack-template/index.ejs',
    title: 'Evan Turner | Developer',
    appMountId: 'app',
    inject: false,
    filename: 'index.html',
    favicon: './src/client/img/site/favicon.jpg'
  },
  clean: {
    root: __dirname,
    verbose: true
  }
};

exports.extensions = ['', '.js', '.jsx', '.less'];
exports.modulesDirectories = ['app', 'node_modules'];