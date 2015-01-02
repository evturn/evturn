var Contact = Backbone.View.extend({
	el: $('#contact'),
	template: _.template($('#contact-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});


console.log('Contact');