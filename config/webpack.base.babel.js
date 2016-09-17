const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const values = require('postcss-modules-values')

module.exports = opts => {
  return {
    entry: opts.entry,
    plugins: opts.plugins,
    target: 'web',
    stats: false,
    progress: true,
    devtool: opts.devtool,
    cache: opts.cache,
    debug: opts.debug,
    output: opts.output,
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

    postcss:  _ => ([
      values,
      postcssFocus(),
      cssnext({ browsers: [ 'last 2 versions', 'IE > 10' ] }),
      postcssReporter({ clearMessages: true })
    ])
  }
}
