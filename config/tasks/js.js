var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('jslib', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.vendor.min))
    .pipe($.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .on('error', gutil.log);
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.filename))
    .pipe(gulp.dest(paths.js.dest))
    .pipe($.uglify(paths.js.src))
    .pipe($.rename(paths.js.min))
    .pipe(gulp.dest(paths.js.dest))
    .on('error', gutil.log);
});