module.exports = {

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
      'assets/js/models/ev.js',
      'assets/js/evturn/helpers.js',
      'assets/js/evturn/data.js',
      'assets/js/evturn/animations.js',
      'assets/js/evturn/init.js',
      'assets/js/views/**/*.js',
      'assets/js/router.js',
      'assets/js/main.js'
    ],
    watch: [
      'assets/js/models/ev.js',
      'assets/js/evturn/**/*.js',
      'assets/js/views/**/*.js',
      'assets/js/router.js',
      'assets/js/main.js'
    ],
    dest: 'dist/js',
    filename: 'scripts.js',
    min: 'scripts.min.js',
    vendor: {
      src: [
        'assets/js/lib/jquery.js',
        'assets/js/lib/underscore.js',
        'assets/js/lib/backbone.js',
        'assets/js/lib/bootstrap.js'
      ],
      watch: 'assets/js/lib/**/*.js',
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
      '!assets/js/lib/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ],
    watch: [
      'assets/js/**/*.js',
      '!assets/js/lib/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  }

};