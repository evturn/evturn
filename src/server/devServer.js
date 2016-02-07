require('babel-core/register')({});
const express = require('express');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');
const compiler = webpack(config);

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), {
 encoding: 'utf-8'
});

const app = express();

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '..')));

const str = index;

app.get('*', function(req, res) {
 res.status(200).send(str);
});

app.listen(3000);