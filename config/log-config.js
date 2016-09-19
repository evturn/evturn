const fs = require('fs')
const util = require('util')
const c = require('chalk')
const compose = (f, g) => x => f(g(x))

module.exports = compiler => {
  const data = {
    options: util.inspect(compiler.options, { depth: null, breakLength: 80 }),
    outputPath: `\n{ outputPath: '${compiler.outputPath}' }`,
  }

  const writeLog = writeFile(handler(appendFile(data)))
  writeLog(data)
}

function handler(fn) {
  return err => {
    if (err) { console.log(c.bgRed(err)) }
    else {
      console.log(c.bgBlue('Writing...'))
      return fn()
    }
  }
}

function writeFile(fn) {
  return data => {
    fs.writeFile('build/config.log.js', data.options, 'utf8', fn)
  }
}

function appendFile(data) {
  return _ => {
    fs.appendFile('build/config.log.js', data.outputPath, err => {
      if (err) {
        console.log(c.bgRed(err))
      } else {
        console.log(c.bgBlue('Cool Boanz Jr.'))
      }
    })
  }
}
