"use strict";

const EVTURN = {

  init() {
    let router = new EVTURN.Router();

    this.preloader();
    Backbone.history.start();
  },

  get(string) {
    let key  = this.getKeyByName(string),
        name = this.getNameByKey(key),
        data = EVTURN[key],
        collection = this.createCollection(name, data),
        fetchedCollection = this.fetchCollection(name, collection);

    return fetchedCollection;
  },

  getKeyByName(string) {
    return '_' + string;
  },

  getNameByKey(string) {
    let name  = string.substr(1),
        toCap = (name.charAt(0).toUpperCase() + name.substring(1));

    return toCap;
  },

  createCollection(name, array) {
    let data           = array,
        collectionName = name;

    return new EVTURN[collectionName](data);
  },

  fetchCollection(name, collection) {
    let models         = collection.where({featured: true}),
        collectionName = name;

    models.reverse();

    return new EVTURN[collectionName](models);
  },

  getModelsById(string, array) {
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
  },

  setModel(selector, model, template) {
    let $selector = this.tojquery(selector);

    $selector.html(template(model.toJSON()));

    return this;
  },

  setView(selector, template) {
    let $selector = this.tojquery(selector);

    $selector.html(template());

    return this;
  },

  appendModel(selector, model, template) {
    let $selector = this.tojquery(selector);

    $selector.append(template(model.toJSON()));

    return this;
  },

  appendModels(selector, collection, template) {
    let $selector = this.tojquery(selector);

    for (let i = collection.length - 1; i >= 0; i--) {
      $selector.append(template(collection.models[i].toJSON()));
    }

    return this;
  },

  appendArray(selector, array, template) {
    let $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      let value = array[i];

      $selector.append(template({item: value}));
    }

    return this;
  },

  appendObjects(selector, array, template) {
    let $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      $selector.append(template(array[i]));
    }

    return this;
  },

  createElement(string) {
    let $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new EVTURN.Rza().$el);
  },

  tojquery(element) {
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
  },

  navActive(string) {
    $('.nav-item').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },

  changeState(string) {
    this.navActive(string);
    this.createElement(string);
  },

  scrollUp() {
    $('html, body').animate({scrollTop: 0 }, 500);

  },

  preloader() {

    $(window).load(function() {
      let $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });

  }

};

_.extend(Backbone.View.prototype, EVTURN);
_.extend(Backbone.Router.prototype, EVTURN);