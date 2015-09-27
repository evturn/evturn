'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Router = require('./evturn-router');

var router = new Router();
EVTURN.init();
Backbone.history.start();
'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Compiler = require('./evturn-templates'),
    Get = require('./evturn-data'),
    Rza = require('./views/wrapper');

var EVTURN = {};

EVTURN.Model = Backbone.Model.extend({});
EVTURN.Collection = Backbone.Collection.extend({
  model: EVTURN.Model
});

EVTURN.init = function () {
  EVTURN.preloader();
  EVTURN.Nav();
};

EVTURN.get = function (value) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var data = undefined,
      models = undefined;

  switch (value) {
    case 'links':
      data = Get.links();
      break;
    case 'stats':
      data = Get.stats();
      break;
    case 'tech':
      data = Get.tech();
      break;
    case 'apps':
      data = Get.apps();
      break;
    case 'bio':
      data = Get.bio();
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
  $(element).insertAfter(new Rza().$el);
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

EVTURN.Nav = function () {
  var expand = function expand() {
    $('.ev-nav').removeClass('slideOutRight');
    $('.ev-nav').addClass('on');
    $('.ev-nav').addClass('slideInRight');
  };

  var collapse = function collapse() {
    $('.ev-nav').removeClass('slideInRight');
    $('.ev-nav').addClass('slideOutRight');
    setTimeout(function () {
      $('.ev-nav').removeClass('on');
    }, 500);
  };

  var render = function render() {
    var navTemplate = Compiler.navCompiler();
    $('.ev-nav').html(navTemplate());
  };

  var events = function events() {
    $(document).on('click touchstart', '.burger-container', function () {
      expand();
    });

    $(document).on('click touchstart', '.close-container', function () {
      collapse();
    });

    $(document).on('click', '.nav-item a', function () {
      collapse();
    });
  };

  var init = function init() {
    render();
    events();
  };

  return init();
};

_.extend(Backbone.View.prototype, EVTURN);

module.exports = EVTURN;
'use strict';

exports.videos = function () {
  return ['https://www.dropbox.com/s/ibiy6fwqjyb5uaw/vid-7.m4v?dl=1', 'https://www.dropbox.com/s/23upki10se8ve37/vid-15.m4v?dl=1', 'https://www.dropbox.com/s/8tqgae5yuf7x1n7/vid-6.m4v?dl=1', 'https://www.dropbox.com/s/0dk58ha0o191qmx/vid-11.m4v?dl=1', 'https://www.dropbox.com/s/jszss7t0msash80/vid-10.m4v?dl=1', 'https://www.dropbox.com/s/nijl1tqzivxjlnd/vid-8.m4v?dl=1', 'https://www.dropbox.com/s/0c507odqgqwjqv2/vid-3.m4v?dl=1', 'https://www.dropbox.com/s/dsab5kvchdzvzyp/vid-12.m4v?dl=1', 'https://www.dropbox.com/s/pinkna2jree0czu/vid-1.m4v?dl=1', 'https://www.dropbox.com/s/p56i6t3gxwbypbs/vid-16.m4v?dl=1', 'https://www.dropbox.com/s/a7vmoy155re7drv/vid-18.m4v?dl=1', 'https://www.dropbox.com/s/wloza0nswfwxb9f/vid-14.m4v?dl=1', 'https://www.dropbox.com/s/7y7zkt6a9ty7ebr/vid-17.m4v?dl=1', 'https://www.dropbox.com/s/ogq5n2az7o8ooxp/vid-2.m4v?dl=1'];
};

exports.links = function () {
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

exports.stats = function () {
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
    number: 7000,
    icon: 'fa fa-code'
  }];
};

