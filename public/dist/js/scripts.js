"use strict";

var EVTURN = window.EVTURN || {};

(function (EVTURN) {
  EVTURN.Model = Backbone.Model.extend({});
  EVTURN.Collection = Backbone.Collection.extend({
    model: EVTURN.Model
  });
  EVTURN.Link = Backbone.Model.extend({});
  EVTURN.Project = Backbone.Model.extend({});
  EVTURN.Technology = Backbone.Model.extend({});
  EVTURN.Projects = Backbone.Collection.extend({
    model: EVTURN.Project
  });
  EVTURN.Links = Backbone.Collection.extend({
    model: EVTURN.Link
  });
  EVTURN.Technologies = Backbone.Collection.extend({
    model: EVTURN.Technology
  });

  EVTURN.init = function () {
    EVTURN.compile();
    var router = new EVTURN.Router();

    this.preloader();
    Backbone.history.start();
  };
  EVTURN.get = function (value) {
    var data = undefined;

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

    var models = _.where(data, { featured: true });
    models.reverse();

    var collection = new EVTURN.Collection(models);

    return collection;
  };

  EVTURN.getModelsById = function (string, array) {
    var ids = array,
        key = this.getKeyByName(string),
        name = this.getNameByKey(key),
        data = EVTURN[key],
        collection = this.createCollection(name, data),
        models = [];

    for (var i = 0; i < ids.length; i++) {
      var model = collection.findWhere({ id: ids[i] });

      models.push(model);
    }

    models.reverse();

    return new EVTURN[name](models);
  };
  EVTURN.setModel = function (selector, model, template) {
    var $selector = this.tojquery(selector);

    $selector.html(template(model.toJSON()));

    return this;
  };
  EVTURN.setView = function (selector, template) {
    var $selector = this.tojquery(selector);

    $selector.html(template());

    return this;
  };
  EVTURN.appendModel = function (selector, model, template) {
    var $selector = this.tojquery(selector);

    $selector.append(template(model.toJSON()));

    return this;
  };
  EVTURN.appendModels = function (selector, collection, template) {
    var $selector = this.tojquery(selector);

    for (var i = collection.length - 1; i >= 0; i--) {
      $selector.append(template(collection.models[i].toJSON()));
    }

    return this;
  };
  EVTURN.appendArray = function (selector, array, template) {
    var $selector = this.tojquery(selector);

    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      $selector.append(template({ item: value }));
    }

    return this;
  };
  EVTURN.appendObjects = function (selector, array, template) {
    var $selector = this.tojquery(selector);

    for (var i = 0; i < array.length; i++) {
      $selector.append(template(array[i]));
    }

    return this;
  };
  EVTURN.createElement = function (string) {
    var $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new EVTURN.Rza().$el);
  };
  EVTURN.tojquery = function (element) {
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
  EVTURN.clear = function () {
    var el = document.querySelector('#rza');

    el.innerHTML = '';
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
      thumbnail: "public/dist/img/mim-tn.png",
      lead: "public/dist/img/mim-1.png",
      items: ['public/dist/img/mim-2.png', 'public/dist/img/mim-3.png'],
      featured: true,
      technologies: [1, 3, 14, 12, 10, 11, 15]
    }, {
      name: 'Marshallz Blog',
      description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
      id: 2,
      url: 'http://marshallz.com',
      repo: 'https://github.com/evturn/marshallz',
      thumbnail: "public/dist/img/marshallz-tn.png",
      lead: "public/dist/img/marshallz-1.png",
      items: ['public/dist/img/marshallz-2.png', 'public/dist/img/marshallz-6.png', 'public/dist/img/marshallz-3.jpg', 'public/dist/img/marshallz-5.png', 'public/dist/img/marshallz-4.jpg'],
      featured: true,
      technologies: [1, 3, 14, 12, 15, 9, 11]
    }, {
      name: 'Drive Publishing',
      description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
      id: 4,
      url: 'http://drivepublishing.com',
      repo: 'https://github.com/drivepublishing/drivepublishing.github.io',
      thumbnail: "public/dist/img/drive-tn.png",
      lead: 'public/dist/img/drive-1.png',
      items: ['public/dist/img/drive-2.png', 'public/dist/img/drive-3.png'],
      featured: true,
      technologies: [13, 11, 14]
    }, {
      name: 'Ramen Buffet',
      description: "Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.",
      id: 6,
      url: 'http://ramenbuffet.com',
      repo: 'https://github.com/evturn/ramen-buffet',
      thumbnail: "public/dist/img/ramen-buffet-tn.png",
      lead: 'public/dist/img/ramen-buffet-1.png',
      items: ['public/dist/img/ramen-buffet-2.png', 'public/dist/img/ramen-buffet-3.png'],
      featured: true,
      technologies: [1, 3, 14, 12, 10, 11, 15]
    }, {
      name: 'Alculator',
      description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
      id: 5,
      thumbnail: "public/dist/img/alculator-tn.png",
      lead: "public/dist/img/alculator-3.png",
      items: ['public/dist/img/alculator-2.png', 'public/dist/img/alculator-1.png', 'public/dist/img/alculator-4.png'],
      featured: true,
      technologies: [1, 12, 3, 11]
    }, {
      name: 'Pique',
      description: "Pique is an app for people who are interested in networking, collaborating, and working on projects.",
      id: 3,
      repo: 'https://github.com/piqueapp/piqueapp.github.io',
      thumbnail: "public/dist/img/pique-tn.png",
      lead: "public/dist/img/pique-1.jpg",
      items: ['public/dist/img/pique-2.png', 'public/dist/img/pique-3.png', 'public/dist/img/pique-4.png'],
      featured: true,
      technologies: [16, 17, 11]
    }, {
      name: 'Hangman',
      description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
      id: 7,
      thumbnail: "public/dist/img/hangman-tn.png",
      lead: "public/dist/img/hangman-1.jpg",
      items: ['public/dist/img/hangman-2.jpg'],
      featured: true,
      technologies: [1, 12, 3, 11]
    }, {
      name: 'Tic Tac Toe',
      description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
      id: 8,
      thumbnail: "public/dist/img/ttt-tn.png",
      lead: 'public/dist/img/ttt-1.jpg',
      items: ['public/dist/img/ttt-2.jpg'],
      featured: false,
      technologies: [3, 11]
    }, {
      name: 'WhereTO',
      description: 'Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.',
      id: 9,
      repo: 'https://github.com/evturn/WhereTO',
      thumbnail: "public/dist/img/whereto-tn.png",
      lead: 'public/dist/img/whereto-2.png',
      items: ['public/dist/img/whereto-1.png'],
      featured: true,
      technologies: [1, 14, 12, 10, 13]
    }];
  };

  Get.bio = function () {
    return ['As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.', 'While I enjoy building in a Node.js runtime environment, having worked with Rails and the MVC architectural pattern the framework implements, I find libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.'];
  };

  return _.extend(app, Get);
})(EVTURN);
"use strict";

