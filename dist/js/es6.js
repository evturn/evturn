"use strict";
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EVTURN = (function () {
  function EVTURN() {
    _classCallCheck(this, EVTURN);

    this.Link = Backbone.Model.extend({});
    this.Project = Backbone.Model.extend({});
    this.Technology = Backbone.Model.extend({});
    this.Projects = Backbone.Collection.extend({
      model: this.Project
    });
    this.Links = Backbone.Collection.extend({
      model: this.Link
    });

    this.Technologies = Backbone.Collection.extend({
      model: this.Technology
    });
  }

  _createClass(EVTURN, [{
    key: "init",
    value: function init() {
      var router = new this.Router();

      this.animations.init();
      Backbone.history.start();
    }
  }, {
    key: "get",
    value: function get(string) {
      var data = this.data[string];
      var key = this.capitalize(string);
      var collection = new this[key](data);
      var models = collection.where({ featured: true });

      return new this[key](models.reverse());
    }
  }, {
    key: "getModelsById",
    value: function getModelsById(string, array) {
      var data = this.data[string];
      var key = this.capitalize(string);
      var collection = new this[key](data);
      var models = [];

      for (var i = 0; i < array.length; i++) {
        var model = collection.findWhere({ id: array[i] });
        models.push(model);
      }

      return new this[key](models.reverse());
    }
  }, {
    key: "capitalize",
    value: function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.substring(1);
    }
  }, {
    key: "setModel",
    value: function setModel(selector, model, template) {
      var $selector = this.tojquery(selector);
      $selector.html(template(model.toJSON()));

      return this;
    }
  }, {
    key: "setView",
    value: function setView(selector, template) {
      var $selector = this.tojquery(selector);
      $selector.html(template());

      return this;
    }
  }, {
    key: "appendModel",
    value: function appendModel(selector, model, template) {
      var $selector = this.tojquery(selector);
      $selector.append(template(model.toJSON()));

      return this;
    }
  }, {
    key: "appendModels",
    value: function appendModels(selector, collection, template) {
      var $selector = this.tojquery(selector);

      for (var i = collection.length - 1; i >= 0; i--) {
        $selector.append(template(collection.models[i].toJSON()));
      }

      return this;
    }
  }, {
    key: "appendArray",
    value: function appendArray(selector, array, template) {
      var $selector = this.tojquery(selector);

      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        $selector.append(template({ item: value }));
      }

      return this;
    }
  }, {
    key: "appendObjectsArray",
    value: function appendObjectsArray(selector, array, template) {
      var $selector = this.tojquery(selector);

      for (var i = 0; i < array.length; i++) {
        $selector.append(template(array[i]));
      }

      return this;
    }
  }, {
    key: "createElement",
    value: function createElement(string) {
      var $selector = $(document.getElementsByClassName(string));
      var element = document.createElement('div');
      element.className = string;
      element.dataset.view = string;

      $selector.remove();
      $(element).insertAfter(new this.Rza().$el);
    }
  }, {
    key: "tojquery",
    value: function tojquery(element) {
      switch (typeof element) {
        case "object":
          if (element instanceof jQuery) {
            return element;
          }
          break;

        case "string":
          if (element.charAt(0) === '.') {
            return $(element);
          } else {
            return $(document.getElementsByClassName(element));
          }
      }
    }
  }, {
    key: "navActive",
    value: function navActive(string) {
      $('.nav-link').removeClass('nav-active');
      $('.nav-' + string).addClass('nav-active');
    }
  }, {
    key: "changeState",
    value: function changeState(string) {
      this.navActive(string);
      this.createElement(string);
    }
  }]);

  return EVTURN;
})();
'use strict';

