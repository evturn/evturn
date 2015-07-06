module.exports = {
  js: {
    scss: {
      src: 'assets/scss/**/*.scss',
      watch: 'assets/scss/**/*.scss',
      dest: 'dist/css',
      filename: 'scss.css'
    },
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
    watch: {

    },
    dest: 'dist/js',
    filename: 'scripts.js',
    vendor: {
      src: [
        'vendor/js/jquery.js',
        'vendor/js/underscore.js',
        'vendor/js/backbone.js',
        'vendor/js/bootstrap.js',
        'vendor/js/wow.js'
      ],
      dest: 'dist/js',
      filename: 'vendor.js'
    }
  },
  css: {
    vendor: {
      src: [
        'vendor/css/bootstrap.css',
        'vendor/css/animate.css',
        'vendor/css/font-awesome.comp.css',
        'vendor/css/devicon.comp.css'
      ],
      dest: 'dist/css',
      filename: 'vendor.css'  
    }
  },
  img: {
    src: 'assets/img/**/*',
    dest: 'dist/img'
  }
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
  },
  
};