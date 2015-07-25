var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('reloader', function() {
  browserSync.reload();
});

gulp.task('browsersync', function() {
  browserSync.init(options.browserSync);
});