(function (app) {
  var Compiler = {};

  EVTURN.contactViewTemplate;
  EVTURN.linkItemTemplate;

  Compiler.init = function () {
    Compiler.contactViewCompiler();
    Compiler.linkItemCompiler();
  };

  Compiler.contactViewCompiler = function () {
    var html = "\n          <div class=\"container contact animated fadeIn\">\n            <div class=\"wrapper\">\n              <div class=\"image-container\">\n                <img class=\"img-scale\" src=\"public/dist/img/city-invert.png\">\n                <p class=\"header-subhead\">@evturn // evturn [@] gmail [dot] com</p>\n              </div>\n              <div class=\"links-container\">\n                <ul class=\"link-items\">\n                  <!-- Links -->\n                </div>\n              </div>\n            </div>\n          </div>";

    return EVTURN.contactViewTemplate = _.template(html);
  };

  Compiler.linkItemCompiler = function () {
    var html = "\n          <li class=\"link-item\">\n            <a target=\"_blank\" href=\"<%= url %>\"><i class=\"<%= icon %>\"></i></a>\n          </li>";

    return EVTURN.linkItemTemplate = _.template(html);
  };

  EVTURN.compile = Compiler.init;

  return EVTURN.compile;
})(EVTURN);
'use strict';

EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  statItem: _.template($('#stat-item-template').html()),
  bioItem: _.template($('#bio-paragraph-template').html()),

  initialize: function initialize() {
    this.collection = EVTURN.get('tech');

    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },

  render: function render() {
    var selector = this.$el,
        template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendStats: function appendStats() {
    var selector = '.statistics.stat-items',
        objects = EVTURN._stats,
        template = this.statItem;

    this.appendObjects(selector, objects, template);

    return this;
  },

  appendTechnologies: function appendTechnologies() {
    var selector = '.technology-items',
        collection = this.collection,
        template = this.itemContainer;

    this.appendModels(selector, collection, template);

    return this;
  },

  appendBio: function appendBio() {
    var selector = '.paragraphs',
        array = EVTURN._bio,
        template = this.bioItem;

    this.appendArray(selector, array, template);

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

EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  initialize: function initialize() {
    this.collection = EVTURN.get('links');
    this.setView();
    this.appendLinks();
  },
  setView: function setView() {
    this.$el.html(EVTURN.contactViewTemplate());

    return this;
  },
  appendLinks: function appendLinks() {
    var models = this.collection.models;

    for (var i = 0; i < models.length; i++) {
      var model = models[i].toJSON();

      $('.link-items').append(EVTURN.linkItemTemplate(model));
    };

    return this;
  }
});
'use strict';

