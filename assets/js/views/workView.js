var WorkView = Backbone.View.extend({
	workTemplate: _.template($('#work-template').html()),
	initialize: function() {
		this.render();
	},
	events: {},
	render: function() {
		this.$el.append(this.workTemplate(this.model.toJSON()));
		return this;
	},
});