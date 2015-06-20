var ev = ev || {};

ev.ContactView = Backbone.View.extend({
	el: '.contact',
	containerTemplate: _.template($('#links-container-template').html()),
	itemTemplate: _.template($('#link-item-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.containerTemplate());
		for (var i = this.collection.length - 1; i >= 0; i--) {
			$('.contact-links').prepend(this.itemTemplate(this.collection.models[i].toJSON()));
		}
		return this;
	},
});