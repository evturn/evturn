var PortfolioView = Backbone.View.extend({
	el: '#project',
	initialize: function() {
		$projectEl = $('#project');
		total = projectsCollection.length
		this.addAll();
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
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 2000
		});
	},
});