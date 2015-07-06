var gulp = require('gulp'),
    gutil = require('gulp-util'),
    G = require('gulp-load-plugins')(),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    size = require('gulp-filesize'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');

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
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('jslib', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe(concat(paths.js.vendor.filename))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe(concat(paths.js.filename))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.vendor.src)
    .pipe(concat(paths.css.vendor.filename))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.css.vendor.dest))
    .pipe(size())
    .pipe(notify('vendor.min.css created'));
});

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe(imagemin({ progressive: true }))
  .pipe(gulp.dest(paths.img.dest));
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe(jshint())
    .pipe(notify(function(file) {
      if (file.jshint.success) {
        return false;
      }
      var errors = file.jshint.results.map(function(data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});