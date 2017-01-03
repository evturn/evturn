import path from 'path'
import fs from 'fs'
import { PassThrough } from 'stream'
import Koa from 'koa'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack2.config.js'

const compiler = webpack(webpackConfig)
const devMiddleware = koaDevMiddleware(compiler, {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only',
})
const hotMiddleware = koaHotMiddleware(compiler)
const app = new Koa()

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(ctx => {
  const filepath = path.join(compiler.outputPath, 'index.html')
  ctx.body = fs.readFileSync(filepath).toString()
})

app.listen(3000, _ => console.log('Up & Running 🌐'))

function koaDevMiddleware(compiler, opts={}) {
  const expressDev = webpackDevMiddleware(compiler, opts)

  const waitUntilValid = _ => {
    return new Promise((resolve, reject) =>
      expressDev.waitUntilValid(resolve))
  }

  return async function koaDev(ctx, next) {
    await waitUntilValid()
    await expressDev(ctx.req, {
      end: x => ctx.body = x,
      setHeader: ctx.set.bind(ctx)
    }, next)
  }
}

function koaHotMiddleware(compiler, opts={}) {
  const expressHot = webpackHotMiddleware(compiler, opts)

  return async (ctx, next) => {
    const transform = new PassThrough()
    ctx.body = transform

    await expressHot(ctx.req, {
      write: transform.write.bind(transform),
      writeHead: (state, headers) => {
        ctx.state = state
        ctx.set(headers)
      }
    }, next)
  }
}