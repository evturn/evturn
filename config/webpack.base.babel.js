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
    context: path.join(process.cwd(), 'app'),

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
          include: [ /node_modules/, /assets/ ],
          loaders: ['style-loader', 'css-loader']
        },
      ].concat(opts.loaders)
    },

    resolve: {
      alias: {
        actions:       path.join(process.cwd(), 'app',    'actions/'),
        containers:    path.join(process.cwd(), 'app',    'containers/'),
        components:    path.join(process.cwd(), 'app',    'components/'),
        reducers:      path.join(process.cwd(), 'app',    'reducers/'),
        store:         path.join(process.cwd(), 'app',    'store/'),
        routes:        path.join(process.cwd(), 'app',    'routes'),
        images:        path.join(process.cwd(), 'assets', 'images/'),
        assets:        path.join(process.cwd(), 'assets/'),
        config:        path.join(process.cwd(), 'config/'),
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
