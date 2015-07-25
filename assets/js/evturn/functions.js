EVTURN.get = function(string) {
  var data = EVTURN.data[string];
  var capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
  var collection = new EVTURN[capitalize](data);
  var models = collection.where({featured: true});

  return new EVTURN[capitalize](models.reverse());
};

EVTURN.getModelsById = function(string, array) {
  var data = EVTURN.data[string];
  var capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
  var collection = new EVTURN[capitalize](data);
  var models = [];

  for (var i = 0; i < array.length; i++) {
    var model = collection.findWhere({id: array[i]});
    models.push(model);
  }

  return new EVTURN[capitalize](models.reverse());
};

EVTURN.setModel = function(selector, model, template) {
  $selector = EVTURN.tojquery(selector);
  $selector.html(template(model.toJSON()));

  return this;
};

EVTURN.setView = function(selector, template) {
  $selector = EVTURN.tojquery(selector);
  $selector.html(template());

  return this;
};

EVTURN.appendModel = function(selector, model, template) {
  $selector = EVTURN.tojquery(selector);
  $selector.append(template(model.toJSON()));

  return this;
};

EVTURN.appendModels = function(selector, collection, template) {
  $selector = EVTURN.tojquery(selector);

  for (var i = collection.length - 1; i >= 0; i--) {
    $selector.append(template(collection.models[i].toJSON()));
  }

  return this;
};

EVTURN.appendArray = function(selector, array, template) {
  $selector = EVTURN.tojquery(selector);

  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    $selector.append(template({item: value}));
  }

  return this;
};

EVTURN.appendObjectsArray = function(selector, array, template) {
  $selector = EVTURN.tojquery(selector);

  for (var i = 0; i < array.length; i++) {
    $selector.append(template(array[i]));
  }

  return this;
};

EVTURN.createElement = function(string) {
  var $selector = $(document.getElementsByClassName(string));
  var element = document.createElement('div');
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
  $('.nav-link').removeClass('nav-active');
  $('.nav-' + string).addClass('nav-active');
};

EVTURN.changeState = function(string) {
  EVTURN.navActive(string);
  EVTURN.createElement(string);
};