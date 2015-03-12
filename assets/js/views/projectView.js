var ProjectView = Backbone.View.extend({
	el: '#carousel-slide',
	projectTemplate: _.template($('#carousel-template').html()),
	initialize: function() {
		this.render();
	},
	events: {},
	render: function() {
		this.$el.html(this.projectTemplate(this.model.toJSON()));
		return this;
	},
});