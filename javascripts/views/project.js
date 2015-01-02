var ProjectView = Backbone.View.extend({
	el: $('#project'),
	template: _.template($('#project-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('ProjectView');