var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselTemplate: _.template($('#carousel-template').html()),
	initialize: function() {
		this.addNav();
    this.renderCarousel();
	},
	events: {
		'click a' : 'setProject'
	},
  renderNav: function(model) {
    var view = new ProjectView({model: model});
    $('#carousel-nav').append(view.el);
  },
  addNav: function() {
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
    return this;
  },
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
});