'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Router = require('./router');

var router = new Router();
EVTURN.init();
Backbone.history.start();
'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Compiler = require('./templates'),
    Get = require('./data'),
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
    var navTemplate = Compiler.nav();
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

var EVTURN = require('../evturn-view'),
    Compiler = require('../templates');

module.exports = Backbone.View.extend({
  navbarTemplate: Compiler.navbar(),
  techViewTemplate: Compiler.techView(),
  techItemTemplate: Compiler.techItem(),
  statItemTemplate: Compiler.statItem(),
  bioTemplate: Compiler.bio(),
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
    Compiler = require('../templates');

module.exports = Backbone.View.extend({
  navbarTemplate: Compiler.navbar(),
  contactViewTemplate: Compiler.contactView(),
  linkItemTemplate: Compiler.linkItem(),
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

var Player = require('../video-player'),
    Compiler = require('../templates');

module.exports = Backbone.View.extend({
  heroTemplate: Compiler.hero(),
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
    Compiler = require('../templates');

module.exports = Backbone.View.extend({
  thumbnailViewTemplate: Compiler.thumbnailView(),
  thumbnailItemTemplate: Compiler.thumbnailItem(),
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
    Compiler = require('../templates'),
    carousel = require('../carousel');

module.exports = Backbone.View.extend({
  carouselNavbarTemplate: Compiler.carouselNavbar(),
  carouselViewTemplate: Compiler.carouselView(),
  carouselPanelTemplate: Compiler.carouselPanel(),
  carouselLinkTemplate: Compiler.carouselLink(),
  carouselTechTemplate: Compiler.carouselTech(),
  carouselImageTemplate: Compiler.carouselImage(),
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
    }

    carousel();

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