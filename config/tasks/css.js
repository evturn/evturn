var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('css', function() {
  return gulp.src(paths.css.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.vendor.filename))
    .pipe(gulp.dest(paths.css.dest))
    .pipe($.cssmin())
    .pipe($.rename(paths.css.vendor.min))
    .pipe(gulp.dest(paths.css.dest));
});