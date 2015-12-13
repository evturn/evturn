'use strict';
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

exports.errorHandler = function errorHandler(err) {
  util.beep();
  console.log(err);
  $.notify(err);
  this.emit('end');
}

exports.notifer = function notifier(file) {
  if (file.eslint.errorCount === 0) { return; }

  const errors = file.eslint.messages.map((data) => {
    return `Line: ${data.line}:${data.column} |\n${data.message}`;
  });

  return `File: ${file.relative} (${file.eslint.errorCount} errors)\n${errors}\n`;
}
