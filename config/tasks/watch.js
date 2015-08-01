var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('../paths');
var options = require('../gulp-options');

gulp.task('watch', function() {
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.less.watch, ['less:watch']);
  gulp.watch(paths.js.watch, ['babel:watch']);
  gulp.watch(paths.js.vendor.watch, ['jslib']);
  gulp.watch(paths.css.vendor.watch, ['css']);
  gulp.watch('index.html').on('change', browserSync.reload);
});