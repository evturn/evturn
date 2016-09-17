const fs = require('fs')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.dev.babel.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, '..')))

app.get('*', (req, res) => res.send('index.html'))

app.listen(3000, _ => console.log('Up & Running 🌐'))
