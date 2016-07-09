const fs = require('fs')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.dev.babel.js')

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

app.use(express.static(path.join(__dirname, '..')))

app.get('*', (req, res, next) => {
  res.send('index.html')
})

app.listen(3000, _ => console.log('Up & Running 🌐'))
