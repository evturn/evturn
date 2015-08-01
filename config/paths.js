module.exports = {

  babel: {
    filename: 'es6.js',
    min: 'es6.min.js',
    dest: 'dist/js'
  },

  scss: {
    src: 'assets/scss/**/*.scss',
    watch: 'assets/scss/**/*.scss',
    dest: 'dist/css',
    filename: 'scss.css',
    min: 'scss.min.css'
  },

  less: {
    src: 'assets/less/*.less',
    watch: 'assets/less/**/*.less',
    dest: 'dist/css',
    filename: 'less.css',
    min: 'less.min.css'
  },

  js: {
    src: [
      'assets/js/exports.js',
      'assets/js/EVTURN.js',
      'assets/js/models/evturn.js',
      'assets/js/data/**/*.js',
      'assets/js/views/**/*.js',
      'assets/js/router.js',
      'assets/js/main.js'
    ],
    watch: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js'
    ],
    dest: 'dist/js',
    filename: 'scripts.js',
    min: 'scripts.min.js',
    vendor: {
      src: [
        'assets/js/vendor/jquery.js',
        'assets/js/vendor/underscore.js',
        'assets/js/vendor/backbone.js',
        'assets/js/vendor/bootstrap.js'
      ],
      watch: 'assets/js/vendor/**/*.js',
      dest: 'dist/js',
      filename: 'vendor.js',
      min: 'vendor.min.js'
    }

  },

  css: {
    vendor: {
      src: [
        'assets/css/lib/animate.css',
        'assets/css/lib/font-awesome.css',
        'assets/css/lib/devicon.css',
        'assets/css/reset.css'
      ],
      watch: 'assets/css/**/*.css',
      filename: 'vendor.css',
      min: 'vendor.min.css'
    },
    dest: 'dist/css'
  },

  img: {
    src: 'assets/img/**/*',
    dest: 'dist/img'
  },

  jshint: {
    src: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ],
    watch: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  }

};