var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var paths = require('./config/paths');
var options = require('./config/gulp-options');

gulp.task('default', ['scss', 'lint', 'watch', 'browsersync']);

gulp.task('watch', function() {
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.scss.watch, ['scss', 'reloader']);
  gulp.watch(paths.js.watch, ['js', 'reloader']);
  gulp.watch(paths.js.vendor.watch, ['jslib']);
  gulp.watch(paths.css.vendor.watch, ['css']);
});

gulp.task('build', ['scss', 'css', 'less', 'js', 'jslib', 'img']);

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe($.plumber(options.plumber))
    .pipe($.sass())
    .pipe($.rename(paths.scss.filename))
    .pipe(gulp.dest(paths.scss.dest))
    .on('error', options.plumber.errorHandler);
});

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe($.plumber(options.plumber))
    .pipe($.less())
    .pipe($.rename(paths.less.filename))
    .on('error', options.plumber.errorHandler)
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.cssmin())
    .pipe(gulp.dest(paths.less.dest)).on('error', gutil.log);
});

gulp.task('jslib', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.vendor.filename))
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
    .pipe($.cssmin())
    .pipe(gulp.dest(paths.css.vendor.dest));
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

gulp.task('reloader', ['scss', 'js'], function() {
  browserSync.reload();
});

gulp.task('browsersync', function() {
    browserSync.init({
      server: {
        baseDir: './'
      }
    });
    gulp.watch('index.html').on('change', browserSync.reload);
});