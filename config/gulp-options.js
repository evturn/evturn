/*
gulp-sass
gulp-imagemin
gulp-autoprefixer
gulp-plumbler
gulp-notify
*/
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')();

module.exports = {
  sass: {
    sourceComments: 'map',
    sourceMap: 'sass',
    outputStyle: 'nested'
  },
  imagemin: {
    progressive: true
  },
  browserSync: {
    server: {
      baseDir: './'
    }
  },
  autoprefixer: {
    browsers: [
      '> 1%',
      'last 2 versions',
      'firefox >= 4',
      'safari 7',
      'safari 8',
      'IE 8',
      'IE 9',
      'IE 10',
      'IE 11'
    ],
    cascade: false
  },
  plumber: {
    errorHandler: function(err) {
      gutil.beep();
      console.log(err);
      $.notify(err);
      this.emit('end');
    }
  },
  notify: {
    jshint: function(file) {
      if (file.jshint.success) {
        return false;
      }
      var errors = file.jshint.results.map(function(data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }
  }
};