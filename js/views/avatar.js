var Avatar = Backbone.View.extend({
	el: $('#avatar'),
	template: _.template($('#avatar-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});