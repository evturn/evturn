import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import webpack from 'webpack'
import devMiddleware from './dev-middleware'
import hotMiddleware from './hot-middleware'
import webpackConfig from '../webpack.config.js'

const compiler = webpack(webpackConfig)

const app = new Koa()

app.use(devMiddleware(compiler))
app.use(hotMiddleware(compiler))
app.use(ctx => {
  const filepath = path.join(compiler.outputPath, 'index.html')
  ctx.body = fs.readFileSync(filepath).toString()
})

app.listen(3000, _ => console.log([
  `\x1b[35m ${'-'.repeat(38)} \x1b[0m`,
  `${' '.repeat(10)} \x1b[32m Up & Running  🌐 \x1b[0m`,
  `\x1b[35m ${'-'.repeat(38)} \x1b[0m`,
  ].join('\n'))
)
