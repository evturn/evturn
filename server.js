'use strict';
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);

browserSync({
  ui: false,
  ghostMode: false,
  online: false,
  open: false,
  notify: false,
  host: '127.0.0.1',
  port: 8000,
  xip: false,
  tunnel: true,
  server: {
    baseDir: './',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: /dist/,
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
    './dist/*.css',
    './dist/*.js'
  ]
});