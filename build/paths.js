module.exports = {
  js: {
    build: [
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
  }
};