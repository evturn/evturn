import fs from 'fs';
import dotenvExpand from 'dotenv-expand';
import dotenv from 'dotenv';
import path from 'path';
import paths from './paths';

// Make sure that including paths.js after env.js will read .env variables.
// delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.'
  );
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  paths.dotenv,
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand.expand(
      dotenv.config({
        path: dotenvFile,
      })
    );
  }
});

const BUILD_ENV = process.env.BUILD_ENV || 'dev';
const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

function getClientEnvironment(publicUrl) {

  const raw = Object.keys(process.env)
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        __DEV__: BUILD_ENV === 'dev' ? true : undefined,
        MANIFEST_FILENAME: BUILD_ENV === 'dev' ? `shared/manifest` : 'manifest',
        NODE_ENV: process.env.NODE_ENV || 'development',
        BUILD_ENV,
        PUBLIC_URL: publicUrl,

        WDS_SOCKET_HOST: process.env.WEB_BASE_URL,
        WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
        WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,

        // Whether or not react-refresh is enabled.
        // It is defined here so it is available in the webpackHotDevClient.
        FAST_REFRESH: process.env.FAST_REFRESH !== 'false',
      }
    );

  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return { raw, stringified };
}

export default getClientEnvironment;
