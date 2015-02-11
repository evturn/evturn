var Portfolio = Backbone.View.extend({
	el: $('#projects'),
	tabsTemplate: _.template($('#projects-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.tabsTemplate());
		return this;
	}
});