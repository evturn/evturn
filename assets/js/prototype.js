EVTURN = {

  init() {
    let router = new EVTURN.Router();

    this.preloader();
    Backbone.history.start();
  },

  get(string) {
    let key  = this.getKeyByName(string);
    let name = this.getNameByKey(key);
    let data = EVTURN[key];
    let collection = this.createCollection(name, data);
    let fetchedCollection = this.fetchCollection(name, collection);

    return fetchedCollection;
  },

  getKeyByName(string) {
    return '_' + string;
  },

  getNameByKey(string) {
    let name  = string.substr(1);
    let toCap = (name.charAt(0).toUpperCase() + name.substring(1));

    return toCap;
  },

  createCollection(name, array) {
    let data           = array;
    let collectionName = name;

    return new EVTURN[collectionName](data);
  },

  fetchCollection(name, collection) {
    let models         = collection.where({featured: true});
    let collectionName = name;

    models.reverse();

    return new EVTURN[collectionName](models);
  },

  getModelsById(string, array) {
    let data = EVTURN.data[string];
    let capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
    let collection = new EVTURN[capitalize](data);
    let models = [];

    for (let i = 0; i < array.length; i++) {
      let model = collection.findWhere({id: array[i]});
      models.push(model);
    }

    return new EVTURN[capitalize](models.reverse());
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

  appendObjectsArray(selector, array, template) {
    let $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      $selector.append(template(array[i]));
    }

    return this;
  },

  createElement(string) {
    let $selector = $(document.getElementsByClassName(string));
    let element = document.createElement('div');
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
    $('.nav-link').removeClass('nav-active');
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
      let $container = $('#preloader');
      let $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });

  }

};

_.extend(Backbone.View.prototype, EVTURN);
_.extend(Backbone.Router.prototype, EVTURN);