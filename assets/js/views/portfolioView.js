var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	initialize: function() {
		this.addAll();
		// this.initializeCarousel();
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
  initializeCarousel: function() {
  	var project = this.collection.get(1);
  	this.addOne(project);
 },
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
});