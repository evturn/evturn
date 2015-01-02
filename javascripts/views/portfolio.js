var Portfolio = Backbone.View.extend({
	el: $('#portfolio'),
	tabsTemplate: _.template($('#portfolio-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.tabsTemplate());
		return this;
	}
});


console.log('Portfolio');