var LinkView = Backbone.View.extend({
	tagName: 'li',
	className: 'nav-button',
	linksTemplate: _.template($('#links-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.linksTemplate(this.model.toJSON()));
		return this;
	},
});