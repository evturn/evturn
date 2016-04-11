import path from 'path';

const PATHS = {
  src: path.join(__dirname, '..'),
  dest: path.join(__dirname, '..', '..', 'dist'),
  publicPath: 'dist/',
  less: path.resolve(__dirname, '..', 'assets', 'less'),
  static: {
    js: 'js/[name].js',
    css: 'css/app.css',
    img: 'img/[hash].[ext]'
  },
  root: path.join(__dirname, '..', '..')
};

const alias = {
  actions:       path.join(__dirname, '..', 'app',    'actions/'),
  containers:    path.join(__dirname, '..', 'app',    'containers/'),
  components:    path.join(__dirname, '..', 'app',    'components/'),
  reducers:      path.join(__dirname, '..', 'app',    'reducers/'),
  store:         path.join(__dirname, '..', 'app',    'store/'),
  db:            path.join(__dirname, '..', 'app',    'store', 'data/'),
  routes:        path.join(__dirname, '..', 'app',    'routes'),
  images:        path.join(__dirname, '..', 'assets', 'img/'),
  css:           path.join(__dirname, '..', 'assets', 'css/'),
  less:          path.join(__dirname, '..', 'assets', 'less/'),
  'work-images': path.join(__dirname, '..', 'assets', 'img', 'work/'),
  'site-images': path.join(__dirname, '..', 'assets', 'img', 'site/')
};

const plugin = {
  html: {
    template: 'index.html',
    title: 'Evan Turner | Developer',
    appMountId: 'app',
    inject: false,
    filename: 'index.html',
    favicon: './src/assets/img/site/favicon.jpg'
  }
};

const extensions = ['', '.js', '.jsx', '.less'];
const modulesDirectories = ['app', 'node_modules'];

export { PATHS, alias, plugin, extensions, modulesDirectories };