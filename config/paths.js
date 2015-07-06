module.exports = {
  scss: {
    src: 'assets/scss/**/*.scss',
    watch: 'assets/scss/**/*.scss',
    dest: 'dist/css',
    filename: 'scss.css'
  },
  js: {
    src: [
      'assets/js/data/**/*.js',
      'assets/js/models/ev.js',
      'assets/js/ev.js',
      'assets/js/views/child-views/thumbnails.js',
      'assets/js/views/index.js',
      'assets/js/views/work.js',
      'assets/js/views/about.js',
      'assets/js/views/contact.js',
      'assets/js/views/wrapper.js',
      'assets/js/router.js',
      'assets/js/main.js'
    ],
    watch: [
      'assets/js/data/**/*.js',
      'assets/js/models/ev.js',
      'assets/js/ev.js',
      'assets/js/views/child-views/thumbnails.js',
      'assets/js/views/index.js',
      'assets/js/views/work.js',
      'assets/js/views/about.js',
      'assets/js/views/contact.js',
      'assets/js/views/wrapper.js',
      'assets/js/router.js',
      'assets/js/main.js'
    ],
    dest: 'dist/js',
    filename: 'scripts.js',
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
        'assets/css/lib/font-awesome.comp.css',
        'assets/css/lib/devicon.comp.css'
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