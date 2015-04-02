var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselTpl: _.template($('#carousel-template').html()),
  navTpl: _.template($('#carousel-nav-template').html()),
	initialize: function() {
		this.nav();
    this.carousel();
	},
	events: {
		'click .carousel-icon' : 'setProject'
	},
  renderNav: function(model) {
    $('#carousel-nav').append(this.navTpl(model.toJSON()));
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
    this.carousel(project);
  },
  carousel: function(model) {
    var activeModel = model || this.collection.get(1);
    $('#carousel-slide').html(this.carouselTpl(activeModel.toJSON()));
    $('.summary').html(activeModel.get('summary'));
    $('.specs').html(activeModel.get('stack'));
    this.addGallery(activeModel);
    this.slide();
    return this;
  },
	slide: function() {
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