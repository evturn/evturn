import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.mjs';
import { pathTo  } from './utils.mjs';

const app        = express();
const compiler   = webpack(config);
const middleware = devMiddleware(compiler, {
  logLevel: 'error',
  publicPath: config.output.publicPath,
});

const outputPath = pathTo(compiler.outputPath, 'index.html');
const fs         = middleware.fileSystem;

app.use(middleware);
app.use(hotMiddleware(compiler));
app.get('*', (req, res) => res.send(fs.readFileSync(outputPath).toString()));
app.listen(3002, () => console.log('Running in development on 3002.'))
