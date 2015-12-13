'use strict';
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const __ = require('./cfg/gulp');

gulp.task('default', ['watch', 'lint']);

gulp.task('watch', () => {
  gulp.watch('src/js/**/*', ['lint']);
});

gulp.task('less', () => {
  return gulp.src('src/less/style.less')
    .pipe($.plumber(__.errorHandler))
    .pipe($.less())
    .pipe($.rename('style.css'))
    .pipe(gulp.dest('./'))
    .on('error', __.errorHandler);
});

gulp.task('lint', () => {
  return gulp.src(['!node_modules/**/*', 'src/js/**/*'])
    .pipe($.plumber(__.errorHandler))
    .pipe($.eslint())
    .on('error', __.errorHandler)
    .pipe($.eslint.format('stylish'))
    .pipe($.notify(__.notifier));
});