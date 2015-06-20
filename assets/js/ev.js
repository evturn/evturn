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
  }
};

