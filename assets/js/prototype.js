_.extend(Backbone.View.prototype, {

  get(string) {
    let data = EVTURN.data[string];
    let capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
    let collection = new EVTURN[capitalize](data);
    let models = collection.where({featured: true});

    return new EVTURN[capitalize](models.reverse());
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

});