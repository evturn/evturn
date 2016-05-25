const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = ({
    loaders,
    entry,
    output,
    plugins,
    devtool,
    postcss,
    devServer,
    debug,
    cache,
  }) => {

  return {
    context: path.join(process.cwd(), 'src/app'),

    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },{
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
          loader: 'url-loader?name=img/[hash].[ext]&limit=3000',
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
        },
      ].concat(loaders)
    },

    resolve: {
      alias: {
        actions:       path.join(__dirname, '..', '..', 'app',       'actions/'),
        containers:    path.join(__dirname, '..', '..', 'app',       'containers/'),
        components:    path.join(__dirname, '..', '..', 'app',       'components/'),
        reducers:      path.join(__dirname, '..', '..', 'app',       'reducers/'),
        store:         path.join(__dirname, '..', '..', 'app',       'store/'),
        data:          path.join(__dirname, '..', '..', 'internals', 'data/'),
        routes:        path.join(__dirname, '..', '..', 'app',       'routes'),
        images:        path.join(__dirname, '..', '..', 'assets',    'img/'),
        css:           path.join(__dirname, '..', '..', 'assets',    'css/'),
        less:          path.join(__dirname, '..', '..', 'assets',    'less/'),
        'work-images': path.join(__dirname, '..', '..', 'assets',    'img', 'work/'),
        'site-images': path.join(__dirname, '..', '..', 'assets',    'img', 'site/')
      },
      modules: [ 'app', 'node_modules' ],
      extensions: [ '', '.js', '.jsx', '.less' ],
      packageMains: [ 'jsnext:main', 'main' ]
    },

    name: 'browser',
    target: 'web',
    stats: false,
    progress: true,
    entry,
    output,
    plugins,
    devtool,
    postcss,
    devServer,
    debug,
    cache
  }
}
