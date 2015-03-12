var ProjectView = Backbone.View.extend({
	carouselNavTemplate: _.template($('#carousel-nav-template').html()),
	initialize: function() {
		this.render();
	},
	events: {},
	render: function() {
  	this.$el.append(this.carouselNavTemplate(this.model.toJSON()));
		return this;
	},
});