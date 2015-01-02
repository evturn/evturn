var Stack = Backbone.View.extend({
	el: $('#stack'),
	template: _.template($('#stack-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('Stack');