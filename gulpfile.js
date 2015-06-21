var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    size = require('gulp-filesize');

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
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .on('error', gutil.log);
});

gulp.task('compressJS', function() {
  return gulp.src(vendorJS)
    .pipe(concat('vendor.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('compressData', function() {
  return gulp.src('./assets/js/data/**/*.js')
    .pipe(concat('data.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('compressCSS', function() {
  return gulp.src(vendorCSS)
    .pipe(concat('vendor.css'))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest('./build'))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/scss/**/*.scss', ['compileSass']);
  gulp.watch(js, ['lint']);
  gulp.watch('./assets/js/data/**/*.js', ['compressData']);
});