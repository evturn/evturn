"use strict";

var EVTURN = window.EVTURN || {};

(function (EVTURN) {

  EVTURN.Model = Backbone.Model.extend({});
  EVTURN.Collection = Backbone.Collection.extend({
    model: EVTURN.Model
  });

  EVTURN.init = function () {
    EVTURN.compile();
    var router = new EVTURN.Router();

    EVTURN.preloader();
    Backbone.history.start();
  };

  EVTURN.get = function (value) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var data = undefined,
        models = undefined;

    switch (value) {
      case 'links':
        data = EVTURN.links();
        break;
      case 'stats':
        data = EVTURN.stats();
        break;
      case 'tech':
        data = EVTURN.tech();
        break;
      case 'apps':
        data = EVTURN.apps();
        break;
      case 'bio':
        data = EVTURN.bio();
        break;
    };

    if (options) {
      models = _.has(data, 'id') ? _.sortBy(data, 'id') : data;
    } else {
      var featured = _.has(_.first(data), 'featured') ? _.where(data, { featured: true }) : data;

      models = _.has(featured, 'id') ? _.sortBy(featured, 'id') : featured;
    }

    return new EVTURN.Collection(models);
  };

  EVTURN.createElement = function (string) {
    var $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new EVTURN.Rza().$el);
  };

  EVTURN.navActive = function (string) {
    $('.nav-item').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  };

  EVTURN.changeState = function (string) {
    this.navActive(string);
    this.createElement(string);
  };

  EVTURN.scrollUp = function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  };

  EVTURN.preloader = function () {
    $(window).load(function () {
      var $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });
  };

  _.extend(Backbone.View.prototype, EVTURN);

  return EVTURN;
})(EVTURN);
"use strict";

