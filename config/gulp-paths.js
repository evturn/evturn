'use strict';
module.exports = {

  dest: {
    css: 'public/dist/css',
    js: 'public/dist/js',
    img: {
      apps: 'public/dist/img/apps',
      site: 'public/dist/img/site'
    }
  },
  less: {
    src: 'public/build/less/*.less',
    watch: 'public/build/less/**/*.less',
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
      'public/build/js/**/*.js',
      '!public/build/js/web_modules/**/*.js',
      'public/build/js/views/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  },
  img: {
    apps: {
      src: 'public/build/img/apps/**/*'
    },
    site: {
      src: 'public/build/img/site/**/*'
    }
  }
};