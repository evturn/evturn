var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    size = require('gulp-filesize'),
    notify = require('gulp-notify');

var js = require('./build/config').js;
var css = require('./build/config').css;
var scss = require('./build/config').scss;


gulp.task('default', ['watch', 'scss', 'lint']);

gulp.task('scss', function() {
  return gulp.src(scss.build)
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest(scss.dest))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  gulp.src(js.build)
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

gulp.task('uglify-vendor', function() {
  return gulp.src(js.vendor)
    .pipe(concat('vendor.min.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest(js.dest))
    .pipe(size())
    .pipe(notify('vendor.min.js created'))
    .on('error', gutil.log);
});

gulp.task('uglify-data', function() {
  return gulp.src(js.vdb)
    .pipe(concat('data.min.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest(js.dest))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('minifyCSS-vendor', function() {
  return gulp.src(css.vendor)
    .pipe(concat('vendor.min.css'))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest(css.dest))
    .pipe(size())
    .pipe(notify('vendor.min.css created'));
});

gulp.task('minifyCSS-build', function() {
  return gulp.src(css.build)
    .pipe(concat('style.min.css'))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest(js.dest))
    .pipe(size())
    .pipe(notify('style.min.css created'));
});

gulp.task('watch', function() {
  gulp.watch(js.build, ['lint']);
  gulp.watch(scss.build, ['scss']);
  gulp.watch(js.vdb, ['uglify-data']);
});