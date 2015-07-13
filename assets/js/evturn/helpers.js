EVTURN.fn = {
  get: function(string) {
    var data = EVTURN.data[string];
    var capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
    var collection = new EVTURN[capitalize](data);
    var models = collection.where({featured: true});
    return new EVTURN[capitalize](models.reverse());
  },
  appendModels: function(className, collection, template) {
    $selector = $(document.getElementsByClassName(className));
    for (var i = collection.length - 1; i >= 0; i--) {
      $selector.append(template(collection.models[i].toJSON()));
    }
  },
  createElement: function(string) {
    var $selector = $(document.getElementsByClassName(string));
    $selector.remove();
    var element = document.createElement('div');
    element.className = string;
    $(element).insertAfter(new EVTURN.Rza().$el);
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