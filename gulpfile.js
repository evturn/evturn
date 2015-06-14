var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass');

var js = [
    './assets/js/**/*.js',
    './gulpfile.js'
];

gulp.task('default', ['watch', 'sass']);

gulp.task('sass', function() {
  return gulp.src('./assets/css/scss/**/*.scss')
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('jshint', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/scss/**/*.scss', ['sass']);
  gulp.watch(js, ['jshint']);
});