(function (app) {

  var Get = {};

  Get.links = function () {
    return [{
      name: 'email',
      url: 'mailto:evturn@gmail.com',
      icon: 'fa fa-envelope',
      featured: true
    }, {
      name: 'github',
      url: 'http://github.com/evturn',
      icon: 'fa fa-github-square',
      featured: true
    }, {
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/evturn/',
      icon: 'fa fa-linkedin-square',
      featured: true
    }, {
      name: 'general assembly',
      url: 'https://profiles.generalassemb.ly/ev',
      icon: 'fa fa-certificate',
      featured: false
    }, {
      name: 'twitter',
      url: 'http://twitter.com/evturn',
      icon: 'fa fa-twitter',
      featured: true
    }, {
      name: 'skype: @evturn',
      url: 'javaScript:void(0);', // jshint ignore:line
      icon: 'fa fa-skype',
      featured: false
    }];
  };

  Get.stats = function () {
    return [{
      text: 'Quesadillas Eaten',
      number: 777074,
      icon: 'fa fa-check'
    }, {
      text: 'Weekly Commits',
      number: 276,
      icon: 'fa fa-terminal'
    }, {
      text: 'Github Contributions',
      number: 6000,
      icon: 'fa fa-code'
    }];
  };

  Get.tech = function () {
    return [{
      technology: 'Node.js',
      icon: 'devicon-nodejs-plain-wordmark',
      color: 'devicon-nodejs-plain-wordmark colored',
      id: 1,
      featured: true
    }, {
      technology: 'AngularJS',
      icon: 'devicon-angularjs-plain',
      color: 'devicon-angularjs-plain colored',
      id: 2,
      featured: false
    }, {
      technology: 'Backbone.js',
      icon: 'devicon-backbonejs-plain',
      color: 'devicon-backbonejs-plain colored',
      id: 3,
      featured: true
    }, {
      technology: 'jQuery',
      icon: 'devicon-jquery-plain',
      color: 'devicon-jquery-plain colored',
      id: 4,
      featured: false
    }, {
      technology: 'Bootstrap',
      icon: 'devicon-bootstrap-plain',
      color: 'devicon-bootstrap-plain colored',
      id: 5,
      featured: false
    }, {
      technology: 'git',
      icon: 'devicon-git-plain',
      color: 'devicon-git-plain colored',
      id: 6,
      featured: true
    }, {
      technology: 'Photoshop',
      icon: 'devicon-photoshop-plain',
      color: 'devicon-photoshop-plain colored',
      id: 7,
      featured: true
    }, {
      technology: 'Ubuntu',
      icon: 'devicon-ubuntu-plain',
      color: 'devicon-ubuntu-plain colored',
      id: 8,
      featured: true
    }, {
      technology: 'Firebase',
      icon: 'fa fa-database one-half-em',
      color: 'fa fa-database one-half-em',
      id: 9,
      featured: false
    }, {
      technology: 'MongoDB',
      icon: 'devicon-mongodb-plain',
      color: 'devicon-mongodb-plain colored',
      id: 10,
      featured: true
    }, {
      technology: 'Underscore.js',
      icon: 'fa fa-minus one-half-em',
      color: 'fa fa-minus one-half-em',
      id: 11,
      featured: false
    }, {
      technology: 'Express.js',
      icon: 'devicon-nodejs-plain',
      color: 'devicon-nodejs-plain colored',
      id: 12,
      featured: true
    }, {
      technology: 'Sass',
      icon: 'devicon-sass-original',
      color: 'devicon-sass-original colored',
      id: 13,
      featured: true
    }, {
      technology: 'Gulp.js',
      icon: 'devicon-gulp-plain',
      color: 'devicon-gulp-plain',
      id: 14,
      featured: true
    }, {
      technology: 'Less',
      icon: 'devicon-less-plain-wordmark',
      color: 'devicon-less-plain-wordmark',
      id: 15,
      featured: true
    }, {
      technology: 'Rails',
      icon: 'devicon-rails-plain-wordmark',
      color: 'devicon-rails-plain-wordmark',
      id: 16,
      featured: false
    }, {
      technology: 'PostgreSQL',
      icon: 'devicon-postgresql-plain-wordmark',
      color: 'devicon-postgresql-plain-wordmark',
      id: 17,
      featured: false
    }];
  };

  Get.apps = function () {
    return [{
      name: 'Made In Music',
      description: "This website uses the Keystone.js CMS through Node and Express along with MongoDB. This app is currently running ECMAScript 2015 via transpilation by Babel.",
      id: 1,
      url: 'http://madeinmusic.co',
      repo: 'https://github.com/evturn/madeinmusic.co',
      thumbnail: "public/dist/img/apps/mim-tn.png",
      items: [{ image: 'public/dist/img/apps/mim-1.png' }, { image: 'public/dist/img/apps/mim-2.png' }, { image: 'public/dist/img/apps/mim-3.png' }],
      featured: true,
      technologies: [1, 3, 14, 12, 10, 11, 15]
    }, {
      name: 'Marshallz Blog',
      description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
      id: 2,
      url: 'http://marshallz.com',
      repo: 'https://github.com/evturn/marshallz',
      thumbnail: "public/dist/img/apps/marshallz-tn.png",
      items: [{ image: 'public/dist/img/apps/marshallz-1.png' }, { image: 'public/dist/img/apps/marshallz-2.png' }, { image: 'public/dist/img/apps/marshallz-6.png' }, { image: 'public/dist/img/apps/marshallz-3.jpg' }, { image: 'public/dist/img/apps/marshallz-5.png' }, { image: 'public/dist/img/apps/marshallz-4.jpg' }],
      featured: true,
      technologies: [1, 3, 14, 12, 15, 9, 11]
    }, {
      name: 'Drive Publishing',
      description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
      id: 4,
      url: 'http://drivepublishing.com',
      repo: 'https://github.com/drivepublishing/drivepublishing.github.io',
      thumbnail: "public/dist/img/apps/drive-tn.png",
      items: [{ image: 'public/dist/img/apps/drive-1.png' }, { image: 'public/dist/img/apps/drive-2.png' }, { image: 'public/dist/img/apps/drive-3.png' }],
      featured: true,
      technologies: [13, 11, 14]
    }, {
      name: 'Ramen Buffet',
      description: "Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.",
      id: 6,
      url: 'http://ramenbuffet.com',
      repo: 'https://github.com/evturn/ramen-buffet',
      thumbnail: "public/dist/img/apps/ramen-buffet-tn.png",
      items: [{ image: 'public/dist/img/apps/ramen-buffet-1.png' }, { image: 'public/dist/img/apps/ramen-buffet-2.png' }, { image: 'public/dist/img/apps/ramen-buffet-3.png' }],
      featured: true,
      technologies: [1, 3, 14, 12, 10, 11, 15]
    }, {
      name: 'Alculator',
      description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
      id: 5,
      thumbnail: "public/dist/img/apps/alculator-tn.png",
      items: [{ image: 'public/dist/img/apps/alculator-3.png' }, { image: 'public/dist/img/apps/alculator-2.png' }, { image: 'public/dist/img/apps/alculator-1.png' }, { image: 'public/dist/img/apps/alculator-4.png' }],
      featured: true,
      technologies: [1, 12, 3, 11]
    }, {
      name: 'Pique',
      description: "Pique is an app for people who are interested in networking, collaborating, and working on projects.",
      id: 3,
      repo: 'https://github.com/piqueapp/piqueapp.github.io',
      thumbnail: "public/dist/img/apps/pique-tn.png",
      items: [{ image: 'public/dist/img/apps/pique-1.jpg' }, { image: 'public/dist/img/apps/pique-2.png' }, { image: 'public/dist/img/apps/pique-3.png' }, { image: 'public/dist/img/apps/pique-4.png' }],
      featured: true,
      technologies: [16, 17, 11]
    }, {
      name: 'Hangman',
      description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
      id: 7,
      thumbnail: "public/dist/img/apps/hangman-tn.png",
      items: [{ image: 'public/dist/img/apps/hangman-1.jpg' }, { image: 'public/dist/img/apps/hangman-2.jpg' }],
      featured: true,
      technologies: [1, 12, 3, 11]
    }, {
      name: 'Tic Tac Toe',
      description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
      id: 8,
      thumbnail: "public/dist/img/apps/ttt-tn.png",
      items: [{ lead: 'public/dist/img/apps/ttt-1.jpg' }, { image: 'public/dist/img/apps/ttt-2.jpg' }],
      featured: false,
      technologies: [3, 11]
    }, {
      name: 'WhereTO',
      description: 'Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.',
      id: 9,
      repo: 'https://github.com/evturn/WhereTO',
      thumbnail: "public/dist/img/apps/whereto-tn.png",
      items: [{ image: 'public/dist/img/apps/whereto-2.png' }, { image: 'public/dist/img/apps/whereto-1.png' }],
      featured: true,
      technologies: [1, 14, 12, 10, 13]
    }];
  };

  Get.bio = function () {
    return [{
      paragraph: 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.'
    }, {
      paragraph: 'While I enjoy building in a Node.js runtime environment, having worked with Rails and the MVC architectural pattern the framework implements, I find libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.'
    }];
  };

  return _.extend(app, Get);
})(EVTURN);
"use strict";

