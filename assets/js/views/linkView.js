var LinkView = Backbone.View.extend({
	className: 'col-xs-3 col-sm-3 text-center',
	linksTemplate: _.template($('#links-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.prepend(this.linksTemplate(this.model.toJSON()));
		return this;
	},
});