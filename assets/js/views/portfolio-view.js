var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselTpl: _.template($('#carousel-template').html()),
  navTpl: _.template($('#carousel-nav-template').html()),
	initialize: function() {
		this.nav();
    this.carousel();
	},
	events: {
		'click .carousel-icon' : 'switch'
	},
  nav: function() {
    this.collection.each(function(model) {
      $('#carousel-nav').append(this.navTpl(model.toJSON()));
    }.bind(this));
  },
  switch: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var project = this.collection.get(id);
    this.carousel(project);
  },
  carousel: function(model) {
    var project = model || this.collection.get(1);
    $('#carousel-slide').html(this.carouselTpl(project.toJSON()));
    $('.summary').html(project.get('summary'));
    $('.specs').html(project.get('stack'));
    this.gallery(project);
    this.slide();
  },
	slide: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
  gallery: function(model) {
    var gallery = model.get('gallery');
    for (var i = gallery.length - 1; i >= 0; i--) {
      var screenshot = gallery[i];
      $('.carousel-inner').append('<div class="item"><img class="img-responsive center-block" src="' + screenshot + '"></div>');
    };
  },
});