exports.tech = function () {
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

exports.apps = function () {
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

exports.bio = function () {
  return [{
    paragraph: 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.'
  }, {
    paragraph: 'While I enjoy building in a Node.js runtime environment, having worked with Rails and the MVC architectural pattern the framework implements, I find libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.'
  }];
};
'use strict';

var EVTURN = require('./evturn-view'),
    Get = require('./evturn-data');

module.exports = function (video) {

    var Player = {};

    Player.initialized = false;
    Player.playCount = null;
    Player.playlist = Get.videos();
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
        video.type = 'video/mp4';
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

var _ = require('underscore');

var Compiler = {};

Compiler.carouselViewCompiler = function () {
  var html = '\n        <div class="container carousel">\n          <div class="carousel-image-container">\n            <div class="carousel slide animated bounceInLeft" data-ride="carousel" id="gallery">\n              <div class="carousel-inner">\n                <!-- Images -->\n              </div>\n            </div>\n          </div>\n        <div class="container info">\n          <div class="inner">\n            <div class="carousel-panel">\n              <!-- Description -->\n            </div>\n          </div>\n        </div>\n      </div>';

  return _.template(html);
};

Compiler.carouselImageCompiler = function () {
  var html = '\n        <div class="item">\n          <img class="img-scale gallery-item" src="<%= image %>">\n        </div>';

  return _.template(html);
};

Compiler.carouselPanelCompiler = function () {
  var html = '\n        <div class="panel-inner">\n          <div class="title-container">\n            <p class="section-title"><%= name %></p>\n          </div>\n          <div class="project-text">\n            <p class="meta"><%= description %></p>\n          </div>\n          <div class="project-technologies">\n            <!-- Technology-items -->\n          </div>\n          <div class="project-links">\n            <!-- Link items -->\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.carouselTechCompiler = function () {
  var html = '\n        <div class="technologies-item">\n          <i class="<%= icon %>"></i>\n          <p class="caption"><%= technology %></p>\n        </div>';

  return _.template(html);
};

Compiler.carouselLinkCompiler = function () {
  var html = '\n        <% var url = url ? \'<p class="meta"><a href="\' + url + \'" target="_blank"><i class="fa fa-link"></i></a></p>\' : \'\' %>\n          <%= url %>\n        <% var repo = repo ? \'<p class="meta"><a href="\' + repo + \'" target="_blank"><i class="fa fa-github"></i></a></p>\' : \'\' %>\n        <%= repo %>';

  return _.template(html);
};

Compiler.navCompiler = function () {
  var html = '\n        <div class="container nav-content">\n          <div class="inner">\n            <div class="nav-container">\n              <div class="nav-inner">\n                <div class="header-container">\n                  <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>\n                  <div class="image-overlay"></div>\n                </div>\n                <div class="close-container">\n                  <i class="fa fa-times"></i>\n                </div>\n              </div>\n            </div>\n            <div class="links-container">\n              <div data-view="work" class="nav-item nav-work">\n                <h4><a class="nav-link" href="#work">Work</a></h4>\n              </div>\n              <div data-view="about" class="nav-item nav-about">\n                <h4><a class="nav-link" href="#about">About</a></h4>\n              </div>\n              <div data-view="contact" class="nav-item nav-contact">\n                <h4><a class="nav-link" href="#contact">Contact</a></h4>\n              </div>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.heroCompiler = function () {
  var html = '\n        <section class="index-header">\n          <video id="ev-vid" poster="public/dist/img/site/vid-poster.gif" type="video/mp4">\n          </video>\n          <div class="carousel-index"></div>\n          <div class="curtain"></div>\n          <div class="container ev-navbar">\n            <div class="inner">\n              <div class="header-container">\n                <a href="/#work"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>\n                <div class="image-overlay"></div>\n              </div>\n              <div class="headline-container">\n                <h3 class="subhead">Evan Turner</h3>\n                <h3 class="subhead">Web Developer</h3>\n              </div>\n              <div class="burger-container">\n                <i class="fa fa-bars"></i>\n              </div>\n            </div>\n          </div>\n      </section>';

  return _.template(html);
};

Compiler.navbarCompiler = function () {
  var html = '\n        <div class="container ev-navbar">\n          <div class="inner">\n            <div class="header-container">\n              <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>\n              <div class="image-overlay"></div>\n            </div>\n            <div class="burger-container">\n              <i class="fa fa-bars"></i>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.carouselNavbarCompiler = function () {
  var html = '\n        <div class="container ev-navbar">\n          <div class="inner">\n            <div class="header-container">\n              <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale" id="carousel-logo"></a>\n              <div class="image-overlay"></div>\n              <div id="carousel-preloader">\n                <div id="carousel-spinner"></div>\n              </div>\n            </div>\n            <div class="burger-container">\n              <i class="fa fa-bars"></i>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.thumbnailViewCompiler = function () {
  var html = '\n        <div class="container thumbnails">\n          <div class="wrapper thumbnails-wrapper">\n            <!-- Thumbnails Items-->\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.thumbnailItemCompiler = function () {
  var html = '\n        <div class="thumbnail-item">\n          <a href="#work/<%= id %>">\n          <div class="thumbnail-inner">\n            <div class="image-container">\n              <img class="img-scale" src="<%= thumbnail %>">\n              <div class="shadow"></div>\n            </div>\n          </div>\n          </a>\n        </div>';

  return _.template(html);
};

Compiler.techViewCompiler = function () {
  var html = '\n        <div class="container about">\n          <div class="wrapper">\n            <div class="image-container animated fadeInUp">\n              <img class="img-scale" src="public/dist/img/site/tile.png">\n            </div>\n            <div class="bio-container">\n              <p class="section-title">Web Development</p>\n              <div class="paragraphs">\n                <!-- Bio -->\n              </div>\n            </div>\n            <div class="info-container">\n              <div class="stats-container">\n                <p class="subhead">Notable Build Tools</p>\n                <div class="technology-items stat-items">\n                  <!-- Technologies -->\n                </div>\n              </div>\n              <div class="stats-container">\n                <p class="subhead">Statistics</p>\n                <div class="statistics stat-items">\n                  <!-- Stats -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.techItemCompiler = function () {
  var html = '\n        <div class="stat-item">\n          <span class="stat-icon"><i class="<%= icon %>"></i></span>\n          <p class="meta"><%= technology %></p>\n        </div>';

  return _.template(html);
};

Compiler.statItemCompiler = function () {
  var html = '\n        <div class="stat-item">\n          <span class="stat-icon"><i class="<%= icon %>"></i></span>\n          <h5 class="stat-count"><%= number %></h5>\n          <p class="meta"><%= text %></p>\n        </div>';

  return _.template(html);
};

Compiler.bioCompiler = function () {
  var html = '\n        <div class="paragraph">\n          <p><%= paragraph %></p>\n        </div>';

  return _.template(html);
};

Compiler.contactViewCompiler = function () {
  var html = '\n        <div class="container contact animated fadeIn">\n          <div class="wrapper">\n            <div class="image-container">\n              <img class="img-scale" src="public/dist/img/site/city-invert.png">\n              <p class="header-subhead">@evturn // evturn [@] gmail [dot] com</p>\n            </div>\n            <div class="links-container">\n              <ul class="link-items">\n                <!-- Links -->\n              </div>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.linkItemCompiler = function () {
  var html = '\n        <li class="link-item">\n          <a target="_blank" href="<%= url %>"><i class="<%= icon %>"></i></a>\n        </li>';

  return _.template(html);
};

Compiler.footerCompiler = function () {
  var html = '\n      <footer class="container footer">\n        <div class="inner">\n          <div class="copyright-container">\n            <p>2015 © evturn.com | All Rights Reserved</p>\n          </div>\n        </div>\n      </footer>';

  return _.template(html);
};

module.exports = Compiler;
'use strict';

var EVTURN = require('../evturn-view'),
    Compiler = require('../evturn-templates');

module.exports = Backbone.View.extend({
  navbarTemplate: Compiler.navbarCompiler(),
  techViewTemplate: Compiler.techViewCompiler(),
  techItemTemplate: Compiler.techItemCompiler(),
  statItemTemplate: Compiler.statItemCompiler(),
  bioTemplate: Compiler.bioCompiler(),
  el: '.about',
  initialize: function initialize() {
    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },
  render: function render() {
    this.$el.html(this.navbarTemplate());
    this.$el.append(this.techViewTemplate());

    return this;
  },
  appendStats: function appendStats() {
    var $sel = $('.statistics.stat-items'),
        collection = EVTURN.get('stats');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(this.statItemTemplate(model));
    }

    return this;
  },
  appendTechnologies: function appendTechnologies() {
    var $sel = $('.technology-items'),
        collection = this.get('tech');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(this.techItemTemplate(model));
    }

    return this;
  },
  appendBio: function appendBio() {
    var $sel = $('.paragraphs'),
        collection = EVTURN.get('bio');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(this.bioTemplate(model));
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

var EVTURN = require('../evturn-view'),
    Compiler = require('../evturn-templates');

module.exports = Backbone.View.extend({
  navbarTemplate: Compiler.navbarCompiler(),
  contactViewTemplate: Compiler.contactViewCompiler(),
  linkItemTemplate: Compiler.linkItemCompiler(),
  el: '.contact',
  initialize: function initialize() {
    this.setView();
    this.appendLinks();
  },
  setView: function setView() {
    this.$el.html(this.navbarTemplate());
    this.$el.append(this.contactViewTemplate());

    return this;
  },
  appendLinks: function appendLinks() {
    var collection = EVTURN.get('links');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.link-items').append(this.linkItemTemplate(model));
    }

    return this;
  }
});
'use strict';

var Player = require('../evturn-video'),
    Compiler = require('../evturn-templates');

module.exports = Backbone.View.extend({
  heroTemplate: Compiler.heroCompiler(),
  el: '.index',
  initialize: function initialize() {
    this.render();
    this.setVideo();
  },
  render: function render() {
    this.$el.html(this.heroTemplate());

    return this;
  },
  setVideo: function setVideo() {
    $(document).ready(function () {
      var video = document.getElementById('ev-vid');

      Player(video);
    });
  }
});
'use strict';

var EVTURN = require('../evturn-view'),
    Compiler = require('../evturn-templates');

module.exports = Backbone.View.extend({
  thumbnailViewTemplate: Compiler.thumbnailViewCompiler(),
  thumbnailItemTemplate: Compiler.thumbnailItemCompiler(),
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
    $('.work').append(this.thumbnailViewTemplate());

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.thumbnails-wrapper').append(this.thumbnailItemTemplate(model));
    }

    return this;
  }
});
'use strict';

var _ = require('underscore'),
    Thumbnails = require('./thumbnails'),
    EVTURN = require('../evturn-view'),
    Compiler = require('../evturn-templates');

module.exports = Backbone.View.extend({
  carouselNavbarTemplate: Compiler.carouselNavbarCompiler(),
  carouselViewTemplate: Compiler.carouselViewCompiler(),
  carouselPanelTemplate: Compiler.carouselPanelCompiler(),
  carouselLinkTemplate: Compiler.carouselLinkCompiler(),
  carouselTechTemplate: Compiler.carouselTechCompiler(),
  carouselImageTemplate: Compiler.carouselImageCompiler(),
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
    this.$el.html(this.carouselNavbarTemplate());
    this.$el.append(this.carouselViewTemplate(model));

    return this;
  },
  appendCarouselPanel: function appendCarouselPanel() {
    var $sel = $('.carousel-panel'),
        model = this.model.toJSON();

    $sel.append(this.carouselPanelTemplate(model));

    return this;
  },
  appendProjectLinks: function appendProjectLinks() {
    var $sel = $('.project-links'),
        model = this.model.toJSON();

    $sel.append(this.carouselLinkTemplate(model));

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

      $sel.append(this.carouselTechTemplate(model));
    }

    return this;
  },
  appendCarouselImages: function appendCarouselImages() {
    var $sel = $('.carousel-inner'),
        models = this.model.get('items');

    for (var i = 0; i < models.length; i++) {
      var model = models[i];

      $sel.append(this.carouselImageTemplate(model));
      if (i === 0) {
        $sel.children().first().addClass('active');
      }
    }

    return this;
  },
  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new Thumbnails(this.$el);

    this.scrollUp();
  },
  carouselPreloader: function carouselPreloader() {
    var $img = $('#carousel-logo'),
        $container = $('#carousel-preloader');

    $img.addClass('spin');
    $container.delay(500).fadeOut();
    setTimeout(function () {
      $img.removeClass('spin');
    }, 780);
  }
});
'use strict';

module.exports = Backbone.View.extend({
  el: '#rza',
  child: null,
  render: function render() {
    this.$el.html(this.child.$el);

    return this;
  }
});
'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Rza = require('./views/wrapper'),
    Index = require('./views/index'),
    About = require('./views/about'),
    Contact = require('./views/contact'),
    Work = require('./views/work');

var Router = Backbone.Router.extend({
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
    this.wrapper = new Rza();
  },
  index: function index() {
    EVTURN.changeState('index');

    if (this.indexView === null) {
      this.indexView = new Index();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work: function work(model) {
    EVTURN.changeState('work');

    if (this.workView === null) {
      this.workView = new Work({ model: model });
      this.wrapper.child = this.workView;
    } else {
      var view = new Work({ model: model });
      this.wrapper.child = view;
    }

    this.wrapper.render();
  },
  about: function about() {
    EVTURN.changeState('about');

    if (this.aboutView === null) {
      this.aboutView = new About();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function contact() {
    EVTURN.changeState('contact');

    if (this.contactView === null) {
      this.contactView = new Contact();
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

module.exports = Router;