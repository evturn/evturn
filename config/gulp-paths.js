module.exports = {

  dest: {
    css: 'public/dist/css',
    js: 'public/dist/js',
    img: 'public/dist/img'
  },
  less: {
    src: 'public/build/less/*.less',
    watch: 'public/build/less/**/*.less',
    filename: 'style.css',
    min: 'style.min.css'
  },
  eslint: {
    src: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ],
    watch: [
      'public/build/js/EVTURN.js',
      'public/build/js/data.js',
      'public/build/js/templates.js',
      'public/build/js/views/**/*.js',
      'public/build/js/router.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  },
  js: {
    src: [
      'public/build/js/EVTURN.js',
      'public/build/js/data.js',
      'public/build/js/templates.js',
      'public/build/js/views/**/*.js',
      'public/build/js/router.js'
    ],
    watch: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js'
    ],
    filename: 'scripts.js',
    min: 'scripts.min.js',
    vendor: {
      src: [
        'public/build/js/vendor/jquery.js',
        'public/build/js/vendor/underscore.js',
        'public/build/js/vendor/backbone.js',
        'public/build/js/vendor/bootstrap.js'
      ],
      watch: 'public/build/js/vendor/**/*.js',
      filename: 'vendor.js',
      min: 'vendor.min.js'
    }
  },
  img: {
    src: 'public/build/img/**/*'
  },
  jshint: {
    src: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ],
    watch: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  }
};