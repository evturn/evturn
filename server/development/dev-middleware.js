import webpackDevMiddleware from 'webpack-dev-middleware'

const options = {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only',
}

export default compiler => {
  const expressDev = webpackDevMiddleware(compiler, options)

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