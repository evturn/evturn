var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

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

gulp.task('default', ['watch', 'sass', 'lint', 'compressJS']);

gulp.task('sass', function() {
  return gulp.src('./assets/css/scss/**/*.scss')
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('lint', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('compressJS', function() {
  return gulp.src(vendorJS)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./vendor'))
    .on('error', gutil.log);
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/scss/**/*.scss', ['sass']);
  gulp.watch(js, ['lint']);
});