var ev = ev || {};

ev = {
  fetch: function(collection) {
    if (collection === 'projects') {
      return this.work();
    } else if (collection === 'links') {
      return this.links();  
    } else if (collection === 'technologies') {
      return this.tech();
    } 
  },
  work: function() {
    var a = this.objects(projObj);
    a.reverse();
    return new Projects(a);
  },
  links: function() {
    var a = this.objects(linksObj);
    return new Links(a);
  },
  tech: function() {
    var a = this.objects(techsObj);
    return new Technologies(a);
  },
  objects: function(array) {
    var p = array;
    var a = [];
    for (var i = 0; i < p.length; i++) {
      var m = p[i];
      if (m.featured === true ) {
        a.push(m);
      }
    }
    return a;
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