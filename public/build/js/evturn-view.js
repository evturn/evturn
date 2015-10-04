let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Compiler = require('./evturn-templates'),
    Get = require('./evturn-data'),
    Rza = require('./views/wrapper');

let EVTURN = {};

EVTURN.Model = Backbone.Model.extend({});
EVTURN.Collection = Backbone.Collection.extend({
  model: EVTURN.Model
});

EVTURN.init = function() {
  EVTURN.preloader();
  EVTURN.Nav();
};

EVTURN.get = function(value, options=false) {
  let data,
      models;

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
  }
  else {
      let featured = _.has(_.first(data), 'featured') ? _.where(data, {featured: true}) : data;

      models = _.has(featured, 'id') ? _.sortBy(featured, 'id') : featured;
  }

  return new EVTURN.Collection(models);
};

EVTURN.createElement = function(string) {
  let $selector = $(document.getElementsByClassName(string)),
      element = document.createElement('div');

  element.className = string;
  element.dataset.view = string;
  $selector.remove();
  $(element).insertAfter(new Rza().$el);
};

EVTURN.navActive = function(string) {
  $('.nav-item').removeClass('nav-active');
  $('.nav-' + string).addClass('nav-active');
};

EVTURN.changeState = function(string) {
  this.navActive(string);
  this.createElement(string);
};

EVTURN.scrollUp = function() {
  $('html, body').animate({scrollTop: 0 }, 500);

};

EVTURN.preloader = function() {
  $(window).load(function() {
    let $container = $('#preloader'),
        $image = $('.preloader');

    $container.delay(500).fadeOut();
    $image.delay(600).fadeOut(600);
  });
};

EVTURN.Nav = function() {
  let expand = function() {
    $('.ev-nav').removeClass('slideOutRight');
    $('.ev-nav').addClass('on');
    $('.ev-nav').addClass('slideInRight');
  };

  let collapse = function() {
    $('.ev-nav').removeClass('slideInRight');
    $('.ev-nav').addClass('slideOutRight');
    setTimeout(function() {
      $('.ev-nav').removeClass('on');
    }, 500);
  };

  let render = function() {
    let navTemplate = Compiler.nav();
    $('.ev-nav').html(navTemplate());
  };

  let events = function() {
    $(document).on('click touchstart', '.burger-container', function() {
      expand();
    });

    $(document).on('click touchstart', '.close-container', function() {
      collapse();
    });

    $(document).on('click', '.nav-item a', function() {
      collapse();
    });
  };

  let init = function() {
    render();
    events();
  };

  return init();
};

_.extend(Backbone.View.prototype, EVTURN);

module.exports = EVTURN;