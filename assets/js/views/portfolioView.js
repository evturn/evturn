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
    $('#carousel-slide').empty();
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
    var first = this.collection.get(1);
    this.addOne(first);
  },
  setProject: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var project = this.collection.get(id);
    console.log(project);
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