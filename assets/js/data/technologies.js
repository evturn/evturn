var techObjects = {
    node: function() {
      return {
        technology: 'Node.js',
        icon: 'devicon-nodejs-plain-wordmark',
        color: 'devicon-nodejs-plain-wordmark colored',
        id: 1
      };
    },
    angular: function() {
      return {
        technology: 'AngularJS',
        icon: 'devicon-angularjs-plain',
        color: 'devicon-angularjs-plain colored',
        id: 2
      };
    },
    backbone: function() {
      return {
        technology: 'Backbone.js',
        icon: 'devicon-backbonejs-plain',
        color: 'devicon-backbonejs-plain colored',
        id: 3
      };
    },
    jQuery: function() {
      return {
        technology: 'jQuery',
        icon: 'devicon-jquery-plain',
        color: 'devicon-jquery-plain colored',
        id: 4
      };
    },
    bootstrap: function() {
      return {
        technology: 'Bootstrap',
        icon: 'devicon-bootstrap-plain',
        color: 'devicon-bootstrap-plain colored',
        id: 5
      };
    },
    git: function() {
      return {
        technology: 'git',
        icon: 'devicon-git-plain',
        color: 'devicon-git-plain colored',
        id: 6
      };
    },
    photoshop: function() {
      return {
        technology: 'Photoshop',
        icon: 'devicon-photoshop-plain',
        color: 'devicon-photoshop-plain colored',
        id: 7
      };
    },
    digitalOcean: function() {
      return {
        technology: 'Droplet',
        icon: 'devicon-ubuntu-plain',
        color: 'devicon-ubuntu-plain colored',
        id: 8
      };
    },
    firebase: function() {
      return {
        technology: 'Firebase',
        icon: 'fa fa-database fa-2x',
        color: this.icon,
        id: 9
      };
    },
    mongoDB: function() {
      return {
        technology: 'MongoDB',
        icon: 'devicon-mongodb-plain',
        color: 'devicon-mongodb-plain colored',
        id: 10
      };
    },
    underscore: function() {
      return {
        technology: 'Underscore.js',
        icon: 'fa fa-minus fa-2x',
        color: this.icon,
        id: 11
      };
    },
    express: function() {
      return {
        technology: 'Express.js',
        icon: 'devicon-nodejs-plain',
        color: 'devicon-nodejs-plain colored',
        id: 12  
      };
    },
    mongodb: function() {
      return {
        technology: 'MongoDB',
        icon: 'devicon-mongodb-plain',
        color: 'devicon-nodejs-plain colored',
        id: 13  
      };
    },
    sass: function() {
      return {
        technology: 'Sass',
        icon: 'devicon-sass-original',
        color: 'devicon-sass-original colored',
        id: 14
      };
    },
    gulp: function() {
      return {
        technology: 'Gulp.js',
        icon: 'devicon-gulp-plain',
        color: 'devicon-gulp-plain',
        id: 15
      };
    }
};

var technologyObjects = [
  techObjects.backbone(),
  techObjects.node(),
  techObjects.gulp(),
  techObjects.sass(),
  techObjects.bootstrap(),
  techObjects.git(),
  techObjects.photoshop(),
  techObjects.mongodb(),
  techObjects.digitalOcean(),
  techObjects.express()
];
