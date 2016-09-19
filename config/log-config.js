const fs = require('fs')
const util = require('util')
const c = require('chalk')
const compose = (f, g) => x => f(g(x))

module.exports = data => {
  const createLog = writeFile(handler(compose(appendFile(data), _ => handler())))
  createLog(data)
}

function handler(fn) {
  return err => {
    if (err) { console.log(c.bgRed(util.inspect(err))) }
    else if (typeof fn === 'function') { fn() }
    else { console.log(c.bgBlue('File created.')) }
  }
}

function writeFile(fn) {
  return data => fs.writeFile('build/config.log.js', data.options, 'utf8', fn)

}

function appendFile(data) {
  return fn => fs.appendFile('build/config.log.js', data.output, fn)
}
