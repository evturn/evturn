var ev = ev || {};

ev.ContactView = Backbone.View.extend({
	el: '.contact',
	viewContainer: _.template($('#links-container-template').html()),
	itemContainer: _.template($('#link-item-template').html()),
	initialize: function() {
		this.collection = ev.links();
		this.render();
	},
	render: function() {
		this.$el.html(this.viewContainer());
		ev.appendModels('contact-links', this.collection, this.itemContainer);
	},
});