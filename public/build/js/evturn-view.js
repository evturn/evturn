"use strict";

let EVTURN = window.EVTURN || {};

(function(EVTURN) {

  EVTURN.Model = Backbone.Model.extend({});
  EVTURN.Collection = Backbone.Collection.extend({
    model: EVTURN.Model
  });

  EVTURN.init = function() {
    EVTURN.compile();
    let router = new EVTURN.Router();

    EVTURN.preloader();
    EVTURN.renderNav();
    Backbone.history.start();
  };

  EVTURN.get = function(value, options=false) {
    let data,
        models;

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
    $(element).insertAfter(new EVTURN.Rza().$el);
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

  EVTURN.renderNav = function() {
    $(document).on('click', '.burger-container', function() {
      console.log('Clikfds');
      $('.ev-nav').html(EVTURN.navTemplate());
    });
  };

  _.extend(Backbone.View.prototype, EVTURN);

  return EVTURN;

})(EVTURN);
