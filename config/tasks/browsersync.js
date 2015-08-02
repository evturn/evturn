var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('browsersync', function() {
  browserSync.init(options.browserSync);
});

gulp.task('babel:watch', ['babel', 'js'], function() {
  browserSync.reload();
});

gulp.task('less:watch', ['less'], function() {
  browserSync.reload();
});