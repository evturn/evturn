var Bio = Backbone.View.extend({
	el: $('#bio'),
	template: _.template($('#bio-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('Bio');