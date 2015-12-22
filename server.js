'use strict';
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.browsersync');
const bundler = webpack(webpackConfig);

browserSync({
  ui: false,
  ghostMode: false,
  online: false,
  open: false,
  notify: false,
  host: webpackConfig.devServer.host,
  port: webpackConfig.devServer.port,
  xip: false,
  tunnel: true,
  server: {
    baseDir: webpackConfig.devServer.contentBase,
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: false,
        quiet: false,
        stats: {
            colors: true
        }
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    './dist/static/*.css'
  ]
});