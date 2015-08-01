// EVTURN.get = function(string) {
//   let data = EVTURN.data[string];
//   let capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
//   let collection = new EVTURN[capitalize](data);
//   let models = collection.where({featured: true});

//   return new EVTURN[capitalize](models.reverse());
// };

EVTURN.getModelsById = function(string, array) {
  let data = EVTURN.data[string];
  let capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
  let collection = new EVTURN[capitalize](data);
  let models = [];

  for (let i = 0; i < array.length; i++) {
    let model = collection.findWhere({id: array[i]});
    models.push(model);
  }

  return new EVTURN[capitalize](models.reverse());
};

EVTURN.setModel = function(selector, model, template) {
  let $selector = EVTURN.tojquery(selector);
  $selector.html(template(model.toJSON()));

  return this;
};

EVTURN.setView = function(selector, template) {
  let $selector = EVTURN.tojquery(selector);
  $selector.html(template());

  return this;
};

EVTURN.appendModel = function(selector, model, template) {
  let $selector = EVTURN.tojquery(selector);
  $selector.append(template(model.toJSON()));

  return this;
};

EVTURN.appendModels = function(selector, collection, template) {
  let $selector = EVTURN.tojquery(selector);

  for (let i = collection.length - 1; i >= 0; i--) {
    $selector.append(template(collection.models[i].toJSON()));
  }

  return this;
};

EVTURN.appendArray = function(selector, array, template) {
  let $selector = EVTURN.tojquery(selector);

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    $selector.append(template({item: value}));
  }

  return this;
};

EVTURN.appendObjectsArray = function(selector, array, template) {
  let $selector = EVTURN.tojquery(selector);

  for (let i = 0; i < array.length; i++) {
    $selector.append(template(array[i]));
  }

  return this;
};

EVTURN.createElement = function(string) {
  let $selector = $(document.getElementsByClassName(string));
  let element = document.createElement('div');
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