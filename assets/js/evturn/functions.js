class EVTURN {

  constructor() {
    this.Link = Backbone.Model.extend({});
    this.Project = Backbone.Model.extend({});
    this.Technology = Backbone.Model.extend({});
    this.Projects = Backbone.Collection.extend({
      model: this.Project,
    });
    this.Links = Backbone.Collection.extend({
      model: this.Link,
    });

    this.Technologies = Backbone.Collection.extend({
      model: this.Technology,
    });
  }

  init() {
    var router = new this.Router();

    this.animations.init();
    Backbone.history.start();
  }


  get(string) {
    var data = this.data[string];
    var key = this.capitalize(string);
    var collection = new this[key](data);
    var models = collection.where({featured: true});

    return new this[key](models.reverse());
  }

  getModelsById(string, array) {
    var data = this.data[string];
    var key = this.capitalize(string);
    var collection = new this[key](data);
    var models = [];

    for (let i = 0; i < array.length; i++) {
      var model = collection.findWhere({id: array[i]});
      models.push(model);
    }

    return new this[key](models.reverse());
  }

  capitalize(string) {
     return (string.charAt(0).toUpperCase() + string.substring(1));
  }

  setModel(selector, model, template) {
    var $selector = this.tojquery(selector);
    $selector.html(template(model.toJSON()));

    return this;
  }

  setView(selector, template) {
    var $selector = this.tojquery(selector);
    $selector.html(template());

    return this;
  }

  appendModel(selector, model, template) {
    var $selector = this.tojquery(selector);
    $selector.append(template(model.toJSON()));

    return this;
  }

  appendModels(selector, collection, template) {
    var $selector = this.tojquery(selector);

    for (let i = collection.length - 1; i >= 0; i--) {
      $selector.append(template(collection.models[i].toJSON()));
    }

    return this;
  }

  appendArray(selector, array, template) {
    var $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      var value = array[i];
      $selector.append(template({item: value}));
    }

    return this;
  }

  appendObjectsArray(selector, array, template) {
    var $selector = this.tojquery(selector);

    for (let i = 0; i < array.length; i++) {
      $selector.append(template(array[i]));
    }

    return this;
  }

  createElement(string) {
    var $selector = $(document.getElementsByClassName(string));
    var element = document.createElement('div');
    element.className = string;
    element.dataset.view = string;

    $selector.remove();
    $(element).insertAfter(new this.Rza().$el);
  }

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
  }

  navActive(string) {
    $('.nav-link').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  }

  changeState(string) {
    this.navActive(string);
    this.createElement(string);
  }

}