(function (app) {
  var Compiler = {};

  EVTURN.navbarTemplate;
  EVTURN.heroTemplate;
  EVTURN.carouselViewTemplate;
  EVTURN.carouselPanelTemplate;
  EVTURN.carouselTechTemplate;
  EVTURN.carouselLinkTemplate;
  EVTURN.carouselImageTemplate;
  EVTURN.carouselPreloaderTemplate;
  EVTURN.thumbnailViewTemplate;
  EVTURN.thumbnailItemTemplate;
  EVTURN.contactViewTemplate;
  EVTURN.linkItemTemplate;
  EVTURN.techViewTemplate;
  EVTURN.techItemTemplate;
  EVTURN.statItemTemplate;
  EVTURN.bioTemplate;
  EVTURN.footerTemplate;

  Compiler.init = function () {
    Compiler.navbarCompiler();
    Compiler.heroCompiler();
    Compiler.carouselViewCompiler();
    Compiler.carouselPanelCompiler();
    Compiler.carouselTechCompiler();
    Compiler.carouselLinkCompiler();
    Compiler.carouselImageCompiler();
    Compiler.carouselPreloaderCompiler();
    Compiler.thumbnailViewCompiler();
    Compiler.thumbnailItemCompiler();
    Compiler.carouselLinkCompiler();
    Compiler.contactViewCompiler();
    Compiler.linkItemCompiler();
    Compiler.techViewCompiler();
    Compiler.techItemCompiler();
    Compiler.statItemCompiler();
    Compiler.bioCompiler();
    Compiler.footerCompiler();
  };

  Compiler.carouselViewCompiler = function () {
    var html = "\n          <div class=\"container carousel\">\n            <div class=\"wrapper carousel-wrapper\">\n              <div class=\"carousel-wrapper\">\n                <div class=\"carousel-image-container\">\n                  <div class=\"carousel slide animated bounceInLeft\" data-ride=\"carousel\" id=\"gallery\">\n                    <div class=\"carousel-inner\">\n                      <!-- Images -->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"carousel-panel\">\n                  <!-- Description -->\n                </div>\n              </div>\n            </div>\n          </div>";

    return EVTURN.carouselViewTemplate = _.template(html);
  };

  Compiler.carouselImageCompiler = function () {
    var html = "\n          <div class=\"item\">\n            <img class=\"img-scale gallery-item\" src=\"<%= image %>\">\n          </div>";

    return EVTURN.carouselImageTemplate = _.template(html);
  };

  Compiler.carouselPanelCompiler = function () {
    var html = "<div class=\"panel-inner\">\n          <div class=\"btn-container\">\n            <a class=\"btn btn-generic\" href=\"#gallery\" role=\"button\" data-slide=\"prev\"><i class=\"fa fa-angle-left\"></i></a>\n            <a class=\"btn btn-generic\" href=\"#gallery\" role=\"button\" data-slide=\"next\"><i class=\"fa fa-angle-right\"></i></a>\n          </div>\n          <div class=\"project-text\">\n            <p class=\"section-title\"><%= name %></p>\n            <p class=\"meta\"><%= description %></p>\n          </div>\n          <div class=\"project-technologies\">\n            <p class=\"meta\">Built with</p>\n            <!-- Technology-items -->\n          </div>\n          <div class=\"project-links\">\n            <!-- Link items -->\n          </div>\n        </div>";

    return EVTURN.carouselPanelTemplate = _.template(html);
  };

  Compiler.carouselTechCompiler = function () {
    var html = "\n          <div class=\"technologies-item\">\n            <i class=\"<%= icon %>\"></i>\n            <p class=\"caption\"><%= technology %></p>\n          </div>";

    return EVTURN.carouselTechTemplate = _.template(html);
  };

  Compiler.carouselLinkCompiler = function () {
    var html = "\n          <% var url = url ? '<p class=\"meta\"><a href=\"' + url + '\" target=\"_blank\"><i class=\"fa fa-link\"></i></a></p>' : '' %>\n            <%= url %>\n          <% var repo = repo ? '<p class=\"meta\"><a href=\"' + repo + '\" target=\"_blank\"><i class=\"fa fa-github\"></i></a></p>' : '' %>\n          <%= repo %>";

    return EVTURN.carouselLinkTemplate = _.template(html);
  };

  Compiler.carouselPreloaderCompiler = function () {
    var html = "\n          <div id=\"carousel-preloader\">\n            <div id=\"carousel-spinner\"></div>\n          <img class=\"carousel-preloader\" src=\"public/dist/img/site/evturn.jpg\">\n        </div>";

    return EVTURN.carouselPreloaderTemplate = _.template(html);
  };

  Compiler.heroCompiler = function () {
    var html = "\n          <section class=\"index-header\">\n            <video id=\"ev-vid\"></video>\n            <div class=\"carousel-index\"></div>\n            <div class=\"curtain\"></div>\n            <div class=\"container ev-navbar\">\n              <div class=\"inner\">\n                <div class=\"header-container\">\n                  <img src=\"public/dist/img/site/ev-av.png\" class=\"img-scale\">\n                  <div class=\"image-overlay\"></div>\n                </div>\n                <div class=\"headline-container\">\n                  <h3 class=\"subhead\">Evan Turner</h3>\n                  <h3 class=\"subhead\">Web Developer</h3>\n                </div>\n                <div class=\"burger-container\">\n                  <i class=\"fa fa-bars\"></i>\n                </div>\n              </div>\n            </div>\n        </section>";

    return EVTURN.heroTemplate = _.template(html);
  };

  Compiler.navbarCompiler = function () {
    var html = "\n          <div class=\"container ev-navbar\">\n            <div class=\"inner\">\n              <div class=\"header-container\">\n                <img src=\"public/dist/img/site/ev-av.png\" class=\"img-scale\">\n              </div>\n              <div class=\"burger-container\">\n                <i class=\"fa fa-bars\"></i>\n              </div>\n            </div>\n          </div>";

    return EVTURN.navbarTemplate = _.template(html);
  };

  Compiler.thumbnailViewCompiler = function () {
    var html = "\n          <div class=\"container thumbnails\">\n            <div class=\"wrapper thumbnails-wrapper\">\n              <!-- Thumbnails Items-->\n            </div>\n          </div>";

    return EVTURN.thumbnailViewTemplate = _.template(html);
  };

  Compiler.thumbnailItemCompiler = function () {
    var html = "\n          <div class=\"thumbnail-item\">\n            <a href=\"#work/<%= id %>\">\n            <div class=\"thumbnail-inner\">\n              <div class=\"image-container\">\n                <img class=\"img-scale\" src=\"<%= thumbnail %>\">\n                <div class=\"shadow\"></div>\n              </div>\n            </div>\n            </a>\n          </div>";

    return EVTURN.thumbnailItemTemplate = _.template(html);
  };

  Compiler.techViewCompiler = function () {
    var html = "\n          <div class=\"container about\">\n            <div class=\"wrapper\">\n              <div class=\"image-container animated fadeInUp\">\n                <img class=\"img-scale\" src=\"public/dist/img/site/tile.png\">\n              </div>\n              <div class=\"bio-container\">\n                <p class=\"section-title\">Web Developer</p>\n                <div class=\"paragraphs\">\n                  <!-- Bio -->\n                </div>\n              </div>\n              <div class=\"info-container\">\n                <div class=\"stats-container\">\n                  <p class=\"subhead\">Notable Build Tools</p>\n                  <div class=\"technology-items stat-items\">\n                    <!-- Technologies -->\n                  </div>\n                </div>\n                <div class=\"stats-container\">\n                  <p class=\"subhead\">Statistics</p>\n                  <div class=\"statistics stat-items\">\n                    <!-- Stats -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>";

    return EVTURN.techViewTemplate = _.template(html);
  };

  Compiler.techItemCompiler = function () {
    var html = "\n          <div class=\"stat-item\">\n            <i class=\"<%= icon %>\"></i>\n            <p class=\"specs\"><%= technology %></p>\n          </div>";

    return EVTURN.techItemTemplate = _.template(html);
  };

  Compiler.statItemCompiler = function () {
    var html = "\n          <div class=\"stat-item\">\n            <span class=\"stat-icon\"><i class=\"<%= icon %>\"></i></span>\n            <h4 class=\"stat-count\"><%= number %></h4>\n            <p><%= text %></p>\n          </div>";

    return EVTURN.statItemTemplate = _.template(html);
  };

  Compiler.bioCompiler = function () {
    var html = "\n          <div class=\"paragraph\">\n            <p><%= paragraph %></p>\n          </div>";

    return EVTURN.bioTemplate = _.template(html);
  };

  Compiler.contactViewCompiler = function () {
    var html = "\n          <div class=\"container contact animated fadeIn\">\n            <div class=\"wrapper\">\n              <div class=\"image-container\">\n                <img class=\"img-scale\" src=\"public/dist/img/site/city-invert.png\">\n                <p class=\"header-subhead\">@evturn // evturn [@] gmail [dot] com</p>\n              </div>\n              <div class=\"links-container\">\n                <ul class=\"link-items\">\n                  <!-- Links -->\n                </div>\n              </div>\n            </div>\n          </div>";

    return EVTURN.contactViewTemplate = _.template(html);
  };

  Compiler.linkItemCompiler = function () {
    var html = "\n          <li class=\"link-item\">\n            <a target=\"_blank\" href=\"<%= url %>\"><i class=\"<%= icon %>\"></i></a>\n          </li>";

    return EVTURN.linkItemTemplate = _.template(html);
  };

  Compiler.footerCompiler = function () {
    var html = "\n        <footer class=\"container footer\">\n          <div class=\"inner\">\n            <div class=\"copyright-container\">\n              <p>2015 © evturn.com | All Rights Reserved</p>\n            </div>\n          </div>\n        </footer>";

    return EVTURN.footerTemplate = _.template(html);
  };

  EVTURN.compile = Compiler.init;

  return EVTURN.compile;
})(EVTURN);
'use strict';

EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  initialize: function initialize() {
    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },
  render: function render() {
    this.$el.html(EVTURN.navbarTemplate());
    this.$el.append(EVTURN.techViewTemplate());

    return this;
  },
  appendStats: function appendStats() {
    var $sel = $('.statistics.stat-items'),
        collection = EVTURN.get('stats');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(EVTURN.statItemTemplate(model));
    }

    return this;
  },
  appendTechnologies: function appendTechnologies() {
    var $sel = $('.technology-items'),
        collection = EVTURN.get('tech');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(EVTURN.techItemTemplate(model));
    }

    return this;
  },
  appendBio: function appendBio() {
    var $sel = $('.paragraphs'),
        collection = EVTURN.get('bio');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(EVTURN.bioTemplate(model));
    }

    return this;
  },
  animateStats: function animateStats() {
    var self = this;

    $('.stat-count').each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      self.count($(this));
    });
  },
  count: function count($this) {
    var self = this,
        current = parseInt($this.html(), 10);

    current = current + 50;
    $this.html(++current);

    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function () {
        self.count($this);
      }, 50);
    }
  }
});
'use strict';

EVTURN.Carousel = Backbone.View.extend({

  el: '.work',
  initialize: function initialize() {
    this.render();
    this.carouselPreloader();
    this.appendCarouselPanel();
    this.appendProjectLinks();
    this.appendProjectTechnologies();
    this.appendCarouselImages();
    this.appendProjectThumbnails();
  },
  render: function render() {
    var model = this.model.toJSON();
    this.$el.html(EVTURN.navbarTemplate());
    this.$el.append(EVTURN.carouselViewTemplate(model));

    return this;
  },
  appendCarouselPanel: function appendCarouselPanel() {
    var $sel = $('.carousel-panel'),
        model = this.model.toJSON();

    $sel.append(EVTURN.carouselPanelTemplate(model));

    return this;
  },
  appendProjectLinks: function appendProjectLinks() {
    var $sel = $('.project-links'),
        model = this.model.toJSON();

    $sel.append(EVTURN.carouselLinkTemplate(model));

    return this;
  },
  appendProjectTechnologies: function appendProjectTechnologies() {
    var $sel = $('.project-technologies'),
        collection = EVTURN.get('tech', true),
        ids = this.model.get('technologies'),
        models = _.map(ids, function (id) {
      return collection.get(id);
    });

    for (var i = 0; i < models.length; i++) {
      var model = models[i].toJSON();

      $sel.append(EVTURN.carouselTechTemplate(model));
    }

    return this;
  },
  appendCarouselImages: function appendCarouselImages() {
    var $sel = $('.carousel-inner'),
        models = this.model.get('items');

    for (var i = 0; i < models.length; i++) {
      var model = models[i];

      $sel.append(EVTURN.carouselImageTemplate(model));
      if (i === 0) {
        $sel.children().first().addClass('active');
      }
    }

    return this;
  },
  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new EVTURN.Thumbnails(this.$el);

    this.scrollUp();
  },
  carouselPreloader: function carouselPreloader() {
    var $sel = $('.carousel-image-container');

    $sel.append(EVTURN.carouselPreloaderTemplate());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);
  }
});
'use strict';

EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  initialize: function initialize() {
    this.setView();
    this.appendLinks();
  },
  setView: function setView() {
    this.$el.html(EVTURN.navbarTemplate());
    this.$el.append(EVTURN.contactViewTemplate());

    return this;
  },
  appendLinks: function appendLinks() {
    var collection = EVTURN.get('links');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.link-items').append(EVTURN.linkItemTemplate(model));
    }

    return this;
  }
});
'use strict';

EVTURN.IndexView = Backbone.View.extend({

  el: '.index',
  initialize: function initialize() {
    this.render();
    // this.appendProjectThumbnails();
    this.setVideo();
  },
  render: function render() {
    this.$el.html(EVTURN.heroTemplate());

    return this;
  },
  setVideo: function setVideo() {
    $(document).ready(function () {
      var video = document.getElementById('ev-vid');

      EVTURN.Vid(video);
    });
  },
  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }
});

EVTURN.Vid = function (video) {

  var Player = {};

  Player.initialized = false;
  Player.playCount = null;
  Player.playlist = ['public/build/vid-7.mov', 'public/build/vid-10.mov', 'public/build/vid-15.mov', 'public/build/vid-3.mov', 'public/build/vid-11.mov', 'public/build/vid-6.mov', 'public/build/vid-8.mov', 'public/build/vid-12.mov', 'public/build/vid-13.mov', 'public/build/vid-1.mov', 'public/build/vid-16.mov', 'public/build/vid-18.mov', 'public/build/vid-14.mov', 'public/build/vid-17.mov', 'public/build/vid-2.mov'];

  Player.timekeeper = function () {
    var isLastVideo = !!(Player.playCount === Player.playlist.length - 1),
        isInitialized = Player.initialized;

    if (!isInitialized || isLastVideo) {
      Player.playCount = 0;
    } else {
      Player.playCount += 1;
    }
  };

  Player.init = function () {
    Player.timekeeper();
    video.muted = true;
    video.autoplay = true;
    video.preload = 'auto';
    video.src = Player.playlist[Player.playCount];
    video.addEventListener('ended', Player.callback);
    video.addEventListener('loadedmetadata', Player.reposition);
    video.play;
    video.playbackRate = 0.5;
    Player.initialized = true;
  };

  Player.callback = function () {
    Player.timekeeper();
    video.setAttribute('src', Player.playlist[Player.playCount]);
    Player.reposition();
    video.play;
    video.playbackRate = 0.5;
  };

  Player.reposition = function (e) {
    var width = video.videoWidth,
        height = video.videoHeight;

    if (height > width) {
      video.classList.remove('landscape');
      video.classList.add('portrait');
    } else {
      video.classList.remove('portrait');
      video.classList.add('landscape');
    }
  };

  Player.init();
};
'use strict';

