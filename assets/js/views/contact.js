var Contact = Backbone.View.extend({
	el: '.contact',
	contactTemplate: _.template($('#contact-template').html()),
	contactLinksTemplate: _.template($('#contact-links-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.contactTemplate());
		for (var i = contactLinks.length - 1; i >= 0; i--) {
			$('.contact-links').prepend(this.contactLinksTemplate(contactLinks.models[i].toJSON()));
		}
		return this;
	},
});