import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.mjs';

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(hotMiddleware(compiler));

app.listen(3000, () => console.log('Running.'))
