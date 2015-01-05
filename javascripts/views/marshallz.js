var MarshallzView = Backbone.View.extend({
	el: $('#project-img'),
	template: _.template($('#marshallz-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('MarshallzView');