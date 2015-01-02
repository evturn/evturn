var Portfolio = Backbone.View.extend({
	el: $('#portfolio'),
	tabsTemplate: _.template($('#portfolio-template').html()),
	projectTemplate: _.template($('#project-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.tabsTemplate());
	}
});


console.log('Portfolio');