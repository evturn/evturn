const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const publicPath = '/'
const outputPath = path.resolve(process.cwd(), 'build')

const app = express()

app.use('/', express.static(outputPath))
app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'index.html'))
})

app.listen(3000, require('../logger'))