EVTURN.Thumbnails = Backbone.View.extend({

  el: '.thumbnails-wrapper',
  events: {
    'click .thumbnail-item': 'scrollUp'
  },
  initialize: function initialize(selector) {
    this.render(selector);
  },
  render: function render($selector) {
    var collection = EVTURN.get('apps');

    this.$el.empty();
    $selector.append(EVTURN.thumbnailViewTemplate());

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.thumbnails-wrapper').append(EVTURN.thumbnailItemTemplate(model));
    }

    return this;
  }
});
'use strict';

EVTURN.Rza = Backbone.View.extend({

  el: '#rza',
  child: null,
  render: function render() {
    this.$el.html(this.child.$el);

    return this;
  }
});
'use strict';

EVTURN.Router = Backbone.Router.extend({

  wrapper: null,
  indexView: null,
  workView: null,
  aboutView: null,
  contactView: null,
  routes: {
    '': 'index',
    'work/*': 'project',
    'work/:id': 'project',
    'about': 'about',
    'contact': 'contact'
  },
  initialize: function initialize() {
    this.wrapper = new EVTURN.Rza();
  },
  index: function index() {
    EVTURN.changeState('index');

    if (this.indexView === null) {
      this.indexView = new EVTURN.IndexView();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work: function work(model) {
    EVTURN.changeState('work');

    if (this.workView === null) {
      this.workView = new EVTURN.Carousel({ model: model });
      this.wrapper.child = this.workView;
    } else {
      var view = new EVTURN.Carousel({ model: model });
      this.wrapper.child = view;
    }

    this.wrapper.render();
  },
  about: function about() {
    EVTURN.changeState('about');

    if (this.aboutView === null) {
      this.aboutView = new EVTURN.AboutView();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function contact() {
    EVTURN.changeState('contact');

    if (this.contactView === null) {
      this.contactView = new EVTURN.ContactView();
    }

    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project: function project(id) {
    var collection = EVTURN.get('apps'),
        model = collection.get(id) || collection.get(1);

    this.work(model);
  }
});

EVTURN.init();