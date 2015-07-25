var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe($.plumber(options.plumber))
    .pipe($.jshint())
    .pipe($.notify(options.notify.jshint));
});