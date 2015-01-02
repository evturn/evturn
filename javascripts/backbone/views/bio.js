var Bio = Backbone.View.extend({
	el: $('#bio'),
	initialize: function() {
		this.render();
	},
	template: _.bioTemplate($('#bio-template').html()),
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('Bio');