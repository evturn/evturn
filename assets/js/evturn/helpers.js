EVTURN.fn = {

  init: function() {
    EVTURN.animations.init();
    var route = new EVTURN.Router();
    Backbone.history.start();
  },

  get: function(string) {
    var data = EVTURN.data[string];
    var capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
    var collection = new EVTURN[capitalize](data);
    var models = collection.where({featured: true});
    return new EVTURN[capitalize](models.reverse());
  },

  getByIds: function(string, array) {
    var data = EVTURN.data[string];
    var capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
    var collection = new EVTURN[capitalize](data);
    var models = [];
    for (var i = 0; i < array.length; i++) {
      var model = collection.findWhere({id: array[i]});
      models.push(model);
    }
    return new EVTURN[capitalize](models.reverse());
  },

  setModel: function(selector, model, template) {
    $selector = EVTURN.fn.isNode(selector);
    $selector.html(template(model.toJSON()));
    return this;
  },

  setView: function(selector, template) {
    $selector = EVTURN.fn.isNode(selector);
    $selector.html(template());
    return this;
  },

  appendModel: function(selector, model, template) {
    $selector = EVTURN.fn.isNode(selector);
    $selector.append(template(model.toJSON()));
    return this;
  },

  appendModels: function(selector, collection, template) {
    $selector = EVTURN.fn.isNode(selector);
    for (var i = collection.length - 1; i >= 0; i--) {
      $selector.append(template(collection.models[i].toJSON()));
    }
    return this;
  },

  appendArray: function(selector, array, template) {
    $selector = EVTURN.fn.isNode(selector);
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      $selector.append(template({item: value}));
    }
    return this;
  },

  appendObjectsArray: function(selector, array, template) {
    $selector = EVTURN.fn.isNode(selector);
    for (var i = 0; i < array.length; i++) {
      $selector.append(template(array[i]));
    }
    return this;
  },

  createElement: function(string) {
    var $selector = $(document.getElementsByClassName(string));
    $selector.remove();
    var element = document.createElement('div');
    element.className = string;
    $(element).insertAfter(new EVTURN.Rza().$el);
  },

  isNode: function(element) {
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

  navActive: function(string) {
    $('.nav-link').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },

  changeState: function(string) {
    EVTURN.fn.navActive(string);
    EVTURN.fn.createElement(string);
  },

};