var ev = ev || {};


ev = {
  fetch: function(collection) {
    if (collection === 'projects') {
      return this.work();
    } else if (collection === 'links') {
      return new Links(linkObjects);  
    } else if (collection === 'technologies') {
      return new Technologies(technologyObjects);
    } 
  },
  work: function() {
    var p = projObj;
    var a = [];
    for (var i = 0; i < p.length; i++) {
      var m = p[i];
      if (m.featured === true ) {
        a.push(m);
      }
    }
    return new Projects(a);
  },
  createEl: function(string) {
    $('.' + string).remove();
    var element = '<div class="' + string + '"></div>';
    $(element).insertAfter($('#rza'));
  },
  navActive: function(string) {
    $('.nav-link').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },
  build: function(string) {
    this.navActive(string);
    this.createEl(string);
  }
};