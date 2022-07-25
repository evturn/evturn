process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

import env from '../config/env';

import chalk from 'react-dev-utils/chalk';
import fs from 'fs-extra';
import bfj from 'bfj';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.config.prod';
import paths from '../config/paths';
import confutils from '../config/utils';

const {
  checkBrowsers,
  checkRequiredFiles,
  reporter,
} = confutils;

const isInteractive = process.stdout.isTTY;

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const argv = process.argv.slice(2);
const writeStatsJson = argv.indexOf('--stats') !== -1;

checkBrowsers(paths.appPath, isInteractive)
  .then(() => {
    /**
     * First, read the current file sizes in build directory.
     * Will then display how much changed later.
     * */
    return reporter.measureInitialFileSize(paths.appBuild);
  })
  .then((previousFileSizes: PreviousFileSizes) => {
    /**
     * Remove all content but keep the directory so that
     * if you're in it, you don't end up in Trash
     */
    fs.emptyDirSync(paths.appBuild);
    /* Merge with the public folder */
    copyPublicFolder();
    /* Start the webpack build */
    return build(previousFileSizes);
  })
  .then(({ stats, previousFileSizes, warnings }: ResolveArgs) => {
    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      console.log(warnings.join('\n\n'));
    } else {
      console.log(chalk.green('Compiled successfully.\n'));
    }

    console.log('File sizes after gzip:\n');
    reporter.printFinalFileSize(
      stats,
      previousFileSizes,
      paths.appBuild,
    );
    console.log();
  }, err => {
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';

    if (tscCompileOnError) {
      console.log(chalk.yellow('Compiled with the following type errors (you may want to check these before deploying your app):\n'));
      reporter.printBuildError(err);
    } else {
      console.log(chalk.red('Failed to compile.\n'));
      reporter.printBuildError(err);
      process.exit(1);
    }
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });

function build(previousFileSizes: PreviousFileSizes) {
  console.log(`Creating production build...`);

  const compiler = webpack(webpackConfig);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      const messages = {
        errors: [],
        warnings: [],
      };

      if (err) {
        if (!err.message) {
          return reject(err);
        }

        const existingerror = {
          message: err.message,
        };

        /**
         * Add additional information for postcss errors
         */
        if (Object.prototype.hasOwnProperty.call(err, 'postcssNode')) {
          Object.assign(existingerror, {
            message: `${err.message}\nCompileError: Begins at CSS selector ${err['postcssNode'].selector}`,
          });
        }

        const logging = reporter.printWebpackMessages({
          errors: [existingerror.message],
          warnings: [],
        });

        Object.assign(messages, logging);

      } else if (stats) {

        const logging = reporter.printWebpackMessages(stats.toJson({
          all: false,
          warnings: true,
          errors: true,
        }));

        Object.assign(messages, logging);
      }

      if (messages.errors.length) {
        /**
         * Only keep the first error. Others are often indicative
         * of the same problem, but confuse the reader with noise.
         */
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (process.env.CI
        && (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false')
        && messages.warnings.length) {
        /**
         * Ignore sourcemap warnings in CI builds.
         */
        const filteredWarnings = messages.warnings.filter(w => !/Failed to parse source map/.test(w));

        if (filteredWarnings.length) {
          console.log(chalk.yellow(`\nTreating warnings as errors because process.env.CI = true.\nMost CI servers set it automatically.\n`));

          return reject(new Error(filteredWarnings.join('\n\n')));
        }
      }

      const resolveArgs = {
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      };

      if (writeStatsJson && stats) {
        return bfj
          /* @ts-ignore */
          .write(`${paths.appBuild}/bundle-stats.json`, stats.toJson())
          .then(() => resolve(resolveArgs))
          .catch(error => reject(new Error(error)));
      }

      return resolve(resolveArgs);
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

type ResolveArgs = {
  stats:             webpack.Stats;
  previousFileSizes: PreviousFileSizes;
} & Pick<Messages, 'warnings'>;

type PreviousFileSizes = {
  root: string;
  sizes: {
    [key: string]: number;
  };
};

type Messages = {
  errors:   string[];
  warnings: string[];
};