EVTURN.data = {
  technologies: [{
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
  }],
  projects: [{
    name: 'Music Insider',
    description: "Music Insider is a Los Angeles based podcast in which this website hosts along with a blog.",
    id: 1,
    url: 'http://musicinsider.co',
    repo: 'https://github.com/evturn/musicinsider.co',
    thumbnail: "dist/img/mi-tn.png",
    lead: "dist/img/mi-1.png",
    items: ['dist/img/mi-2.png', 'dist/img/mi-3.png', 'dist/img/mi-4.png', 'dist/img/mi-5.png'],
    featured: true,
    technologies: [1, 3, 14, 12, 10, 11, 13]
  }, {
    name: 'Marshallz Blog',
    description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
    id: 2,
    url: 'http://marshallz.com',
    repo: 'https://github.com/evturn/marshallz',
    thumbnail: "dist/img/marshallz-tn.png",
    lead: "dist/img/marshallz-1.png",
    items: ['dist/img/marshallz-2.png', 'dist/img/marshallz-6.png', 'dist/img/marshallz-3.jpg', 'dist/img/marshallz-5.png', 'dist/img/marshallz-4.jpg'],
    featured: true,
    technologies: [1, 3, 14, 12, 15, 9, 11]
  }, {
    name: 'Drive Publishing',
    description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
    id: 4,
    url: 'http://drivepublishing.com',
    repo: 'https://github.com/drivepublishing/drivepublishing.github.io',
    thumbnail: "dist/img/drive-tn.png",
    lead: 'dist/img/drive-1.png',
    items: ['dist/img/drive-2.png', 'dist/img/drive-3.png'],
    featured: true,
    technologies: [13, 11, 14]
  }, {
    name: 'Ramen Buffet',
    description: "Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.",
    id: 6,
    url: 'http://ramenbuffet.com',
    repo: 'https://github.com/evturn/ramen-buffet',
    thumbnail: "dist/img/ramen-tn.png",
    lead: 'dist/img/ramen-1.png',
    items: ['dist/img/ramen-2.png'],
    featured: true,
    technologies: [1, 3, 14, 12, 10, 11, 15]
  }, {
    name: 'Alculator',
    description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
    id: 5,
    thumbnail: "dist/img/alculator-tn.png",
    lead: "dist/img/alculator-3.png",
    items: ['dist/img/alculator-2.png', 'dist/img/alculator-1.png', 'dist/img/alculator-4.png'],
    featured: true,
    technologies: [1, 12, 3, 11]
  }, {
    name: 'Pique',
    description: "Pique is an app for people who are interested in networking, collaborating, and working on projects.",
    id: 3,
    repo: 'https://github.com/piqueapp/piqueapp.github.io',
    thumbnail: "dist/img/pique-tn.png",
    lead: "dist/img/pique-1.jpg",
    items: ['dist/img/pique-2.png', 'dist/img/pique-3.png', 'dist/img/pique-4.png'],
    featured: true,
    technologies: [16, 17, 11]
  }, {
    name: 'Hangman',
    description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
    id: 7,
    thumbnail: "dist/img/hangman-tn.png",
    lead: "dist/img/hangman-1.jpg",
    items: ['dist/img/hangman-2.jpg'],
    featured: true,
    technologies: [1, 12, 3, 11]
  }, {
    name: 'Tic Tac Toe',
    description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
    id: 8,
    thumbnail: "dist/img/ttt-tn.png",
    lead: 'dist/img/ttt-1.jpg',
    items: ['dist/img/ttt-2.jpg'],
    featured: false,
    technologies: [3, 11]
  }, {
    name: 'WhereTO',
    description: 'Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.',
    id: 9,
    repo: 'https://github.com/evturn/WhereTO',
    thumbnail: "dist/img/whereto-tn.png",
    lead: 'dist/img/whereto-2.png',
    items: ['dist/img/whereto-1.png'],
    featured: true,
    technologies: [1, 14, 12, 10, 13]
  }],
  links: [{
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
  }],
  stats: [{
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
  }],
  bio: ['As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.', 'While I enjoy building in a Node.js runtime environment, having worked with Rails and the MVC architectural pattern the framework implements, I find libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.']
};
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animations = (function (_EVTURN) {
  _inherits(animations, _EVTURN);

  function animations() {
    _classCallCheck(this, animations);

    _get(Object.getPrototypeOf(animations.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(animations, [{
    key: 'init',
    value: function init() {
      this.preloader();
    }
  }, {
    key: 'preloader',
    value: function preloader() {

      $(window).load(function () {
        var $container = $('#preloader');
        var $image = $('.preloader');

        $container.delay(500).fadeOut();
        $image.delay(600).fadeOut(600);
      });
    }
  }, {
    key: 'statCount',
    value: function statCount() {
      $('.stat-count').each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');

        EVTURN.animations.count($(this));
      });
    }
  }, {
    key: 'count',
    value: function count($this) {
      var current = parseInt($this.html(), 10);

      current = current + 50;
      $this.html(++current);
      if (current > $this.data('count')) {
        $this.html($this.data('count'));
      } else {
        setTimeout(function () {
          EVTURN.animations.count($this);
        }, 50);
      }
    }
  }, {
    key: 'scrollUp',
    value: function scrollUp() {
      $('html, body').animate({ scrollTop: 0 }, 500);
    }
  }, {
    key: 'carouselPreloader',
    value: function carouselPreloader(template) {
      $('.carousel-image-container').append(template());
      $('#carousel-preloader').delay(500).fadeOut();
      $('.carousel-preloader').delay(600).fadeOut(600);
    }
  }]);

  return animations;
})(EVTURN);
'use strict';

EVTURN.AboutView = Backbone.View.extend({

  el: '.about',

  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  statItem: _.template($('#stat-item-template').html()),
  bioItem: _.template($('#bio-paragraph-template').html()),

  initialize: function initialize() {
    this.collection = EVTURN.get('technologies');
    this.render();
  },

  render: function render() {
    EVTURN.setView(this.$el, this.viewContainer);
    EVTURN.appendModels('.technology-items', this.collection, this.itemContainer);
    EVTURN.appendObjectsArray('.statistics.stat-items', EVTURN.data.stats, this.statItem);
    EVTURN.appendArray('.paragraphs', EVTURN.data.bio, this.bioItem);
    EVTURN.animations.statCount();
    return this;
  }

});
'use strict';

EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',

  viewContainer: _.template($('#links-container-template').html()),
  itemContainer: _.template($('#link-item-template').html()),

  initialize: function initialize() {
    this.collection = EVTURN.get('links');
    this.render();
  },

  render: function render() {
    EVTURN.setView(this.$el, this.viewContainer);
    EVTURN.appendModels('.link-items', this.collection, this.itemContainer);
  }

});
'use strict';

