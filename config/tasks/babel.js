var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('babel', function () {
  return gulp.src(paths.js.src)
    .pipe($.plumber(options.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .on('error', options.plumber.errorHandler)
    .pipe($.concat(paths.babel.filename))
    .pipe(gulp.dest(paths.js.dest))
    .pipe($.uglify(paths.js.src))
    .pipe($.rename(paths.babel.min))
    .pipe(gulp.dest(paths.js.dest))
    .pipe($.sourcemaps.write('.'))
    .on('error', gutil.log);
});