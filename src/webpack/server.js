const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./dev.js');

config.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:3000/',
  'webpack/hot/dev-server'
);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, config.devServer);

server.listen(3000);