const express = require('express');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.dev.js');

const PORT = 3000;
const HOST = process.env.HOST || '127.0.0.1';
const ENV = process.env.NODE_ENV;
const STATIC = path.join(__dirname, '..', '..');

const app = express();

app.use(express.static(STATIC));

if (ENV === 'development') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', function(req, res) {
  res.status(200).sendFile( path.join( __dirname, '..', '..', 'dist', 'index.html' ));
});

app.listen(PORT, () => {
  console.log(`\x1b[44m%s\x1b[0m`,`🌐`, ` NODE_ENV: ${ENV}`);
  console.log(`\x1b[44m%s\x1b[0m`, `💻`, ` PORT: ${PORT}`);
});