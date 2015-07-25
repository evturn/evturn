var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe($.plumber(options.plumber))
    .pipe($.sass())
    .pipe($.rename(paths.scss.filename))
    .pipe(gulp.dest(paths.scss.dest))
    .on('error', options.plumber.errorHandler)
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.cssmin())
    .pipe($.rename(paths.scss.min))
    .pipe(gulp.dest(paths.scss.dest))
    .on('error', options.plumber.errorHandler);
});