"use strict";
const gulp = require('gulp');
const gutil = require('gulp-util');
const $ = require('gulp-load-plugins')();

module.exports.paths = {
  dest: {
    css: 'public/dist/css',
    js: 'public/dist/js',
    img: {
      apps: 'public/dist/img/apps',
      site: 'public/dist/img/site'
    }
  },
  less: {
    src: 'public/less/*.less',
    watch: 'public/less/**/*.less',
    filename: 'style.css',
    min: 'style.min.css'
  },
  js: {
    src: 'public/dist/js/bundle.js'
  },
  views: {
    src: '*.html'
  },
  eslint: {
    src: [
      'public/js/**/*.js',
      '!public/js/web_modules/**/*.js',
      'public/js/views/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  },
  img: {
    apps: {
      src: 'public/img/apps/**/*'
    },
    site: {
      src: 'public/img/site/**/*'
    }
  }
};

module.exports.opts = {
  browserSync: {
    server: {
      baseDir: './'
    }
  },
  babel: {
    modules: 'common'
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
    eslint: (file) => {
      if (file.eslint.errorCount === 0) {
        return;
      }

      let errors = file.eslint.messages.map((data) => {
        let location = `Line: ${data.line}:${data.column} |\n${data.message}`;
        return location;
      });

      let message = `File: ${file.relative} (${file.eslint.errorCount} errors)\n${errors}\n`;
      return message;
    }
  },
  imagemin: {
    progressive: true
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
  }
};