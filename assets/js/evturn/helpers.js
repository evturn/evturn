EVTURN.fn = {
  get: function(string) {
    var name = string;
    var data = EVTURN.data[name];
    var capitalized = (name.charAt(0).toUpperCase() + name.substring(1));
    var collection = new EVTURN[capitalized](data);
    var models = collection.where({featured: true});
    return new EVTURN[capitalized](models.reverse());
  },
  appendModels: function(className, collection, template) {
    $elem = $('.' + className);
    for (var i = collection.length - 1; i >= 0; i--) {
      $elem.append(template(collection.models[i].toJSON()));
    }
  },
  createElement: function(string) {
    $('.' + string).remove();
    var element = '<div class="' + string + '"></div>';
    $(element).insertAfter($('#rza'));
  },
  navActive: function(string) {
    $('.nav-link').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },
  build: function(string) {
    EVTURN.fn.navActive(string);
    EVTURN.fn.createElement(string);
  },
};