EVTURN.IndexView = Backbone.View.extend({

  el: '.index',

  viewContainer: _.template($('#index-container-template').html()),

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    EVTURN.setView(this.$el, this.viewContainer);
    var tn = new EVTURN.Thumbnails(this.$el);
    return this;
  }

});
'use strict';

EVTURN.Carousel = Backbone.View.extend({

  el: '.work',

  viewContainer: _.template($('#carousel-container-template').html()),
  itemContainer: _.template($('#carousel-item-template').html()),
  itemDescription: _.template($('#carousel-panel-template').html()),
  itemPreloader: _.template($('#carousel-preloader-template').html()),
  itemTechnologies: _.template($('#project-technologies-template').html()),
  itemLinks: _.template($('#project-links-template').html()),

  initialize: function initialize() {
    this.render();
    this.setChildren();
  },

  render: function render() {
    EVTURN.setModel(this.$el, this.model, this.viewContainer);
    EVTURN.animations.carouselPreloader(this.itemPreloader);
    return this;
  },

  setChildren: function setChildren() {
    var images = this.model.get('items');
    var techIds = this.model.get('technologies');
    var technologies = EVTURN.getModelsById('technologies', techIds);

    EVTURN.appendModel('.carousel-panel', this.model, this.itemDescription);
    EVTURN.appendModel('.project-links', this.model, this.itemLinks);
    EVTURN.appendModels('.project-technologies', technologies, this.itemTechnologies);
    EVTURN.appendArray('.carousel-inner', images, this.itemContainer);
    var tn = new EVTURN.Thumbnails(this.$el);
    EVTURN.animations.scrollUp();
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

EVTURN.Thumbnails = Backbone.View.extend({
  el: '.thumbnails-wrapper',
  viewContainer: _.template($('#thumbnails-container-template').html()),
  itemContainer: _.template($('#thumbnail-item-template').html()),
  initialize: function initialize(selector) {
    this.collection = EVTURN.get('projects');
    this.render(selector);
  },
  events: {
    'click .thumbnail-item': 'EVTURN.animations.scrollUp'
  },
  render: function render($selector) {
    this.$el.empty();
    $selector.append(this.viewContainer());
    EVTURN.appendModels('.thumbnails-wrapper', this.collection, this.itemContainer);
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
    var collection = EVTURN.get('projects');
    var model = collection.get(id) || collection.get(1);

    this.work(model);
  }

});
"use strict";

var evturn = new EVTURN();