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
    vdb: 'assets/js/data/**/*.js'
  },
  css: {
    build: 'assets/css/**/*.css',
    vendor: [
      'vendor/css/bootstrap.css',
      'vendor/css/animate.css',
      'vendor/css/font-awesome.comp.css',
      'vendor/css/devicon.comp.css'
    ]
  }
};