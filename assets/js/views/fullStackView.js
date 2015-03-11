var FullStackView = Backbone.View.extend({
	className: 'col-xs-6 col-sm-3',
	fullStackTemplate: _.template($('#stack-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.fullStackTemplate(this.model.toJSON()));
		return this;
	},
});