EVTURN.IndexView = Backbone.View.extend({

  el: '.index',

  viewContainer: _.template($('#index-container-template').html()),

  initialize: function initialize() {
    this.render();
    this.appendProjectThumbnails();
  },

  render: function render() {
    var selector = this.$el,
        template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }

});
'use strict';

EVTURN.Thumbnails = Backbone.View.extend({

  el: '.thumbnails-wrapper',
  viewContainer: _.template($('#thumbnails-container-template').html()),
  itemContainer: _.template($('#thumbnail-item-template').html()),

  events: {
    'click .thumbnail-item': 'scrollUp'
  },

  initialize: function initialize(selector) {
    this.collection = EVTURN.get('apps');
    this.render(selector);
  },

  render: function render($selector) {
    this.$el.empty();
    $selector.append(this.viewContainer());
    this.appendModels('.thumbnails-wrapper', this.collection, this.itemContainer);

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
    this.carouselPreloader();
    this.appendCarouselPanel();
    this.appendProjectLinks();
    this.appendProjectTechnologies();
    this.appendCarouselImages();
    this.appendProjectThumbnails();
  },

  render: function render() {
    var selector = this.$el,
        model = this.model,
        template = this.viewContainer;

    this.setModel(selector, model, template);

    return this;
  },

  appendCarouselPanel: function appendCarouselPanel() {
    var selector = '.carousel-panel',
        model = this.model,
        template = this.itemDescription;

    this.appendModel(selector, model, template);

    return this;
  },

  appendProjectLinks: function appendProjectLinks() {
    var selector = '.project-links',
        model = this.model,
        template = this.itemLinks;

    this.appendModel(selector, model, template);

    return this;
  },

  appendProjectTechnologies: function appendProjectTechnologies() {
    var selector = '.project-technologies',
        techIds = this.model.get('technologies'),
        technologies = this.getModelsById('technologies', techIds),
        template = this.itemTechnologies;

    this.appendModels(selector, technologies, template);

    return this;
  },

  appendCarouselImages: function appendCarouselImages() {
    var selector = '.carousel-inner',
        images = this.model.get('items'),
        template = this.itemContainer;

    this.appendArray(selector, images, template);

    return this;
  },

  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new EVTURN.Thumbnails(this.$el);

    this.scrollUp();
  },

  carouselPreloader: function carouselPreloader() {
    var template = this.itemPreloader;

    $('.carousel-image-container').append(template());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);
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
    var collection = EVTURN.get('projects'),
        model = collection.get(id) || collection.get(1);

    this.work(model);
  }

});

EVTURN.init();