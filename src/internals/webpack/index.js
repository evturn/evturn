const __DEV__ = process.env.NODE_ENV === 'development'

require('babel-register')({});

if (__DEV__) {
  require('./dev-server')
}