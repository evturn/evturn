'use strict';

let webpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    webpack = require('webpack'),
    path = require('path');

let compiler = webpack(config);
let server = new webpackDevServer(compiler, {
    contentBase: './',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: { colors: true }
});
server.listen(3000);