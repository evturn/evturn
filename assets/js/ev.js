var ev = ev || {};

ev = {
  fetch: function(collection) {
    if (collection === 'projects') {
      return new Projects(projectObjects);
    } else if (collection === 'links') {
      return new Links(linkObjects);  
    } else if (collection === 'technologies') {
      return new Technologies(technologyObjects);
    } 
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