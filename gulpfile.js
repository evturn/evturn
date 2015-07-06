var gulp = require('gulp'),
    gutil = require('gulp-util'),
    G = require('gulp-load-plugins')();

var paths = require('./config/paths');
var options = require('./config/gulp-options');

gulp.task('default', ['scss', 'lint', 'watch']);

gulp.task('watch', function() {
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.scss.watch, ['scss']);
  gulp.watch(paths.js.watch, ['js']);
});

gulp.task('build', ['scss', 'css', 'js', 'jslib', 'img']);

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe(G.plumber(options.plumber))
    .pipe(G.sass())
    .pipe(G.rename(paths.scss.filename))
    .pipe(gulp.dest(paths.scss.dest)).on('error', options.plumber.errorHandler);
});

gulp.task('jslib', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe(G.plumber(options.plumber))
    .pipe(G.concat(paths.js.vendor.filename))
    .pipe(G.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .on('error', gutil.log);
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe(G.plumber(options.plumber))
    .pipe(G.concat(paths.js.filename))
    .pipe(gulp.dest(paths.js.dest))
    .on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.vendor.src)
    .pipe(G.plumber(options.plumber))
    .pipe(G.concat(paths.css.vendor.filename))
    .pipe(G.minify-css())
    .pipe(gulp.dest(paths.css.vendor.dest));
});

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe(G.imagemin(options.imagemin))
  .pipe(gulp.dest(paths.img.dest));
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe(G.plumber(options.plumber))
    .pipe(G.jshint())
    .pipe(G.notify(options.notify.jshint));
});