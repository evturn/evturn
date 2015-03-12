var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselNavTemplate: _.template($('#carousel-nav-template').html()),
	initialize: function() {
		this.addAll();
    this.setNav();
	},
	events: {
		'click a' : 'setProject'
	},
  addOne: function(model) {
    var view = new ProjectView({model: model});
    this.$el.html(view.el);
    this.activateCarousel();
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
  },
  setProject: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var project = this.collection.get(id);
    this.addOne(project);
  },
  setNav: function() {
    this.collection.each(function(model) {
      $('#carousel-nav').append(this.carouselNavTemplate(model.toJSON()));
    }.bind(this));
  },
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
});