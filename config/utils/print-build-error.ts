import chalk from 'chalk';

export default function printBuildError(e) {
  const message = e != null && e.message;
  const stack = e != null && e.stack;

  if (stack && typeof message === 'string' && message.indexOf('from Terser') !== -1) {
    try {
      const matched = /(.+)\[(.+):(.+),(.+)\]\[.+\]/.exec(stack);
      if (!matched) {
        throw new Error('Using errors for control flow is bad.');
      }
      const problemPath = matched[2];
      const line = matched[3];
      const column = matched[4];
      console.log('Failed to minify the code from this file: \n\n', chalk.yellow(`\t${problemPath}:${line}${column !== '0' ? ':' + column : ''}`), '\n');
    } catch (ignored) {
      console.log('Failed to minify the bundle.', e);
    }
  } else {
    console.log((message || e) + '\n');
  }
  console.log();
};