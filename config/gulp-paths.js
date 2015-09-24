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
  eslint: {
    src: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ],
    watch: [
      'public/build/js/evturn-view.js',
      'public/build/js/evturn-data.js',
      'public/build/js/evturn-video.js',
      'public/build/js/evturn-templates.js',
      'public/build/js/views/**/*.js',
      'public/build/js/router.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  },
  webpack: {
    watch: 'public/build/js/tmp/**/*.js'
  },
  js: {
    src: [
      'public/build/js/evturn-view.js',
      'public/build/js/evturn-data.js',
      'public/build/js/evturn-video.js',
      'public/build/js/evturn-templates.js',
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
        'public/build/js/vendor/google-analytics.js',
        'public/build/js/vendor/jquery.js',
        'public/build/js/vendor/underscore.js',
        'public/build/js/vendor/backbone.js',
        'public/build/js/vendor/backbone-nativeview.js',
        'public/build/js/vendor/backbone.js',
        'public/build/js/vendor/bootstrap.js'
      ],
      watch: 'public/build/js/vendor/**/*.js',
      filename: 'vendor.js',
      min: 'vendor.min.js'
    }
  },
  img: {
    apps: {
      src: 'public/build/img/apps/**/*'
    },
    site: {
      src: 'public/build/img/site/**/*'
    }
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