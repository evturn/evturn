'use strict';
var browserSync,
    webpack,
    webpackDevMiddleware,
    webpackHotMiddleware,
    webpackConfig,
    bundler;

browserSync = require('browser-sync');
webpack = require('webpack');
webpackDevMiddleware = require('webpack-dev-middleware');
webpackHotMiddleware = require('webpack-hot-middleware');
webpackConfig = require('./webpack.config.browsersync');
bundler = webpack(webpackConfig);

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