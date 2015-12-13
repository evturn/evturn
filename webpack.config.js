'use strict';
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'dist', 'test'];

let env;

if (args._.length > 0 && args._.indexOf('start') !== -1) { env = 'test'; }
else if (args.env) { env = args.env; }
else { env = 'dev'; }

process.env.REACT_WEBPACK_ENV = env;

const configs = {
  base: require(path.join(__dirname, 'cfg/base')),
  dev:  require(path.join(__dirname, 'cfg/dev')),
  dist: require(path.join(__dirname, 'cfg/dist')),
  test: require(path.join(__dirname, 'cfg/test'))
};

function getValidEnv(env) {
  const isValid = env && env.length > 0 && allowedEnvs.indexOf(env) !== -1;
  return isValid ? env : 'dev';
}

function buildConfig(env) {
  const usedEnv = getValidEnv(env);
  return configs[usedEnv];
}

module.exports = buildConfig(env);
