const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = opts => {
  return {
    entry: opts.entry,
    output: opts.output,
    plugins: opts.plugins,
    devtool: opts.devtool,
    postcss: opts.postcss,
    devServer: opts.devServer,
    debug: opts.debug,
    cache: opts.cache,
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
          include: /node_modules/,
          loaders: ['style-loader', 'css-loader']
        },
      ].concat(opts.loaders)
    },

    resolve: {
      alias: {
        actions:       path.join(process.cwd(), 'src', 'app',       'actions/'),
        containers:    path.join(process.cwd(), 'src', 'app',       'containers/'),
        components:    path.join(process.cwd(), 'src', 'app',       'components/'),
        reducers:      path.join(process.cwd(), 'src', 'app',       'reducers/'),
        store:         path.join(process.cwd(), 'src', 'app',       'store/'),
        data:          path.join(process.cwd(), 'src', 'internals', 'data/'),
        routes:        path.join(process.cwd(), 'src', 'app',       'routes'),
        images:        path.join(process.cwd(), 'src', 'assets',    'img/'),
        css:           path.join(process.cwd(), 'src', 'assets',    'css/'),
        less:          path.join(process.cwd(), 'src', 'assets',    'less/'),
        'work-images': path.join(process.cwd(), 'src', 'assets',    'img', 'work/'),
        'site-images': path.join(process.cwd(), 'src', 'assets',    'img', 'site/')
      },
      modules: [ 'app', 'node_modules' ],
      extensions: [ '', '.js', '.jsx', '.less' ],
      packageMains: [ 'jsnext:main', 'main' ]
    },

    name: 'browser',
    target: 'web',
    stats: false,
    progress: true,
  }
}
