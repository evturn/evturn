import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.base.babel.js'

const compiler = webpack(webpackConfig)
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only',
})

const app = express()

app.use(webpackHotMiddleware(compiler))
app.use(middleware)

const fs = middleware.fileSystem

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(file.toString())
    }
  })
})

app.listen(3000, _ => console.log('Up & Running 🌐'))
