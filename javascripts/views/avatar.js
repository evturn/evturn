var Avatar = Backbone.View.extend({
	el: $('#avatar'),
	template: _.template($('contact-template').html()),
	initialize: function() {
		this.render():
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('Avatar');