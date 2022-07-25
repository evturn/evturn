import chalk from 'chalk';
import { format } from 'date-fns';
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles';
import { choosePort, prepareProxy, prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import openBrowser from 'react-dev-utils/openBrowser';
import { checkBrowsers } from 'react-dev-utils/browsersHelper';
import FileSizeReporter from 'react-dev-utils/FileSizeReporter';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import { StatsError } from 'webpack';
import printBuildError from './utils/print-build-error';

const compileScreen = `
                  ------888
                    ----888
                      --888
 ---.d88b.  -888  888   888888   888 -888   888d888 88888b.
  -d8P  Y8b  888  888   888    --888  888   888P"   888 "88b
---88888888  Y88  88P   888  ----888  888   888  ---888  888
  -Y8b.    ---Y8bd8P    Y88b.    Y88b 888   888    -888  888
 ---"Y8888   --Y88P    --"Y888    Y88888    888  ---888  888
                   --------"Y888        ----888 ----888  888
                                                  -------888
`;

const printFinalFileSize = (stats, previousFileSizes, buildPath) => {
  const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
  const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

  console.log('File sizes after gzip:\n');

  FileSizeReporter.printFileSizesAfterBuild(
    stats,
    previousFileSizes,
    buildPath,
    WARN_AFTER_BUNDLE_GZIP_SIZE,
    WARN_AFTER_CHUNK_GZIP_SIZE,
  );

  console.log();
};

export default {
  get timestamp() {
    return chalk.white(`[${format(new Date(), 'h:mm:ss a')}]`);
  },
  checkBrowsers,
  checkRequiredFiles,
  choosePort,
  clear: () => process.stdout.write('\x1B[2J\x1B[3J\x1B[H'),
  compileScreen,
  isInteractive: process.stdout.isTTY,
  openBrowser,
  prepareProxy,
  prepareUrls,
  reporter: {
    measureInitialFileSize: FileSizeReporter.measureFileSizesBeforeBuild,
    printBuildError,
    printFinalFileSize,
    printWebpackMessages: formatWebpackMessages as (json: WebpackMessagesParams) => WebpackMessages,
  },
};

type WebpackMessages = {
  errors:   string[];
  warnings: string[];
};

type WebpackMessagesParams = {
  errors?:   string[] | StatsError[] | undefined;
  warnings?: string[] | StatsError[] | undefined;
};