var Portfolio = Backbone.View.extend({
	el: $('#portfolio'),
	template: _.template($('#portfolio-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
	}
});


console.log('Portfolio');