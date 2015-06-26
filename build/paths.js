module.exports = {
  js: {
    build: [
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
    dev: [
      'assets/js/**/*.js',
      'build/**/*.js',
      'gulpfile.js'
    ],
    vendor: [
      'vendor/js/jquery.js',
      'vendor/js/underscore.js',
      'vendor/js/backbone.js',
      'vendor/js/bootstrap.js',
      'vendor/js/wow.js'
    ],
    vdb: 'assets/js/data/**/*.js',
    dest: 'dist'
  },
  css: {
    build: 'assets/css/**/*.css',
    vendor: [
      'vendor/css/bootstrap.css',
      'vendor/css/animate.css',
      'vendor/css/font-awesome.comp.css',
      'vendor/css/devicon.comp.css'
    ],
    dest: 'dist'
  },
  scss: {
    build: 'assets/css/scss/**/*.scss',
    dest: 'assets/css'
  },
  img: {
    build: 'assets/img/**/*',
    dest: 'dist/img'
  }
};