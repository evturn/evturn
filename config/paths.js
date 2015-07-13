module.exports = {
  scss: {
    src: 'assets/scss/**/*.scss',
    watch: 'assets/scss/**/*.scss',
    dest: 'dist/css',
    filename: 'scss.css',
    min: 'scss.min.css'
  },
  js: {
    src: [
      'assets/js/models/ev.js',
      'assets/js/evturn/data.js',
      'assets/js/evturn/helpers.js',
      'assets/js/evturn/animations.js',
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
        'assets/js/lib/bootstrap.js',
        'assets/js/lib/wow.js'
      ],
      dest: 'dist/js',
      filename: 'vendor.js'
    }
  },
  css: {
    vendor: {
      src: [
        'assets/css/lib/bootstrap.css',
        'assets/css/lib/animate.css',
        'assets/css/lib/font-awesome.css',
        'assets/css/lib/devicon.css'
      ],
      dest: 'dist/css',
      filename: 'vendor.css'
    }
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