import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.mjs';

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, () => console.log('Running.'))
