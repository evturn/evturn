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

var js = [
    './assets/js/**/*.js',
    './gulpfile.js'
];

var vendorJS = [
  './vendor/js/jquery.js',
  './vendor/js/underscore.js',
  './vendor/js/backbone.js',
  './vendor/js/bootstrap.js',
  './vendor/js/wow.js'
];

var vendorCSS = [
  './vendor/css/bootstrap.css',
  './vendor/css/animate.css',
  './vendor/css/font-awesome.comp.css',
  './vendor/css/devicon.comp.css'
];

gulp.task('default', ['watch', 'compileSass', 'lint']);

gulp.task('compileSass', function() {
  return gulp.src('./assets/css/scss/**/*.scss')
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest('./assets/css'))
    .pipe(size())
    .pipe(notify('SCSS compilled'))
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  gulp.src('./assets/js/**/*.js')
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

gulp.task('compressJS', function() {
  return gulp.src(vendorJS)
    .pipe(concat('vendor.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(size())
    .pipe(notify('vendor.js compressed'))
    .on('error', gutil.log);
});

gulp.task('compressData', function() {
  return gulp.src('./assets/js/data/**/*.js')
    .pipe(concat('data.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(size())
    .pipe(notify('data.js compressed'))
    .on('error', gutil.log);
});

gulp.task('compressCSS', function() {
  return gulp.src(vendorCSS)
    .pipe(concat('vendor.css'))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest('./build'))
    .pipe(size())
    .pipe(notify('vendor.css compressed'))
    .on('error', gutil.log);
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/scss/**/*.scss', ['compileSass']);
  gulp.watch(js, ['lint']);
  gulp.watch('./assets/js/data/**/*.js', ['compressData']);
});