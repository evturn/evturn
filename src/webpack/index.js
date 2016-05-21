const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'
require('babel-register')({});

if (__DEV__) {
  require('./dev-server')
}

if (__PROD__) {
  require('./prod');
}