var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe($.imagemin(options.imagemin))
  .pipe(gulp.dest(paths.img.dest));
});