EVTURN.fn = {
  featured: function(array) {
    var p = array;
    var a = [];
    for (var i = 0; i < p.length; i++) {
      var m = p[i];
      if (m.featured === true ) {
        a.push(m);
      }
    }
    a.reverse();
    return a;
  },
  work: function() {
    var a = EVTURN.fn.featured(EVTURN.data.projects);
    return new EVTURN.Projects(a);
  },
  links: function() {
    var a = EVTURN.fn.featured(EVTURN.data.links);
    return new EVTURN.Links(a);
  },
  tech: function() {
    var a = EVTURN.fn.featured(EVTURN.data.technologies);
    return new EVTURN.Technologies(a);
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