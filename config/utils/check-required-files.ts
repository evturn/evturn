import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

function checkRequiredFiles(files) {
  let currentFilePath;
  try {
    files.forEach(filePath => {
      currentFilePath = filePath;
      fs.accessSync(filePath, fs.constants.F_OK);
    });
    return true;
  } catch (err) {
    const dirName = path.dirname(currentFilePath);
    const fileName = path.basename(currentFilePath);
    console.log(chalk.red('Could not find a required file.'));
    console.log(chalk.red('  Name: ') + chalk.cyan(fileName));
    console.log(chalk.red('  Searched in: ') + chalk.cyan(dirName));
    return false;
  }
}

export default checkRequiredFiles;