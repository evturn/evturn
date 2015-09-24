'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Compiler = require('./evturn-templates'),
    Get = require('./evturn-data');

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