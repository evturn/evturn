import devicons from './devicons'

const technologies = [
  'less',
  'photoshop',
  'ubuntu',
  'git',
  'mongodb',
  'gulp',
  'redux',
  'webpack',
  'rxjs',
  'swift',
  'javascript',
  'react',
  'node',
]

function assembleBio() {

  function reducer(acc, x) {
    return devicons
      .filter(y => x === y.slug)
      .concat(acc)
  }

  return {
    copy: `As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.`,
    tools: technologies.reduce(reducer, []),
  }
}

export default assembleBio()
