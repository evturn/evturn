const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const DashboardPlugin = require('webpack-dashboard/plugin')
const webpackConfig = require('./webpack.dev.babel.js')
const writeConfigLog = require('./log')

const app = express()
const compiler = webpack(webpackConfig)
compiler.apply(new DashboardPlugin())

const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only',
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(process.cwd(), '/')))
writeConfigLog(compiler)

app.get('*', (req, res) => res.send('index.html'))

app.listen(3000, _ => console.log('Up & Running 🌐'))
