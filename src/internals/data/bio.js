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

export default {
  copy: `As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.`,
  tools: technologies.reduce((acc, x) => {
    return devicons
      .filter(y => x === y.slug)
      .concat(acc)
  }, []),
}
