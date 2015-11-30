"use strict";
const gulp = require('gulp');
const gutil = require('gulp-util');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create('ev-dev');
const runSequence = require('run-sequence');
const config = require('./public/gulp.config');
const opts = config.opts;
const paths = config.paths;

 /**
 *
 * default
 *
 */

gulp.task('default', ['browserSync:init', 'webpack:watch', 'watch']);

 /**
 *
 * watch
 *
 */

gulp.task('watch', () => {
  gulp.watch(paths.less.watch, ['run:less']);
  gulp.watch(paths.eslint.src, ['eslint']);
  gulp.watch(paths.js.src, ['browser:reload']);
  gulp.watch(paths.views.src, ['browser:reload']);
});

 /**
 *
 * $ webpack --watch
 *
 */

gulp.task('webpack:watch',  $.shell.task('webpack --watch &'));

 /**
 *
 * BrowserSync
 *
 */

gulp.task('browserSync:init', () => {
  browserSync.init(opts.browserSync);
});

gulp.task('browser:reload', () => {
  browserSync.reload();
});

 /**
 *
 * LESS
 *
 */

gulp.task('run:less', (done) => {
  runSequence('less', 'browser:reload', () => {
    done();
  });
});

gulp.task('less', () => {
  return gulp.src(paths.less.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.less())
    .pipe($.rename(paths.less.filename))
    .pipe(gulp.dest(paths.dest.css))
    .on('error', opts.plumber.errorHandler)
    .pipe($.autoprefixer(opts.autoprefixer))
    .pipe($.cssmin())
    .pipe($.rename(paths.less.min))
    .pipe(gulp.dest(paths.dest.css)).on('error', gutil.log);
});

 /**
 *
 * ESLint
 *
 */

gulp.task('eslint', () => {
  return gulp.src(paths.eslint.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.eslint())
    .on('error', opts.plumber.errorHandler)
    .pipe($.eslint.format('stylish'))
    .pipe($.notify(opts.notify.eslint));
});

 /**
 *
 * Imagemin
 *
 */

gulp.task('img', ['img:site', 'img:apps']);

gulp.task('img:site', () => {
  return gulp.src(paths.img.site.src)
  .pipe($.imagemin(opts.imagemin))
  .pipe(gulp.dest(paths.dest.img.site));
});

gulp.task('img:apps', () => {
  return gulp.src(paths.img.apps.src)
  .pipe($.imagemin(opts.imagemin))
  .pipe(gulp.dest(paths.dest.img.apps));
});