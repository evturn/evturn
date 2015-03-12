var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselTemplate: _.template($('#carousel-template').html()),
	initialize: function() {
		this.addNav();
    this.carouselManagement();
	},
	events: {
		'click a' : 'setProject'
	},
  addIcon: function(model) {
    var view = new ProjectView({model: model});
    $('#carousel-nav').append(view.el);
  },
  addNav: function() {
    this.collection.each(function(model) {
      this.addIcon(model);
    }.bind(this));
  },
  setProject: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var project = this.collection.get(id);
    console.log(project);
    this.carouselManagement(project);
  },
  carouselManagement: function(model) {
    var carousel = model || this.collection.get(1);
    $('#carousel-slide').html(this.carouselTemplate(carousel.toJSON()));
    return this;
  },
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
});