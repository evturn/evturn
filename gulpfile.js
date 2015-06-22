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



var vendorCSS = [
  './vendor/css/bootstrap.css',
  './vendor/css/animate.css',
  './vendor/css/font-awesome.comp.css',
  './vendor/css/devicon.comp.css'
];

gulp.task('default', ['watch', 'scss', 'lint']);

gulp.task('scss', function() {
  return gulp.src('assets/css/scss/**/*.scss')
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest('assets/css'))
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

gulp.task('uglifyJS-vendor', function() {
  return gulp.src(js.vendor)
    .pipe(concat('vendor.min.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(size())
    .pipe(notify('vendor.min.js created'))
    .on('error', gutil.log);
});

gulp.task('uglifyJS-data', function() {
  return gulp.src('assets/js/data/**/*.js')
    .pipe(concat('data.min.js'))
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(size())
    .on('error', gutil.log);
});

gulp.task('minifyCSS-vendor', function() {
  return gulp.src('vendor/css/**/*.css')
    .pipe(concat('vendor.min.css'))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'))
    .pipe(size())
    .pipe(notify('vendor/css minification complete'));
});

gulp.task('minifyCSS-assets', function() {
  return gulp.src('assets/css/**/*.css')
    .pipe(concat('assets.min.css'))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'))
    .pipe(size())
    .pipe(notify('assets/css minification complete'));
});

gulp.task('watch', function() {
  gulp.watch(js.build, ['lint']);
  gulp.watch('assets/css/scss/**/*.scss', ['scss']);
  gulp.watch('assets/js/data/**/*.js', ['uglifyJS-data']);
});