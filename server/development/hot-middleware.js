import { PassThrough } from 'stream'
import webpackHotMiddleware from 'webpack-hot-middleware'

export default compiler => {
  const expressHot = webpackHotMiddleware(compiler)

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