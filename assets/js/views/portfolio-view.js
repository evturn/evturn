var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselTemplate: _.template($('#carousel-template').html()),
  navTemplate: _.template($('#carousel-nav-template').html()),
	initialize: function() {
		this.nav();
    this.renderCarousel();
	},
	events: {
		'click .carousel-icon' : 'setProject'
	},
  renderNav: function(model) {
    $('#carousel-nav').append(this.navTemplate(model.toJSON()));
    return this;
  },
  nav: function() {
    this.collection.each(function(model) {
      this.renderNav(model);
    }.bind(this));
  },
  setProject: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var project = this.collection.get(id);
    this.renderCarousel(project);
  },
  renderCarousel: function(model) {
    var activeModel = model || this.collection.get(1);
    $('#carousel-slide').html(this.carouselTemplate(activeModel.toJSON()));
    $('.summary').html(activeModel.get('summary'));
    $('.specs').html(activeModel.get('stack'));
    this.addGallery(activeModel);
    this.automateCarousel();
    return this;
  },
	automateCarousel: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
  addGallery: function(model) {
    var gallery = model.get('gallery');
    for (var i = gallery.length - 1; i >= 0; i--) {
      carouselItem = gallery[i];
    $('.carousel-inner').append('<div class="item"><img src="' + carouselItem + '"></div>');
    };
  },
});