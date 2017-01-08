const print = [
  `\n\x1b[35m ${'-'.repeat(38)} \x1b[0m`,
  `${' '.repeat(10)} \x1b[32m Up & Running  🌐 \x1b[0m`,
  `\x1b[35m ${'-'.repeat(38)} \x1b[0m\n`,
]

module.exports = _ => console.log(print.join('\n'))
