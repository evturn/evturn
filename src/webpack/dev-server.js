import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './dev'

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static(path.join(__dirname, '..', '..')))

app.get('*', (req, res, next) => {
  res.send('index.html')
})

app.listen(3000, _ => console.log('Supperz'))