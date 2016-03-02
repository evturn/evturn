import express from 'express';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.dev.js';

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
  res.status(200).sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\x1b[44m%s\x1b[0m`,`🌐`, ` NODE_ENV: ${ENV}`);
  console.log(`\x1b[44m%s\x1b[0m`, `💻`, ` PORT: ${PORT}`);
});