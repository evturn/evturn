var ev = ev || {};

ev.ContactView = Backbone.View.extend({
	el: '.contact',
	viewContainer: _.template($('#links-container-template').html()),
	itemContainer: _.template($('#link-item-template').html()),
	initialize: function() {
		this.collection = ev.fetch('links');
		this.render();
	},
	render: function() {
		this.$el.html(this.viewContainer());
		for (var i = this.collection.length - 1; i >= 0; i--) {
			$('.contact-links').prepend(this.itemContainer(this.collection.models[i].toJSON()));
		}
		return this;
	},
});