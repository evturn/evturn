var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('./config/paths');
var options = require('./config/gulp-options');

gulp.task('default', ['less', 'lint', 'watch', 'browsersync']);

gulp.task('watch', function() {
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.scss.watch, ['scss', 'reloader']);
  gulp.watch(paths.less.watch, ['less', 'reloader']);
  gulp.watch(paths.js.watch, ['js', 'reloader']);
  gulp.watch(paths.js.vendor.watch, ['jslib']);
  gulp.watch(paths.css.vendor.watch, ['css']);
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('build', ['less', 'css', 'less', 'js', 'jslib', 'img']);

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

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe($.plumber(options.plumber))
    .pipe($.less())
    .pipe($.rename(paths.less.filename))
    .pipe(gulp.dest(paths.less.dest))
    .on('error', options.plumber.errorHandler)
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.cssmin())
    .pipe($.rename(paths.less.min))
    .pipe(gulp.dest(paths.less.dest)).on('error', gutil.log);
});

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

gulp.task('css', function() {
  return gulp.src(paths.css.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.vendor.filename))
    .pipe(gulp.dest(paths.css.dest))
    .pipe($.cssmin())
    .pipe($.rename(paths.css.vendor.min))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe($.imagemin(options.imagemin))
  .pipe(gulp.dest(paths.img.dest));
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe($.plumber(options.plumber))
    .pipe($.jshint())
    .pipe($.notify(options.notify.jshint));
});

gulp.task('reloader', ['less', 'js'], function() {
  browserSync.reload();
});

gulp.task('browsersync', function() {
  browserSync.init(options.browserSync);
});