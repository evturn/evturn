"use strict";

let EVTURN = window.EVTURN || {};

(function(EVTURN) {
  EVTURN.Model = Backbone.Model.extend({});
  EVTURN.Collection = Backbone.Collection.extend({
    model: EVTURN.Model
  });
  EVTURN.Link         = Backbone.Model.extend({});
  EVTURN.Project      = Backbone.Model.extend({});
  EVTURN.Technology   = Backbone.Model.extend({});
  EVTURN.Projects     = Backbone.Collection.extend({
    model: EVTURN.Project
  });
  EVTURN.Links        = Backbone.Collection.extend({
    model: EVTURN.Link
  });
  EVTURN.Technologies = Backbone.Collection.extend({
    model: EVTURN.Technology
  });

  EVTURN.init = function() {
    EVTURN.compile();
    let router = new EVTURN.Router();

    this.preloader();
    Backbone.history.start();
  };
  EVTURN.get = function(value) {
    let data;

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

    let filtered = _.has(_.first(data), 'featured') ? _.where(data, {featured: true}) : data,
        sorted = _.has(filtered, 'id') ? _.sortBy(filtered, 'id') : filtered;

    return new EVTURN.Collection(sorted);
  };


  EVTURN.getModelsById = function(string, array) {
    let ids        = array,
        key        = this.getKeyByName(string),
        name       = this.getNameByKey(key),
        data       = EVTURN[key],
        collection = this.createCollection(name, data),
        models     = [];

    for (let i = 0; i < ids.length; i++) {
      let model = collection.findWhere({id: ids[i]});

      models.push(model);
    }

    models.reverse();

    return new EVTURN[name](models);
  };
  EVTURN.setModel = function(selector, model, template) {
    let $selector = this.tojquery(selector);

    $selector.html(template(model.toJSON()));

    return this;
  };
  EVTURN.setView = function(selector, template) {
    let $selector = this.tojquery(selector);

    $selector.html(template());

    return this;
  };
  EVTURN.appendModel = function(selector, model, template) {
    let $selector = this.tojquery(selector);

    $selector.append(template(model.toJSON()));

    return this;
  };
  EVTURN.appendModels = function(selector, collection, template) {
    let $selector = this.tojquery(selector);

    for (let i = collection.length - 1; i >= 0; i--) {
      $selector.append(template(collection.models[i].toJSON()));
    }

    return this;
  };
  EVTURN.appendArray = function(selector, array, template) {
    let $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      let value = array[i];

      $selector.append(template({item: value}));
    }

    return this;
  };
  EVTURN.appendObjects = function(selector, array, template) {
    let $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      $selector.append(template(array[i]));
    }

    return this;
  };
  EVTURN.createElement = function(string) {
    let $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new EVTURN.Rza().$el);
  };
  EVTURN.tojquery = function(element) {
    switch (typeof element) {
      case "object":
        if (element instanceof jQuery) {
          return element;
        }
        break;

      case "string":
        if (element.charAt(0) === '.') {
          return $(element);
        }
        else {
          return $(document.getElementsByClassName(element));
        }
    }
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
  EVTURN.clear = function() {
    let el = document.querySelector('#rza');

    el.innerHTML = '';
  };

  _.extend(Backbone.View.prototype, EVTURN);

  return EVTURN;

})(EVTURN);
