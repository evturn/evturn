var FullStackView = Backbone.View.extend({
	tagName: 'li',
	className: 'stack-tab',
	fullStackTemplate: _.template($('#full-stack-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.fullStackTemplate(this.model.toJSON()));
		return this;
	},
});